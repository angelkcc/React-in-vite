import React, { useState } from 'react'
import { productData } from './Data'

function Home() {

  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
    console.log("Cart:", [...cart, product])
  }

  return (
    <>
      {/* Page Title */}
      <div className='text-center my-8'>
        <h2 className='text-4xl font-extrabold text-gray-800 tracking-wide'>
          🛒 Our Products
        </h2>
        <p className='text-gray-500 mt-2'>Find your favorite items and shop with ease ✨</p>
      </div>

      {/* Product Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 px-6 max-w-6xl mx-auto'>
        
        {productData.map((a) => (
          <div key={a.id} 
            className='bg-white rounded-3xl shadow-md p-5 hover:shadow-2xl hover:-translate-y-1 transition duration-300 flex flex-col'>

            {/* Product Image (fixed so it doesn't crop weirdly) */}
            <div className='w-full h-44 flex items-center justify-center bg-gray-100 rounded-2xl mb-4 overflow-hidden'>
              <img 
                src={a.image}  alt="" className='max-h-full max-w-full object-contain'/>
            </div>

            {/* Title */}
            <p className='font-semibold text-gray-800 mb-1 text-center min-h-48px'>
              {a.title}
            </p>

            {/* Price */}
            <p className='text-pink-500 font-bold mb-4 text-center'>
              Rs. {a.price}
            </p>

            {/* Add to Cart Button */}
            <button className='w-full bg-pink-300 text-white py-2.5 rounded-xl font-semibold hover:from-pink-500 hover:to-pink-600 transition duration-200 shadow-sm'
            >
              Add to Cart
            </button>

          </div>
        ))}

      </div>
    </>
  )
}

export default Home