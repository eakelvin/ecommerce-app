import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './Pages/Home'
import ErrorPage from './Pages/ErrorPage'
import DetailsPage from './Pages/DetailsPage'
import CartPage from './Pages/CartPage'
import Login from './Pages/LoginPage'
import Signup from './Pages/SignupPage'
import Thanks from './Pages/Thanks'
import Welcome from './Pages/Welcome'
import { useSelector } from 'react-redux'
import Navbar from './Components/Navbar'

function App() {
  const cartItem = useSelector((state) => state.cart.cartItems)

  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/productdetails/:id' element={<DetailsPage />} />
        <Route path='/cart' element={<CartPage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/thanks' element={<Thanks />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
