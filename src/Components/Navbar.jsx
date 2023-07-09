import React, { useState, useEffect } from "react";
import {MdLegendToggle} from "react-icons/md";
import {BsCartCheck, BsFillCartXFill} from "react-icons/bs"
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";

 function Navbar() {
  const navigate = useNavigate()
  const [login, setLogin] = useState(false)

  // const handleLogin = () => {
  //   setLogin(true)
  //   console.log(login);
  //   navigate('/login')
  // }

  const handleLogout = () => {
    setLogin(false)
    localStorage.clear()
    window.location.reload()
    navigate('/login')
    console.log(login);
  }

    return (

      <nav className="navbar navbar-expand-lg border-bottom border-5">
          <div className="container-fluid p-3">
            <Link style={{textDecoration: 'none'}} to="/">
              <span className="ms-3">AzubiShop</span>
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
                  <li className="nav-item">
                    <Link style={{textDecoration: 'none'}} to="/cart">
                      <span className="nav-link">Cart <BsCartCheck  /></span>
                    </Link>
                  
                  </li>
              </ul>

             { login ? (
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

              </div>
          </div>
      </nav>
 
    )
}

export default Navbar