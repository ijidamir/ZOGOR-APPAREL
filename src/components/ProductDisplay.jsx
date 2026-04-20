import React from 'react'
import star_icon from '../assets/star_icon.png'
import star_dull from '../assets/star_dull_icon.png'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const{addToCart} = useContext(ShopContext);
  return (
    <div className='flex max-sm:flex-col  gap-2'>
        <div className='flex gap-1 max-sm:flex-col max-md:gap-0 '>
            <div className="flex sm:flex-col gap-2 max-sm:hidden  mt-4 items-center">
                <img src={product.image} alt="" className='w-[150px] md:w-[200px] md:h-60 max-md:hidden ' />
                <img src={product.image} alt="" className='w-[150px] md:w-[200px]  md:h-60 max-md:hidden ' />
                <img src={product.image} alt="" className='w-[150px] md:w-[200px]  md:h-60 max-md:hidden  ' />
               
            </div>
            <div>
                <img src={product.image} alt="" className='xl:w-[563px] xl:h-[740px] md:w-[500px] md:h-[700px] mt-4' />
            </div>
        </div>
        <div className='mt-6 max-sm:mx-3'>
            <h1 className='font-bold text-xl sm:text-2xl xl:text-3xl'>{product.name}</h1>
            <div className='flex my-3'>
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull} alt="" />
            </div >
            <h2 className='font-bold'>NGN {product.new_price}</h2>
            <p className='my-3 text-[17px]'>{product.description}</p>

             <h1 className='font-bold text-xl sm:text-2xl xl:text-3xl'>Select Size</h1>
             <div className='flex gap-2 my-3'>
                <div className='w-9 h-9 bg-gray-200 rounded-sm my-2  px-3 cursor-pointer  text-2xl'>S</div>
                <div className='w-9 h-9 bg-gray-200 rounded-sm my-2  px-3 cursor-pointer  text-2xl'>M</div>
                <div className='w-9 h-9 bg-gray-200 rounded-sm my-2  px-3 cursor-pointer text-2xl'>L</div>
                <div className='w-9 h-9 bg-gray-200 rounded-sm my-2  px-2 cursor-pointer  text-2xl'>XL</div>
             </div>

             <button onClick={()=>(addToCart(product.id))} className='px-4 py-4 my-3 max-sm:ml-3 bg-gray-900 text-white cursor-pointer active:bg-gray-500'>ADD TO CART</button>
        </div>
      
    </div>
  )
}

export default ProductDisplay
