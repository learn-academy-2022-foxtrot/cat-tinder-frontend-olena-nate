import React from "react"
import lawyer from "../images/lawyer-small.jpg"
import greenEyes from "../images/green-eyes-small.jpg"

const CatIndex = () => {
    return (
        <div class="container">
            <div class="row"style={{justifyContent: "center", paddingTop: "50px", paddingBottom: "50px"}}>
                <div class="col-sm-3">
              
                    <div class="card">
                        <img class="card-img-top" src={lawyer} alt="Card image cap"  />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    </div>
                    <div class="col-sm-3">
                    <div class="card">
                        <img class="card-img-top" src={greenEyes} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    </div>
                    <div class="col-sm-3">
                    <div class="card">
                        <img class="card-img-top" src={greenEyes} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    </div>
                
            </div>
        </div>

    )
}

export default CatIndex