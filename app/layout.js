'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { ClerkProvider } from '@clerk/nextjs';
import { useState } from "react";
import { CartContext } from "./_context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <ClerkProvider>
      <CartContext.Provider value={{ cart, setCart }}>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
          >
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </body>
        </html>
      </CartContext.Provider>
    </ClerkProvider>
  );
}
