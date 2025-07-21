'use client';
import React, { useContext } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import cartApis from '../_utils/cartApis';
import { CartContext } from '../_context/CartContext';

const ProductCard = ({ product, isLiked, toggleLike }) => {
  const imageUrl = product.banner?.url;
  const { user } = useUser();
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.stopPropagation(); // prevent click bubbling
    e.preventDefault(); // prevent link navigation if inside a <Link>

    if (!user) {
      router.push('/sign-in');
      return;
    }

    const data = {
      username: user.fullName,
      email: user.primaryEmailAddress.emailAddress,
      products: [product?.id],
    };

    cartApis.addToCart(data).then(() => {
      cartApis.getCart(user.primaryEmailAddress.emailAddress).then((res) => {
        const formatted = res.data.data.flatMap(cartItem =>
          (cartItem.products || []).map(product => ({
            cartItemId: cartItem.id,
            ...product,
          }))
        );
        setCart(formatted);
      });
    });
  };

  return (
    <div className="relative rounded-lg p-4 shadow hover:shadow-md transition flex flex-col group">
      {/* Wishlist Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleLike();
        }}
        className="absolute top-3 right-3 z-10"
        aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart
          className={`w-5 h-5 transition-all ${
            isLiked
              ? 'fill-red-500 text-red-500 scale-110'
              : 'text-gray-400 hover:text-red-300'
          }`}
        />
      </button>

      {/* Clickable area (Image + Title) */}
      <Link href={`/productDetails/${product.id}`} className="flex-1 flex flex-col text-center">
        {imageUrl && (
          <img
            src={`http://localhost:1337${imageUrl}`}
            alt={product.name}
            className="h-32 w-full object-contain mb-4"
            loading="lazy"
          />
        )}
        <h3 className="text-sm font-medium mb-2">{product.name}</h3>
        <p className="text-lg font-semibold mb-3">${product.price}</p>
      </Link>

      {/* Add to Cart Button (non-link) */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-black text-white py-2 rounded cursor-pointer hover:bg-gray-800 mt-auto transition"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </span>
      </button>
    </div>
  );
};

export default ProductCard;
