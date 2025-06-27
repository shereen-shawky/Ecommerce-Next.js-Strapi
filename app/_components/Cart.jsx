'use client';

import React, { useContext,useRef,useEffect } from 'react';
import { CartContext } from '../_context/CartContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Cart({setOpenCart}) {
  const { cart } = useContext(CartContext);
  const pathname = usePathname();
  const cartRef = useRef(null);

  // Hide cart on checkout page
  if (pathname === '/Checkout') return null;


 useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setOpenCart(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setOpenCart]);


  return (
    <div
      ref={cartRef}
      className="absolute top-12 overflow-auto right-11 sm:right-11 lg:right-48 rounded-md w-[250px] h-[300px] border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 z-50"
      aria-modal="true"
      role="dialog"
      tabIndex="-1"
    >
      <div className="mt-2 space-y-6">
        <ul className="space-y-4">
          {cart.map((product) => (
            <Link href={`productDetails/${product.id}`} key={product.id} className="flex items-center gap-4">
              <img
                src={`http://localhost:1337${product.banner?.url}`}
                alt={product.title}
                className="size-16 rounded-sm object-cover"
              />
              <div>
                <h3 className="text-sm text-gray-900 line-clamp-1">{product.title}</h3>
                <p className="text-[10px] text-gray-600">Price: $ {product.price}</p>
                <p className="text-[10px] text-gray-600">Category: {product.category}</p>
              </div>
            </Link>
          ))}
        </ul>

        <div className="space-y-4 text-center">

          <Link
            href="/cart"
            className="block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
          >
            View my cart ({cart.length} items)
          </Link>

          <a
            href="/"
            className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
          >
            Continue shopping
          </a>
        </div>
      </div>
    </div>
  );
}
