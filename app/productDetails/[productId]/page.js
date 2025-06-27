'use client'
import React, { useEffect } from 'react'
import productApis from '../../_utils/productApis.js'
import ProductList from './../../_components/ProductList.jsx';
import ProductImage from './_components/ProductImage.jsx';
import ProductDescription from './_components/ProductDescription.jsx';
import Breadcrumbs from '../../_components/BreadCrumbs.jsx';
import { usePathname } from 'next/navigation';
export default function ProductDetails({params}) {
      const path= usePathname();
      const { productId } = React.use(params); // Unwrap the params Promise
      const [product, setProduct] = React.useState({});
      const [similarProducts, setSimilarProducts] = React.useState([]);
useEffect(() => {
    // Fetch product details using params.productId
    productApis.getProductById(productId).then((response) => {
    console.log(response.data.data);
    setProduct(response.data.data);
    getProductByCategory(response.data.data)
    },[productId]);
    
})
const getProductByCategory = (product) => {
    productApis.getProductByCategory(product.category).then((response) => {
        console.log(response.data.data);
        setSimilarProducts(response.data.data)
    });
  }
  return (
    <div className="container mx-auto p-4">
      <Breadcrumbs path={path}/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <ProductImage product={product}/>
        <ProductDescription product={product}/>
      </div>
      <h2 className="text-2xl font-bold mt-25 mb-10">Similar Products</h2>
      <ProductList productlist={similarProducts}/>
    </div>
  )
}
