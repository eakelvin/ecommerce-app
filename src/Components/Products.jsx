import React from 'react'
import Product from './Product'
import data from '../data'


const Products = (props) => {

    const products = props.products.map((item) => {
        return <Product
              key={item.id}
              {...item} 
        />
      })

  return (
      <div className="row row-cols-1 row-cols-md-4 g-4 p-5">
        {products}
      </div>
  )
}

export default Products
