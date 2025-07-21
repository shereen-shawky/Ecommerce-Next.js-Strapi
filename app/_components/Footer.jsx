'use client'
import { useUser } from '@clerk/nextjs'
import { FaInstagram, FaFacebookF, FaSnapchatGhost, FaRegCreditCard } from "react-icons/fa";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { BsShieldCheck, BsClockHistory } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import React from 'react'
import { useEffect, useState } from 'react'
export default function Footer() {
        const {user} =useUser()
const [isloggedIn,setisLoggedIn]=useState(false);
    useEffect(() => {
      setisLoggedIn(window.location.href.includes('sign-in') || window.location.href.includes('sign-up'));}, []);
  return !isloggedIn && (
  <div className="text-white font-sans">
      {/* Main footer */}
      <div className="bg-black text-white py-10 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div>
            <h2 className="text-xl font-bold mb-3">Elec</h2>
            <p className="text-sm text-gray-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since.
            </p>
            <div className="flex gap-4 mt-6 text-3xl text-white/80">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcPaypal />
            </div>
          </div>

          {/* Store */}
          <div>
            <h3 className="text-sm font-bold mb-3">Store</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>Our Store</li>
              <li>About Us</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold mb-3">Links</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>Login</li>
              <li>Regasiter</li> {/* Note: You might want to correct this to "Register" */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold mb-3">Contact Links</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>Instagram</li>
              <li>Snapchat</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 border-t border-gray-700 pt-6">
          <p>zahraa el maadi ,cairo ,Egypt</p>
          <p>©2023 Copyright Elec e-commerce in All rights reserved</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0 text-white text-lg">
            <FaInstagram />
            <FaFacebookF />
            <FaSnapchatGhost />
          </div>
        </div>
      </div>
    </div>
  );
}
