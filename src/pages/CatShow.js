import React from "react"
import { useParams } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from "reactstrap"
import { NavLink } from "react-router-dom"


const CatShow = ({ cats }) => {
    const { id } = useParams()
    let showCat = cats?.find((cat) => cat.id === +id)
    return (
        <>

        <h1 style={{
                textAlign: "center",
                paddingTop: "20px"
            }}
        >
            Thank you for checking out my profile
        </h1>

            {showCat &&

                <main className="cat-index-cards">
                    <Card
                        style={{
                            width: '20rem'
                            }}
                    >

                        <img
                            alt={`profile of a cat named ${showCat.name}`} src={showCat.image}
                        />

                        <CardBody>
                            <CardTitle tag="h5">
                                {showCat.name}
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6">
                                Age: {showCat.age}
                            </CardSubtitle>
                            <CardText>
                                {showCat.enjoys}
                            </CardText>
                            <NavLink to={`/catindex`}><Button>
                                Back to all cats
                            </Button>
                            </NavLink>         
                        </CardBody>
                    </Card>
                </main>
            }
        </>
    )}

export default CatShow