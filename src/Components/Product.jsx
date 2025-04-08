import React from 'react'

function Product({info}) {
    const {name, phone, money} = info;
  return (
    <div>
        <h3>im Product: {name}</h3>
        <p>Phone: {phone}</p>
        <p>money: {money}</p>
    </div>
  )
}

export default Product