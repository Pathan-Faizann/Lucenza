import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Nav.css"
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
  const isAuth = localStorage.getItem("auth") 
  const navigate = useNavigate()
  
  

  function handlLogout(){
    localStorage.removeItem("auth")
    navigate("/login")
  }
  return (
    <>
    <nav className="navbar nav navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid   ">
    
    <span className="navbar-brand b" href="#">Lucenza Studio</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-white"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav m-ul">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/products'>Products</Link>
        </li>
        {isAuth? <li className="nav-item">
          <Link className="nav-link" to='/cart'>Cart</Link>
        </li>:null
        }
       
        <li className="nav-item">
          <Link className="nav-link"to="/about">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/contact" >Contact</Link>
        </li>
        {!isAuth?
         <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </Link>
          <ul className="dropdown-menu dr ">
        <li><Link className="dropdown-item text-dark text-start" to="/register">Register</Link></li>
            <li><Link className="dropdown-item text-dark text-start" to="/login">Login</Link></li>
        
         
          </ul>
        </li>:
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </Link>
          <ul className="dropdown-menu dr ">
      
             <li className="nav-item">
          <a className="nav-link bt" onClick={handlLogout}>Logout</a>
        </li>
          </ul>
        </li>
       
        }
        
      </ul>
    </div>
  </div>
</nav>
      
    </>
  )
}

export default Navbar
