'use client'
import React from 'react'
import ProductItem from './ProductItem'

function ProductList({ productlist }) {
  if (!Array.isArray(productlist)) {
    console.error('Expected productlist to be an array but got:', productlist)
    return <p>No products to display.</p>
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {productlist.map((product) => (
        <div key={product.id}>
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  )
}

export default ProductList
