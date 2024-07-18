import React from 'react'
import { Link } from 'react-router-dom'
import{FaArrowRight} from "react-icons/fa6"

const Banner = () => {
  return (
    <div className='px- py-32 bg-black mx-auto'>
        <div className='text-white text-center'>
            <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome to blog</h1>
            <p>Start your blog today and join community of writers and readers who arem passionate about sharing new and exciting ideas</p>
            <div>
              <Link to="/" className='font-medium hover:text-orange-500 inline-flex items-center py-2'> Learn More<FaArrowRight className='mt-1 ml-2'/></Link>
            </div>
        </div>
    </div>
  )
}

export default Banner