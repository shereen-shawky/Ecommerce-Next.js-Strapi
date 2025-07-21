'use client';
import React, { useState, useEffect } from 'react';
import productApis from '../_utils/productApis';
import ProductCard from './ProductCard';
import wishlistApis from '../_utils/wishlistApis';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

const tabs = ['Bestseller', 'New', 'Featured'];

const ProductGrid = () => {
  const [activeTab, setActiveTab] = useState('Bestseller');
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
    productApis.getProductByCategory(activeTab)
      .then(res => setProducts(res.data.data))
      .catch(err => console.error("Error fetching products:", err));
  };

  useEffect(() => {
    fetchProducts();
  }, [activeTab]);

  return (
    <div className="bg-white py-10 px-8">
      <div className="flex space-x-6 mb-8 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeTab === tab
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:mx-[115px]">
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

export default ProductGrid;