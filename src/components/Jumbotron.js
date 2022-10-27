import React from "react"
import tiger from "../images/tiger.jpg"

const Jumbotron = () => {
    return (

        <div class="jumbotron" style={{ color: 'white', height: '900px', backgroundImage: `url(${tiger})`, backgroundSize: 'cover' }}>
            <div class="text" style={{ paddingTop: '300px', paddingLeft: '30px' }}>
                <h1 class="display-4">All Cats are welcome!</h1>
                <p class="lead">Find your soul mate here.</p>
                <hr class="my-4" style={{ width: "500px" }} />
                <p>"My soulmate is out there somewhere, pushing a pull door...</p>
                <p> I just know it."</p>
                <p class="lead" style={{ paddingTop: "40px" }}>
                    <a class="btn btn-danger btn-lg" href="#" role="button">Knock-Knock</a>
                </p>
            </div>
        </div>


    )
}

export default Jumbotron