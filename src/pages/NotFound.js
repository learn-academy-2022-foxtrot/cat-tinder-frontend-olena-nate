import React from "react"
import notfound from "../images/notfound.jpg"

const NotFound = () => {
    return(
        <>
         
         <h1 style = {{
            textAlign: "center"
         }}>Page not found!
         
         
         </h1>
          <img style = {{
            width: "100%"
          }} src={notfound} />
         
        </>
    )
}

export default NotFound