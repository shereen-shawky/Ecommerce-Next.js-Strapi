'use client'
import React from 'react'
import { useEffect } from 'react'
import productApis from '../_utils/productApis'
import ProductList from './ProductList'
import { ArrowRight } from 'lucide-react'

function ProductSection() {
    const [products, setProducts] = React.useState([])
    const fetchProducts=()=>{
            productApis.getLatestProducts().then((response)=>{
                console.log(response.data.data)
                setProducts(response.data.data) 
            })
        }
    useEffect(() => {
        fetchProducts()
    }, [])
  return (
    <>   
      <div className="flex flex-row justify-between mx-10 md:mx-[110px]  my-5">
        <h1 className="text-2xl items-center font-bold text-[#22223b]">Brand New</h1>
        <h2 className="flex items-center text-indigo-600 font-medium text-md group-hover:underline cursor-pointer">View all collections <ArrowRight size={16}/></h2>
      </div>

      <div className="mx-[110px] ">
        <ProductList productlist={products} />
      </div>
    </>
  )
}

export default ProductSection