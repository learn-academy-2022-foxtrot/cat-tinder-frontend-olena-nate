import React from "react"
import logo from "../images/cat-tinder-logo.svg"

const NavBar = () => {

  return (


    <nav className="navbar navbar-expand-lg navbar-light bg-light  d-flex mb-3">
      <div className="container-fluid justify-content-end">
        <a className="navbar-brand " href="#">
          <img style={{
            width: "400px",
            height: "80px"
          }} src={logo} />
        </a>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/catindex">All Cats</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/catnew">New Cat</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/catedit">Edit Cat</a>
          </li>
        </ul>
      </div>
    </nav>


  )
}

export default NavBar