import React from 'react'
import arrow_icon from '../assets/breadcrum_arrow.png'

const Breadcrump = (props) => {
  const {product} = props
  return (
    <div className='flex gap-1 text-[11px] sm:text-xl text-gray-900'>
           HOME <img src={arrow_icon}  className="max-sm:w-1" alt="" />SHOP <img src={arrow_icon} className="max-sm:w-1"alt="" />{product.category}
      <img src={arrow_icon} className="max-sm:w-1" alt="" />{product.name}
    </div>
  )
}

export default Breadcrump
