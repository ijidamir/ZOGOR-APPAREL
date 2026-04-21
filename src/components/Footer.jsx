import React from 'react'
import logo from '../assets/logo.png'
import {FaFacebookF,FaInstagram,FaWhatsapp} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='flex flex-col items-center'>
      <div>
        <img src={logo} alt=""  className='w-[350px]'/>
      </div>
      {/* links */}
      <div className='flex gap-5'>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </div>
      {/* social links */}
      <div className='flex gap-5 mt-4'>
        <a href="https://www.facebook.com/GodfreyZirra" target="blank" rel="noopener noreferrer "  ><FaFacebookF/></a>
        <a href="#"><FaInstagram/></a>
        <a href="https://wa.me/2348135677305?text=Hello"  target="blank" rel="noopener noreferrer"><FaWhatsapp/></a>
      </div>
      <hr className='w-full bg-gray-900 h-1 my-6'/>
      &copy; 2026 ZogorApparell. All rights reserved
    </div>
  )
}

export default Footer
