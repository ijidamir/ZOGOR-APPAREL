import React from 'react'

const Title = ( {title,desc}) => {
  return (
    <div className='flex flex-col gap-3  mt-5'>
      <h1 className='font-bold text-gray-900 text-3xl md:text-4xl xl:text-5xl'>{title}</h1>
      <p className='font semibold text-2xl text-gray-600 '>{desc}</p>
    </div>
  )
}

export default Title
