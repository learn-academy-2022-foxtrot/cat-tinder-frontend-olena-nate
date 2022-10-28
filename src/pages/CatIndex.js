import React from "react"
import { NavLink } from "react-router-dom"

const CatIndex = ({ cats }) => {
    return (
        <div class="container">
            {cats.map((cat, index) => {
                return (

            <div class="row"style={{
                // justifyContent: "center",
                // paddingTop: "50px",
                // paddingBottom: "50px",
                diplay: "flex",
                // flexDirection: "row",
                // flexWrap: "wrap",
                float: "left",
                padding: "0 10px",
                // position: "relative"
                width: "25%",
                margin: "auto",
                // marginTop: "100px",
                
                }}>
                    
                <div class="column">
              
                <div class="card">
                    <img class="card-img-top" src={cat.image} alt="Picture of cat" />
                    <div class="card-body">
                        <h5 class="card-title">{cat.name}</h5>
                        <p class="card-text">{cat.age}</p>
                    </div>
                
                    <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                    </div>
                    </div>
                    
                    </div>
                
            </div>
                )
            })}
        </div>

    )
}

export default CatIndex