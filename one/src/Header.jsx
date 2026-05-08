import React from 'react'
import { CategoryData } from './Data'  
import {Routes,Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Category from './Category'
import Details from './Details'

function Header() {
  return (
    <>
      {/* Top Header */}
      <header className='bg-gradient from-pink-200 via-pink-300 to-pink-200 text-black py-5 shadow-lg'>
        <h2 className='text-4xl font-extrabold text-center tracking-wider drop-shadow-sm'>
          🛍️ ONLINE SHOP
        </h2>
        <p className='text-center text-sm mt-1 text-gray-700'>
          Find your favorite products in style ✨
        </p>
      </header>

      {/* Navigation Bar */}
      <nav className='bg-white shadow-md border-b sticky top-0 z-50'>
        <div className='max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4 py-3 px-4'>
          
          {/* Menu */}
          <ul className='flex flex-wrap justify-center items-center gap-8 text-gray-700 font-semibold'>
            
            <li>
              <Link
                to="/"
                className='hover:text-pink-500 hover:underline underline-offset-4 transition duration-200'>Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className='hover:text-pink-500 hover:underline underline-offset-4 transition duration-200'> About Us
              </Link>
            </li>

            {CategoryData.map((a) => (
              <li key={a}>
                <Link 
                  to={`/category/${a}` }
                  className='hover:text-pink-500 hover:underline underline-offset-4 transition duration-200'>
                  {a}
                </Link>
              </li>
            ))}

            <li>
              <Link to="/contact"
                className='hover:text-pink-500 hover:underline underline-offset-4 transition duration-200'>Contact Us
              </Link>
            </li>

          </ul>

          {/* Search Bar UI ONLY */}
          <div className='flex items-center'>
            <input
              type='text'
              placeholder='Search products...'
              className='border border-gray-300 rounded-full px-5 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm'
            />
          </div>

        </div>
      </nav>

      {/* Routes (unchanged) */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
         <Route path='/category/:catId' element={<Category/>}/>
        <Route path='/details/:pId' element={<Details/>}/>

      </Routes>
    </>
  )
}

export default Header