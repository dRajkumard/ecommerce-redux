import React from 'react'
import { useSelector } from 'react-redux'

const ProductLisiting = () => {
    const products = useSelector((state) => state);
    console.log(products);
  return (
    <div className='ui grid container'>
        <h1>ProductLisiting</h1>
    </div>
  )
}

export default ProductLisiting