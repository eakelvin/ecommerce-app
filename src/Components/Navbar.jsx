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

      <nav className="navbar navbar-expand-lg border-bottom border-5">
          <div className="container-fluid p-3">
              <Link style={{textDecoration: 'none'}} to="/">
                <span className="">
                  <img src="/Paperbag.png" alt="Logo" className="d-inline-block" />
                    AzubiShop
                </span>
              </Link>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                  <li className="nav-item">
                    <Link style={{textDecoration: 'none'}} to="/">
                      <span className="nav-link active home-color" aria-current="page">Home</span>
                    </Link>
                  </li>
                  
                  {/* <li className="nav-item">
                    <Link style={{textDecoration: 'none'}} to="/cart">
                      <span className="nav-link">
                        Cart:{quantity}
                      </span>
                    </Link>
                  </li> */}

                  <li className="btn position-relative">
                    <Link style={{textDecoration: 'none'}} to="/cart">
                    Cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {quantity}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                  </Link>
                </li>
              </ul>

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

              </div>
          </div>
      </nav>
 
    )
}

export default Navbar