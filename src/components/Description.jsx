import React from 'react'

const Description = (props) => {
    const {product}= props;
  return (
    <div>
        <div className='flex mt-6'>
        <div className='border-2 w-[100px] border-gray-700 text-center ml-6'>Description</div>
      <div className='border-2 w-[100px]   border-gray-700 text-center ml-6'>Review 122</div>
        </div>
        <div className='border-2   border-gray-700 mt-2 px-2 py-2  mx-6'>Designed for excellence and built for everyday use,our <span className='font-bold'>{product.name}</span> blends innovative technology with intuitive design.
        We understand that you need a solution that is both relaible and efficient.
        That's why the {product.category} category focuses pn high quality
        materials and streamlined functionality to ensure it meets demands of lifestyle.</div>
    </div>
  )
}

export default Description
