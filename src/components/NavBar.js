import React from "react"
import logo from "../images/tinder-logo.svg"

const NavBar = () => {

  return (
  
    <nav className="navbar navbar-expand-lg d-flex " style={{backgroundColor: "#000000", marginBottom: "0"}} >
       <a className="navbar-brand " href="/">
          <img style={{
            width: "400px",
            height: "80px"
          }} src={logo} 
          alt="logo of cat tinder"/>
        </a>
      <div className="container-fluid justify-content-end">
       
        <ul className="nav justify-content-end" style={{paddingBottom: "20px", paddingRight: "20px", fontWeight: "450"}}>
          <li className="nav-item">
            <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/catindex">All Cats</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/catnew">New Cat</a>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default NavBar