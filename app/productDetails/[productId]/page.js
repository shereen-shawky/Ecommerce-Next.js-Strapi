'use client';
import React, { useEffect, useState } from 'react';
import productApis from '../../_utils/productApis.js';
import ProductImage from './_components/ProductImage.jsx';
import ProductDescription from './_components/ProductDescription.jsx';
import Breadcrumbs from '../../_components/BreadCrumbs.jsx';
import { usePathname } from 'next/navigation';
import ProductCard from '../../_components/ProductCard.jsx';

export default function ProductDetails({ params }) {
  const path = usePathname();
  const { productId } = params;

  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    productApis.getProductById(productId).then((response) => {
      const productData = response.data.data;
      console.log('Fetched product:', productData);
      setProduct(productData);
      getProductByCategory(productData);
    });
  }, [productId]);

  const getProductByCategory = (product) => {
    if (!product?.Type) return;
    productApis.getProductByType(product.Type).then((response) => {
      const products = response.data.data;
      console.log('Similar products:', products);
      // Filter out current product from similar list
      const filtered = products.filter((p) => p.id !== product.id);
      setSimilarProducts(filtered);
    });
  };

  return (
    <div className="container mx-auto p-4 pt-20">
      <Breadcrumbs path={path} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <ProductImage product={product} />
        <ProductDescription product={product} />
      </div>

      <h2 className="text-2xl font-bold mt-16 mb-6">Similar Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {similarProducts.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            likedItems={[]} 
            toggleLike={() => {}}
          />
        ))}
      </div>
    </div>
  );
}
