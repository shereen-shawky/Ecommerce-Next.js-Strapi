'use client'
import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../_context/CartContext';
import cartApis from '../_utils/cartApis';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function page() {
   const router=useRouter();
    const {cart,setCart}=useContext(CartContext);
    const getTotalAmount = () => {
        let total=0;
        cart.forEach(item => {
            total += item.price;
            
        });
        return total.toFixed(2);
    }
  const deleteItem = (id) => {
    console.log("Deleting item with ID:", id);
    console.log("Cart before delete:", cart);
  cartApis.deleteCartItem(id).then((res) => {
    console.log("Deleting ID:", id);
    if (res.status === 204) {
      setCart(prev => {
        const updated = prev.filter(item => item.id !== id);
        console.log("Updated cart:", updated);
        return updated;
      });
  }
});
    }

        
  return (
    <section className="pt-20">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
    <div className="mx-auto max-w-3xl">
      <header className="text-center">
        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
      </header>

      <div className="mt-8">
        <ul className="space-y-4">
            {cart.map((item) => (
          <Link href={`/productDetails/${item.id}`} className="flex items-center gap-4">
            <img
              src={`http://localhost:1337${item.banner?.url}`}
              alt={item.title}
              className="size-16 rounded-sm object-cover"
            />

            <div>
              <h3 className="text-sm text-gray-900">{item.name}</h3>

              <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                <div>
                  <dt className="inline">Category:</dt>
                  <dd className="inline">{item.category}</dd>
                </div>

              </dl>
            </div>

            <div className="flex flex-1 items-center justify-end gap-2">
              <div>
                  <dd className="inline">${item.price}</dd>
                </div>

              <button  onClick={(e) => {
             e.stopPropagation(); // Prevent navigation
            e.preventDefault();  // Also prevent default behavior from <Link>
             deleteItem(item.id);}} className="text-gray-600 transition hover:text-red-600">
                <span className="sr-only">Remove item</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </Link>

            ))}
        </ul>

        <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
          <div className="w-screen max-w-lg space-y-4">
            <dl className="space-y-0.5 text-sm text-gray-700">

              <div className="flex justify-between !text-base font-medium">
                <dt>Total</dt>
                <dd>$ {getTotalAmount()}</dd>
              </div>
            </dl>

            

            <div className="flex justify-end">
              <button
              onClick={()=>router.push('/Checkout?amount='+getTotalAmount())}
                className="block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
        <h2 className='text-gray-500 text-sm'>Note: All items will be sent via Email</h2>
      </div>
    </div>
  </div>
</section>
  )
}
