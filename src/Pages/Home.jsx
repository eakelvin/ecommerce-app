import React, { useState } from 'react'
import SearchBar from '../Components/Searchbar'
import Products from '../Components/Products'
import data from '../data'

function Home() {
  
  const [products, setProducts] = useState(data)

  const handleSearch = (value) => {
    const filteredProducts = data.filter( (product) => product.name.toLowerCase().includes(value.toLowerCase()))
    setProducts(filteredProducts)
  }

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <Products products={products} />
    </>
  )
}

export default Home
