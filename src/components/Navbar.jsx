import React from 'react'
import logo from '../assets/logo.png'
import {FaSearch,FaUser} from 'react-icons/fa'
import {FiMenu} from 'react-icons/fi'
import cart from '../assets/cart_icon.png'
import cross from '../assets/cart_cross_icon.png'
import { useState } from 'react'
import {Link, useLocation} from "react-router-dom"
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const {getTotalCartItems}= useContext(ShopContext)
  const location = useLocation()
  const [sidebarOpen,setSidebarOpen] =useState(false);
  
  return (
    < >
      <div className=" flex items-center justify-between bg-gray-300 relative  ">
       <div className='flex items-align justify-between sm:ml-6'>
        <FiMenu  size={30} className="ml-2 sm:hidden" onClick={()=>setSidebarOpen(true)} />

        <Link to="/shop"><img src={logo} alt="" width={150} className="h-[90px] max-sm:absolute sm:w-[200px] sm:h-[100px]
         max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:-translate-y-1/4  " /></Link>
        
       
        <ul className={`flex gap-5 items-center max-sm:flex-col sm:static sm:flex-row fixed bg-gray-300 
        top-0 left-0 h-full w-68  z-10000 py-8 transition-transform duration-300 ${!sidebarOpen ? "max-sm:w-0 overflow-hidden":"max-sm:w-68 "}`}>
          <li>        
          <img src={cross} alt=""  className='absolute top-5 right-7 w-7 sm:hidden ' onClick={()=>setSidebarOpen(false)}/>
</li>
          <li onClick={()=>{setSidebarOpen(false) }} className="max-sm:hover:bg-gray-600 cursor-pointer relative "> <Link to='/shop'>SHOP </Link>  {location.pathname === '/shop' ?<hr className=' bg-gray-900 absolute  bottom-0  w-full h-1  ' />:<></> }</li>
          <li onClick={()=>{setSidebarOpen(false) }}  className="max-sm:hover:bg-gray-600 cursor-pointer relative "><Link to='/men'>MEN</Link>  {location.pathname === '/men' ?<hr className=' bg-gray-900 absolute  bottom-0  w-full h-1  ' />:<></> }</li>
          <li onClick={()=>{setSidebarOpen(false)}}  className="max-sm:hover:bg-gray-600 cursor-pointer relative "><Link to='/women'>WOMEN</Link>   {location.pathname === '/women' ?<hr className=' bg-gray-900 absolute  bottom-0  w-full h-1  ' />:<></> }</li>
          
        </ul>
       
      
       </div>
      

      

       <div className='flex gap-6 items-center p-7  '>
        <Link to="login">       <FaUser className='max-sm:absolute max-sm:left-[20%] max-sm:top-[40%] cursor-pointer' size={20}/></Link>

      
       
       <div className='relative'>
        <Link to="cart"><img src={cart} alt=""  width={30} className="cursor-pointer"/></Link>
       
       <div className='absolute flex bg-black w-3 text-white text-[10px] rounded-full justify-center items-center -top-1/4 -right-1/5 '>{getTotalCartItems()}</div>
       </div>
       

       </div>
      
      </div>
      
    </>
  )
}

export default Navbar
