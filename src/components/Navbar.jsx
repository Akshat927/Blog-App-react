import React, { useState } from 'react'
import Home from '../pages/Home'
import { NavLink } from 'react-router-dom'
//react icons
import { FaSquareXTwitter,FaLinkedin, FaBars, FaXmark} from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


const Navbar = () => {
    const[isMenuOpen,setIsMenuOpen]=useState(false)
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen);
    }
    const navItems=[
        {path:"/",link:"Home"},
        {path:"/services",link:"Services"},
        {path:"/about",link:"About"},
        {path:"/blogs",link:"Blogs"},
        {path:"/contact",link:"Contacts"},
    ]
  return (
    <header className='bg-black text-white'>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between'> 
            <a href="" className='text-xl font-bold text-white'>Design <span className='text-orange-500'>AKSHAT</span></a>
            {/* navigations for lg devices */}
            <ul className='md:flex gap-12 text-lg hidden'>
                {
                    navItems.map((item, index) => (
                        <li key={item.path} className='text-white'>
                            <NavLink to={item.path}>{item.link}</NavLink>
                        </li>
                    ))

                }
            </ul>

            {/* menu icons */}
            <div className='text-white lg:flex gap-4 items-center hidden'>
                <a href="/" className='hover:text-orange-500'><FaFacebookSquare /></a>
                <a href="/" className='hover:text-orange-500'><FaSquareXTwitter /></a>
                <a href="/" className='hover:text-orange-500'><FaLinkedin /></a>
                <button className='bg-orange-500 text-white px-6 py-2 font-medium rounded
                 hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Log in</button>
            </div>

            {/* mobile menu buttons */}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='cursor-pointer'>
                    {
                        isMenuOpen? <FaXmark/>:<FaBars className='w-5 h-5'></FaBars>
                    }
                    </button>
            </div>
        </nav>
        {/* menu items for mobile  */}
        <div>
            <ul className='md:hidden gap-12 text-lg block space-y-4 mt-14 bg-white'>
                {
                    navItems.map((item, link) => (
                        <li key={item.path} className='text-black'>
                            <NavLink onClick={toggleMenu} to={item.path}>{item.link}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    </header>
  )
}

export default Navbar