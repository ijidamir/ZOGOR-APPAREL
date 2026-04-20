import React from 'react'
import relatedF  from '../assets/relatedF.js'
import Item from './Item'

const RelatedProducts = () => {
  return (
    <div>
      <h1 className='text-center font-bold text-xl sm:text-2xl my-5'>Related Products</h1>
      <hr className='w-full h-1 border bg-gray-900 '/>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-7 gap-2'>
        {relatedF.map((item,i)=>(
            <Item key={i}  id={item.id} name={item.name}  new_price={item.new_price} image={item.image} />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
