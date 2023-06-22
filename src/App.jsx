import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ErrorPage from './Pages/ErrorPage'
import DetailsPage from './Pages/DetailsPage'
import CartPage from './Pages/CartPage'
import Login from './Pages/LoginPage'
import Signup from './Pages/SignupPage'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/productdetails/:id' element={<DetailsPage />} />
        <Route path='/cart' element={<CartPage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
    

    </>
  )
}

export default App
