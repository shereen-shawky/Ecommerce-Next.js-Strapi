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
    <div>
      {product?.id ? 
      <div className="max-w-xl space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
      <h2 className='text-gray-500'> {product.category}</h2>
      <p className="text-gray-700">{product.description}</p>
      <span className="text-xl font-semibold text-green-600">${product.price}</span><br />
      <button onClick={()=>{handleAddToCart()}} className="flex items-center px-14 py-4 mt-5 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition duration-200">
        <ShoppingCart className="mr-2" />
        Add to Cart
      </button>
    </div>
    :
    <Skeleton/>
    }

    </div>
    
  );
}

