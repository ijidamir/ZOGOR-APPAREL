import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='w-[350px] max-sm:w-full  mb-8 hover:scale-110 duration-100 cursor-pointer '>
    <Link to={`/product/${props.id}`}><img src={props.image}  onClick={window.scrollTo(0,0)} alt="" 
    className=' w-full h-[500px] object-top object-cover ' /></Link>  
      <p className='m-4 text-xl'>{props.name}</p>
      <h3 className='m-3 '>NGN {props.new_price}</h3>
    </div>
  )
}

export default Item
