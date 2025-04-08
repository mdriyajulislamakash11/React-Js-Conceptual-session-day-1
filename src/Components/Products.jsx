import React from 'react'
import Product from './Product'

function Products({info}) {
    console.log(info)
  return (
    <div>
        <h2>im Products </h2>
        <Product info={info} /> 
    </div>
  )
}

export default Products