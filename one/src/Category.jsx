import React from 'react'
import { productData } from './Data'
import { Link, useParams } from 'react-router-dom'

function Category() {

  let { catId } = useParams()

  // Filter products by category
  let filterData = productData.filter(
    (a) => a.category.toLowerCase() === catId.toLowerCase()
  )

  return (
    <div className='container mx-auto px-4 py-8'>

      {/* Page Title */}
      <h2 className='text-3xl font-bold text-center mb-8 capitalize'>
        Category: {catId}
      </h2>

      {/* If no products found */}
      {filterData.length === 0 ? (
        <p className='text-center text-gray-500 text-lg'>
          No products found in this category.
        </p>
      ) : (

        <div className='grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5 
          gap-6'>

          {filterData.map((a) => (

            <div
              key={a.id}
              className='bg-white rounded-xl shadow-md p-4 
              hover:shadow-xl transition duration-300 text-center'
            >

              <img
                src={a.image}
                alt={a.title}
                className='h-40 w-full object-contain mb-4'
              />

              <p className='font-semibold text-gray-800 mb-2'>
                <Link
                  to={`/details/${a.id}`}
                  className='hover:text-blue-600 transition'
                >
                  {a.title}
                </Link>
              </p>

              <p className='text-green-600 font-bold'>
                Rs. {a.price}
              </p>

            </div>

          ))}

        </div>

      )}

    </div>
  )
}

export default Category
