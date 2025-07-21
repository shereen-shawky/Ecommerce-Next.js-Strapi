import React from 'react'
export default function ProductImage({product}) {
  return (
    <>
    {product.banner ?
    <div >
      <img src={`http://localhost:1337${product.banner?.url}`}
        alt={product.title} className="w-lg h-[500px] object-cover rounded-lg shadow"
      />
        
    </div>:
    <div className="w-lg h-[220px] bg-slate-200 rounded-lg animate-pulse">
    </div>
    }
    
    
    </>
    
  )
}
