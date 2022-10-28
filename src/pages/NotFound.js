import React from "react"
import notfound from "../images/giphy.gif"

const NotFound = () => {
  return (

    <>
      <h1 style={{
        textAlign: "center", paddingTop: "20px"
      }}>Page not found!


      </h1>

      <div className="container-fluid notFound"
        style={{
          backgroundImage: `url(${notfound})`,
          backgroundRepeat: "no-repeat",
          height: "500px",
          width: "400px",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

        }}
      >
      </div>
    </>

  )
}

export default NotFound