import React from "react"
import { NavLink } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from "reactstrap"


const CatIndex = ({ cats }) => {

    return (
    <>
     <h1 style={{
                        textAlign: "center", paddingTop: "20px"
                        }}
                        >Meet the Cats</h1>
        <main className="cat-index-cards">

            {cats?.map((cat, index) => {
                return (
                    <Row>
                        <Col sm="3">
                            <Card
                                style={{
                                    width: '20rem'
                                }}
                                key={index}>
                                <img
                                    alt={`profile of a cat named ${cat.name}`} src={cat.image}/>
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {cat.name}
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6">
                                        Age: {cat.age}
                                    </CardSubtitle>
                                    <NavLink to={`/catshow/${cat.id}`}><Button>
                                        Open my profile
                                    </Button>
                                    </NavLink>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                )
            }

            )
            }
        </main>
        </>

    )
}













export default CatIndex