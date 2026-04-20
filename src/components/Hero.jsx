import React from 'react'
import { Link } from 'react-router-dom'
import video from '../assets/hero.mp4'
const Hero = () => {
  return (
    <div className='relative'>
      <video src={video}
      className='w-full h-[100vh] object-cover' 
      autoPlay
      loop
      muted
      playsInline/>
      
      <div className='absolute z-1000 top-[75%] ml-4 max-sm:top-[70%]'>
        <h1 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold'>Tradition Meets With Fashion</h1>
      <div className='flex gap-6 text-white'>
        <Link to="/men"><button className='bg-gray-900 px-8 py-4 mt-2'>Shop Men</button></Link>
      <Link to='/women'>   <button className='bg-gray-900 px-5 py-4 mt-2'>Shop Women</button></Link>
     
      </div>
      </div>
    </div>


  )
}

export default Hero
