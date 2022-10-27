import React from "react"
import tiger from "../images/tiger.jpg"

const Jumbotron = () => {
    return (

        <div className="jumbotron" style={{ color: 'white', height: '900px', backgroundImage: `url(${tiger})`, backgroundSize: 'cover' }}>
            <div className="text" style={{ paddingTop: '300px', paddingLeft: '30px' }}>
                <h1 className="display-4">All Cats are welcome!</h1>
                <p className="lead">Find your soul mate here.</p>
                <hr className="my-4" style={{ width: "500px" }} />
                <p>"My soulmate is out there somewhere, pushing a pull door...</p>
                <p> I just know it."</p>
                <p className="lead" style={{ paddingTop: "40px" }}>
                    <a className="btn btn-danger btn-lg" href="#" role="button">Knock-Knock</a>
                </p>
            </div>
        </div>


    )
}

export default Jumbotron