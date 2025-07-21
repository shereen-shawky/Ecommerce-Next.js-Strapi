'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import { ShoppingCart ,Heart} from 'lucide-react';
import { useEffect, useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../_context/CartContext';
import cartApis from '../_utils/cartApis';
import React from 'react'
import Cart from './Cart';
import Link from 'next/link';
export default function Header() {
    const {cart,setCart}=useContext(CartContext);
    const [openCart, setOpenCart] = useState(false);
    const {user} =useUser();
    const [isloggedIn,setisLoggedIn]=useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
      setisLoggedIn(window.location.href.includes('sign-in') || window.location.href.includes('sign-up'));}, []);
    
     useEffect(() => {
  if (user) {
    cartApis.getCart(user.primaryEmailAddress.emailAddress)
      .then((res) => {
        console.log("Cart API raw data:", res.data.data);

        const formatted = res.data.data.flatMap(cartItem => {
          // Ensure the cart item has products (based on your structure)
          return (cartItem.products || []).map(product => ({
            id: cartItem.id,
            ...product, // flatten product fields directly
          }));
        });

        setCart(formatted);
      });
  }
}, [user]);

  return !isloggedIn &&(
    <header className="bg-white fixed top-0 w-full z-50 ">
  <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 ">
    <img src="logo.webp" width="50px" height="50px" className='rounded-full'/>

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
         <li>
            <Link className="text-gray-500 transition hover:text-gray-500/75" href="/"> Home </Link>
          </li>
          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="/blog"> Blog </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="/about"> About </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="/contact"> Contact </a>
          </li>

        
        </ul>
      </nav>

      {!user ?
      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="block rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition text-black transition hover:bg-gray-700"
            href="/sign-in"
          >
            Login
          </a>

          <a
            className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black transition hover:text-gray-700 sm:block"
            href="#"
          >
            Register
          </a>
        </div>

        
      </div>:
      <div  className="flex items-center gap-5">
        {/* Wishlist */}
        <Link href="/wishlist" className="text-gray-700 hover:text-red-600 transition flex items-center">
          <Heart className="w-5 h-5" />
        </Link>
        <h1 className='flex gap-1 cursor-pointer'><ShoppingCart onClick={()=>setOpenCart(!openCart)}/> ({cart.length})</h1>
        
        < UserButton afterSignOutUrl="/"/>
        {openCart && <Cart setOpenCart={setOpenCart} />}
       
      </div>}
    </div>
    <button
            className="md:hidden rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

  {/* ✅ Animated Mobile Dropdown Menu */}
<div
  className={`md:hidden bg-white shadow px-4 py-4 transition-all duration-300 ease-in-out ${
    mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
  }`}
>
  <ul className="flex flex-col gap-4 text-sm">
    <li><Link onClick={() => setMobileMenuOpen(false)} href="/">Home</Link></li>
    <li><Link onClick={() => setMobileMenuOpen(false)} href="/explore">Explore</Link></li>
    <li><Link onClick={() => setMobileMenuOpen(false)} href="/blog">Blog</Link></li>
    <li><Link onClick={() => setMobileMenuOpen(false)} href="/about">About</Link></li>
    <li><Link onClick={() => setMobileMenuOpen(false)} href="/contact">Contact</Link></li>
  </ul>
</div>

</header>
  )
}
