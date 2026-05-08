import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { productData } from './Data'

function Details() {

  let { pId } = useParams()

  // Find product by id
  let findData = productData.find(
    (a) => a.id == pId
  )

  // If product not found
  if (!findData) {
    return (
      <div className='container mx-auto text-center py-10'>
        <h2 className='text-2xl font-bold text-red-500'>
          Product not found
        </h2>

        <Link
          to='/'
          className='text-blue-600 underline mt-4 inline-block'
        >
          Go Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className='container mx-auto px-4 py-8'>

      {/* Back Button */}
      <Link
        to={`/category/${findData.category}`}
        className='text-blue-600 underline mb-6 inline-block'
      >
        ← Back to Products
      </Link>

      {/* Product Details Layout */}
      <div className='grid md:grid-cols-2 gap-10 items-center'>

        {/* Image Section */}
        <div className='bg-white p-6 rounded-xl shadow-md'>
          <img
            src={findData.image}
            alt={findData.title}
            className='w-full h-80 object-contain'
          />
        </div>

        {/* Details Section */}
        <div>

          <h2 className='text-3xl font-bold mb-4'>
            {findData.title}
          </h2>

          <p className='text-gray-600 mb-4'>
            {findData.description}
          </p>

          <p className='text-2xl font-bold text-green-600 mb-6'>
            Rs. {findData.price}
          </p>

          {/* Buttons */}
          <div className='flex gap-4'>

            <button
              className='bg-blue-600 text-white px-6 py-2 rounded-lg 
              hover:bg-blue-700 transition'
            >
              Add to Cart
            </button>

            <button
              className='bg-gray-200 px-6 py-2 rounded-lg 
              hover:bg-gray-300 transition'
            >
              Buy Now
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Details