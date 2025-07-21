'use client';
import React from 'react';
import {ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import productApis from '../_utils/productApis';
import ProductCard from './ProductCard';
import wishlistApis from '../_utils/wishlistApis';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

const LatestProducts = () => {
    const [products, setProducts] = useState([]);
const [likedItems, setLikedItems] = useState([]);
  const { user, isLoaded } = useUser();
  const router = useRouter();

  // Fetch wishlist on component mount and when user changes
  useEffect(() => {
    const fetchWishlist = async () => {
      if (isLoaded && user) {
        try {
          const res = await wishlistApis.getwishlist(user.primaryEmailAddress.emailAddress);
          const likedProducts = res.data.data.flatMap(item => 
            item.products?.map(product => product.id) || []
          );
          setLikedItems(likedProducts);
        } catch (error) {
          console.error("Failed to fetch wishlist:", error);
        }
      }
    };

    fetchWishlist();
  }, [user, isLoaded]);

  const toggleLike = async (productId) => {
    if (!user) {
      router.push('/sign-in');
      return;
    }

    try {
      const data = {
        userEmail: user.primaryEmailAddress.emailAddress,
        products: [productId]
      };

      await wishlistApis.addTowishlist(data);
      
      // Update local state immediately for better UX
      setLikedItems(prev => {
        const isLiked = prev.includes(productId);
        return isLiked 
          ? prev.filter(id => id !== productId) 
          : [...prev, productId];
      });
      
    } catch (error) {
      console.error("Failed to toggle like:", error);
    }
  };

const fetchProducts = () => {
  console.log("fetchProducts called");
  productApis
    .getLatestProducts()
    .then((res) => {
      console.log('Best Selling Products:', res.data);
      setProducts(res.data.data);
    })
    .catch((err) => {
      console.error("Error fetching products:", err);
    });
};
useEffect(() => {
  console.log("useEffect triggered");
  fetchProducts();
}, []);

  return (
    <div className="py-10 px-4 md:mx-[120px] text-center">
      <h2 className=" text-2xl md:text-2xl font-bold text-gray-800 mb-6 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-gray-400 after:mt-2 after:mx-auto">
        Latest Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isLiked={likedItems.includes(product.id)}
            toggleLike={() => toggleLike(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
