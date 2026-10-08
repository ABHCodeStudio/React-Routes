import axios from 'axios'
import React, { useState } from 'react'

const Products = () => {

  const [data, setData] = useState([])
  const getData = async () => {
    let response = await axios.get('https://fakestoreapi.com/products')
    setData(response.data)
  }
  getData()

  return (
    <div className='container'>
      {data.map((item, idx) => (
        <div className='box'>
          <h1>{item.title}</h1>
          <p>{item.category}</p>
          <img src={item.image} />

        </div>
      ))}

    </div>
  )
}

export default Products
