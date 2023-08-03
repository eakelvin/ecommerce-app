import React, { useState, useEffect } from "react";
import {MdLegendToggle} from "react-icons/md";
import {BsCartCheck, BsFillCartXFill} from "react-icons/bs"
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";


 function Navbar() {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isSignedIn, setIsSignedIn] = useState('')
  const quantity = useSelector((state) => state.cart.cartTotalQuantity)

  useEffect(() => {
    // const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    // setIsLoggedIn(userLoggedIn)

    const auth = getAuth()
    const unsubscribe = () => onAuthStateChanged(auth, user => {
      if (user) {
        setIsSignedIn(user.email)
        setIsLoggedIn(true)
      } else {
        setIsSignedIn('')
        setIsLoggedIn(false)
      }
    })
    return () =>  unsubscribe()

  }, [])

  // const handleLogin = () => {
  //   setIsLoggedIn(true)
  //   localStorage.setItem('isLoggedIn', 'true')
  //   navigate('/login')
  // }

  const handleLogout = async() => {
    const auth = getAuth()
    try {
      await signOut(auth)
      alert('LOGGED OUT SUCCESSFULLY');
    } catch (error) {
      console.log(error);
    }
    window.location.reload()
    navigate('/')
  }

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid justify-content-between">

            <div className="d-flex">
              <Link style={{textDecoration: 'none'}} to="/">
                <span className="">
                  <img src="/Paperbag.png" alt="Logo" className="d-inline-block" />
                    AzubiShop
                </span>
              </Link>
            </div>
          
            <ul className="navbar-nav flex-row">
                <li className="nav-item me-3 me-lg-1 active">
              <span className="position-relative">
                <Link style={{textDecoration: 'none'}} to="/cart">
                    Cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {quantity}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Link>
                </span>
              </li>
            </ul>

            <ul className="navbar-nav flex-row">
              <li className="nav-item me-3 me-lg-1">
              {isLoggedIn ? (
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <Button onClick={handleLogout} className="btn btn-secondary" size="lg">
                    Logout
                  </Button>
                </div>
                ):(
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <Link to="/login">
                    <Button className="btn" style={{backgroundColor: "#001066"}} size="lg" active>
                      Login
                    </Button>
                  </Link>
                </div>
              )}
              </li>
            </ul>
            
          </div>
        </nav>
        <p className="text-center">Welcome {isSignedIn}</p>
        </>
    )
}

export default Navbar