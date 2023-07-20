import React, { useState, useEffect } from "react";
import {MdLegendToggle} from "react-icons/md";
import {BsCartCheck, BsFillCartXFill} from "react-icons/bs"
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


 function Navbar() {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const quantity = useSelector((state) => state.cart.cartTotalQuantity)

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    setIsLoggedIn(userLoggedIn)
  }, [])

  const handleLogin = () => {
    setIsLoggedIn(true)
    localStorage.setItem('isLoggedIn', 'true')
    navigate('/login')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.setItem('isLoggedIn', 'false')
    // localStorage.clear()
    window.location.reload()
    navigate('/')
  }

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid justify-content-between">

            <div class="d-flex">
              <Link style={{textDecoration: 'none'}} to="/">
                <span className="">
                  <img src="/Paperbag.png" alt="Logo" className="d-inline-block" />
                    AzubiShop
                </span>
              </Link>
            </div>
          
            <ul class="navbar-nav flex-row">
              <li class="nav-item me-3 me-lg-1 active">
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

            <ul class="navbar-nav flex-row">
              <li class="nav-item me-3 me-lg-1">
              {isLoggedIn ? (
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <Button onClick={handleLogout} className="btn btn-secondary" size="lg">
                    Logout
                  </Button>
                </div>

                ):(

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  {/* <Link to="/login"> */}
                    <Button onClick={handleLogin} className="btn" style={{backgroundColor: "#001066"}} size="lg" active>
                      Login
                    </Button>
                  {/* </Link> */}
                </div>
              )}
              </li>
            </ul>
            
          </div>
        </nav>
    )
}

export default Navbar