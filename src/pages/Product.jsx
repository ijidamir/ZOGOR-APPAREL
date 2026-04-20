import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import Breadcrump from '../components/Breadcrump'
import Description from '../components/Description'
import ProductDisplay from '../components/ProductDisplay'
import RelatedProducts from '../components/RelatedProducts'
import { ShopContext } from '../context/ShopContext'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
 const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breadcrump product={product}/>
      <ProductDisplay product={product}/>
      <Description product={product}/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
