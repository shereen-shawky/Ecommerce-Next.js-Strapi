import React from 'react'
import Link from 'next/link'

export default function ProductItem({ product }) {
  return (
    <Link
      href={`/productDetails/${product.id}`}
      className="group block max-w-xs w-full"
    >
      {/* Image Container */}
        <img
          src={`http://localhost:1337${product.banner?.url}`}
          alt={product.title}
          className="h-40 w-full object-cover rounded-md" // h-40 = 10rem, adjust as needed
        />
      <div className=' mt-4 flex justify-between'>
        <span className=" inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {product.category}
        </span>
        <p className="text-gray-900 font-medium whitespace-nowrap">${product.price}</p>

      </div>
      {/* Text Content */}
      <div className="mx-1  mt-2 text-sm">
        <div className="pr-2">
          <h3 className="text-gray-900 font-semibold group-hover:underline group-hover:underline-offset-4">
            {product.title}
          </h3>
          <p className="mt-1.5 text-xs text-gray-500 line-clamp-2">
            {product.description}
          </p>
        </div>

      </div>
    </Link>
  )
}
