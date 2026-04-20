import React from 'react'

const LogInSignUp = () => {
  return (
    <div className='w-full h-[80vh] pt-25  max-sm:pt-0 mb-60 relative'>

      <div className='contiainer  w-137.5 m-auto px-9 py-8 bg-gray-400 max-sm:w-full max-sm:h-[100vh] '>

      <h1 className='m-3 text-center active:bg-gray-600'>SignUP</h1>
      <div className='flex flex-col gap-3'>
        <input type="text" placeholder='Enter your name..' className='w-full m-2 bg-white p-3 rounded-sm outline-none' />
        <input type="email" placeholder='Enter your email' className='w-full m-2 bg-white p-3 rounded-sm outline-none' />
        <input type="password" placeholder='Enter your password' className='w-full m-2 bg-white p-3 rounded-sm outline-none' />
        </div>
        <button className='w-full bg-gray-900 text-white m-2 p-3 cursor-pointer'>continue</button>
       <div className='flex flex-col gap-1 m-2 py-5'>
       <p>Already have an account <span className='text-gray-300'>log in here</span></p>
        <div className='flex sm:gap-2 items-center '>
          <input type="checkbox" name='' id='' />
          by continuing, i agree to <span className='text-gray-300'>terms and conditions</span>

        </div>
        
       </div>
      
      </div>

      
      
    </div>
  )
}

export default LogInSignUp
