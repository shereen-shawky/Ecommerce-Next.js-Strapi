'use client'
import React, { useContext } from 'react'
import { ShoppingCart } from 'lucide-react';
import Skeleton from './Skeleton';
import {useUser} from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import cartApis from '../../../_utils/cartApis';
import { CartContext } from '../../../_context/CartContext';
export default function ProductDescription({product}) {
  const { user } = useUser();
  const router=useRouter();
  const {cart,setCart}=useContext(CartContext);
  const handleAddToCart = () => {
    if(!user){
      router.push('/sign-in');
    }else{
      const data={
        username:user.fullName,
          email:user.primaryEmailAddress.emailAddress,
          products: [product?.id],
      }
      // const isInCart = cart.some(item => item.id === product.id);
      // if (isInCart) return; // Skip if already added

        // Here you would typically add the product to the user's cart
        cartApis.addToCart(data).then((res) => {
        cartApis.getCart(user.primaryEmailAddress.emailAddress).then((res) => {
      const formatted = res.data.data.flatMap(cartItem =>
  (cartItem.products || []).map(product => ({
    cartItemId: cartItem.id,
    ...product,
  }))
);

      setCart(formatted); // ✅ This triggers your Cart to re-render
    });
    }
  )}
  };
  return (
    <div className="w-full max-w-xl p-6 rounded-xl ">
  {product?.id ? (
    <>
      {/* Best Seller Badge */}
      {product.isBestseller && (
        <span className="inline-block mb-3 bg-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide shadow">
          Best Seller
        </span>
      )}

      {/* Title & Category */}
      <h2 className="text-sm text-gray-500 uppercase mb-4 tracking-widest px-1">{product.category}</h2>

      <h1 className="text-3xl font-bold text-gray-900 mb-1">{product.name}</h1>

      {/* Description */}
      <p className="text-gray-700 text-base leading-relaxed mb-5">{product.description}</p>

      {/* Price */}
      <div className="mb-6">
        <span className="text-2xl font-bold text-green-600">${product.price}</span>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="relative inline-flex items-center justify-center w-full px-6 py-3 overflow-hidden font-medium tracking-wide text-white transition duration-300 transform bg-black cursor-pointer rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <span className="absolute left-0 w-full h-0 transition-all duration-300 ease-out transform scale-y-0 bg-black  group-hover:h-full group-hover:scale-y-100"></span>
        <span className="relative z-10 flex items-center justify-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </span>
      </button>
    </>
  ) : (
    <Skeleton />
  )}
</div>

    
  );
}

