import React from 'react'
import Title from './Title'

const Subscribe = () => {
  return (
    <div className='container m-auto mt-7 text-center items-center py-7'>
       <Title title={"Subscribe Now"} desc={"Subscribe to our Newsletter to stay updated"}/>

      <form action="" className='items-center mt-6 border m-auto max-w-xl flex justify-between h-[80px] px-4 rounded-xl  max-sm:max-w-sm'>
      <input type="email" placeholder='enter your email' className=' py-4 w-2xl outline-none' />
      <button type='submit' className='bg-gray-900 px-5 py-4 rounded-xl cursor-pointer text-white'>Subscribe</button>
      </form>
    </div>
  )
}

export default Subscribe
