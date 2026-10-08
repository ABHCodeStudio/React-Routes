import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'

const App = () => {

  return (
    <div>
      <nav>
        <Link className='Link' to='/home'>Home</Link>
        <Link className='Link' to='/services'>Services</Link>
        <Link className='Link' to='/products'>Products</Link>
      </nav>


      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/products' element={<Products />}></Route>

      </Routes>
    </div>
  )
}

export default App
