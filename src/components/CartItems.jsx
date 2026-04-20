import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'

const CartItems = () => {
    const{all_product,cartItems,removeFromCart,getTotalCartAmount}=useContext(ShopContext)
  return (
    <div className='mx-19 my-12 max-sm:m-3'>
      <div className='grid grid-cols-6 font-semibold text-gray-700 gap-3 py-4'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className='h-1 border-0 bg-gray-300'/>
      {/* format */}
    {all_product.map((e)=>{
        if(cartItems[e.id]>0)
        {
            
           return <div>
            <div className='grid grid-cols-6 font-semibold text-gray-900 gap-9 py-4 items-center'>
                <img src={e.image} alt="" className='h-17 max-sm:w-9 ' />
                <p>{e.name}</p>
                <p>NGN{e.new_price}</p>
                <div className='border  border-gray-300  w-7 h-7 text-center max-sm:w-5 ml-5'>{cartItems[e.id]}</div>
                <p>NGN {e.new_price*cartItems[e.id]}</p>
                <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} className="w-3 cursor-pointer" alt="" />
               
            </div>
            <hr />
          </div>
          
        }
        return null;
    })}

    <div className='flex   justify-between mx-10 my-7 max-sm:flex-col max-sm:gap-8 max-sm:mx-0'>
        <div className='w-85 max-sm:w-full'>
            <h1 className='my-8 font-bold text-xl lg:text-2xl text-gray-800'>Cart Totals</h1>
            <div>
                <div className='flex justify-between mt-7 pb-5'>
                    <p>Subtotal</p>
                    <p>NGN {getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className='flex justify-between mt-7 pb-5'>
                    <p>Shipping Fee</p>
                    <p>free</p>
                    
                </div >
                <hr />
                <div className='flex justify-between mt-7 pb-5'>
                <h3>Total</h3>
                <h3>NGN {getTotalCartAmount()}</h3>
                </div>
               
            </div>
            <button className='bg-gray-900 text-white px-2 py-4'>PROCEED TO CHECKOUT</button>
        </div>
        <div >
            <p>If you have a promo code ad here</p>
            <div className='flex gap-2 mt-4 '>
                <input type="text"  placeholder='promo code' className='focus:bg-gray-300 px-4 py-4'/>
                <button className='bg-gray-900 text-white px-4 py-4 rounded-sm'>Submit</button>

            </div>
        </div>
    </div>
    </div>
  )
}

export default CartItems
