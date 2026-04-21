import React from 'react'
import { useContext } from 'react';
import Item from '../components/Item';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div>
    <Title title={props.name}  desc={props.desc}/>
    <hr className='w-full mt-7 h-1 bg-gray-900' />

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 '>
    {all_product.map((item,i)=>{
     if (props.category === item.category){
return<Item key={i} id={item.id} name={item.name} new_price={item.new_price} image={item.image}/>
     }else{
      return null;
     }
    })}
    </div>
   
      
    </div>
  )
}

export default ShopCategory
