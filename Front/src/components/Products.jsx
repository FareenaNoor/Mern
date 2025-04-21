import React from 'react'
import '../assets/productsdata'
import products from '../assets/productsdata'

export default function Products() {
  return (
    <div>
        {products.map((product)=>(<div>{product.name}</div>))}
    </div>
  )
}
