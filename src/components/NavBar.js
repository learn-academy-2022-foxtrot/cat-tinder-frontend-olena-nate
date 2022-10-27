import React from "react"
import logo from "../images/cat-tinder.png"

const NavBar = () => {

  return (


    <nav class="navbar navbar-expand-lg navbar-light bg-light  d-flex mb-3">
      <div class="container-fluid justify-content-end">
        {/* <a class="navbar-brand " href="#">
          <img style={{
            width: "400px",
            height: "80px"
          }} src={logo} />
        </a> */}
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/catindex">All Cats</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/catnew">New Cat</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/catedit">Edit Cat</a>
          </li>
        </ul>
      </div>
    </nav>


  )
}

export default NavBar