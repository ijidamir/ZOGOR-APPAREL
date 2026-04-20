import React from 'react'
import new_collections from '../assets/new_collections'
import Item from './Item'
import Title from './Title'

const NewProducts = () => {
  return (
    <div>
        <Title title={"New Products"} desc={"Check out our latest collections."}/>
        <div className='grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4  '>
            {new_collections.map((item,i)=>(
              <Item key={i} id={item.id} name={item.name} new_price={item.new_price} image={item.image}/>  
            ))}
        </div>
      
    </div>
  )
}

export default NewProducts
