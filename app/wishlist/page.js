'use client';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { Heart } from 'lucide-react';
import wishlistApis from '../_utils/wishlistApis';

export default function WishlistPage() {
  const [wishlists, setWishlists] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const email = user?.primaryEmailAddress?.emailAddress;

  useEffect(() => {
    if (email) {
      fetchWishlists();
    }
  }, [email]);

  const fetchWishlists = async () => {
    setLoading(true);
    try {
      const res = await wishlistApis.getwishlist(email);
      // Process the response data to get unique products
      const allProducts = res.data.data.flatMap(wishlist => 
        wishlist.products.map(product => ({
          ...product,
          wishlistId: wishlist.id, // Include wishlist ID for removal
          // Generate a unique key combining wishlistId and productId
          uniqueKey: `${wishlist.id}-${product.id}`
        }))
      );

      // Remove duplicates by filtering for unique keys
      const uniqueProducts = allProducts.filter(
        (product, index, self) => 
          index === self.findIndex(p => p.uniqueKey === product.uniqueKey)
      );

      setWishlists(uniqueProducts);
    } catch (error) {
      console.error('Error fetching wishlists:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (wishlistID) => {
  try {
    const response = await wishlistApis.deletewishlistItem(wishlistID);
    
    if (response.status === 200) {
      // Update state to remove deleted item
      setWishlists(prev => prev.filter(item => item.id !== wishlistID));
      alert('Successfully deleted!');
    }
  } catch (error) {
    console.error('Delete failed:', {
      status: error.response?.status,
      data: error.response?.data
    });
    alert('Failed to delete: ' + (error.response?.data?.error?.message || error.message));
  }
};
  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (wishlists.length === 0) return <div className="pt-25 text-center">Your wishlist is empty</div>;

  return (
    <div className="p-8 min-h-screen bg-gray-50 md:mx-[120px] pt-20">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlists.map((product) => (
          <div 
            key={product.uniqueKey} // Use the generated unique key
            className="relative bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            {product.banner?.url && (
              <img
                src={`http://localhost:1337${product.banner.url}`}
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
                loading="lazy"
              />
            )}
            
            <button
              onClick={() => handleDelete(product.wishlistId, product.id)}
              className="absolute top-3 right-3 p-2 bg-white rounded-full shadow hover:bg-red-50"
            >
              <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            </button>

            <div className="p-2">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}