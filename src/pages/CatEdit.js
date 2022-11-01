import React, { useState } from "react"
import { Form, FormGroup, Label, Input, Button, Row } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"

const CatEdit = ({ cats, updateCat }) => {
    const { id } = useParams()
    let currentCat = cats?.find((cat) => cat.id === +id)

    const [editCat, setEditCat] = useState({
        name: currentCat?.name,
        age: currentCat?.age,
        enjoys: currentCat?.enjoys,
        image: currentCat?.image
    })

    const handleChange = (e) => {
        setEditCat({ ...editCat, [e.target.name]: e.target.value })
    }



    const navigate = useNavigate()
    const handleSubmit = () => {
        updateCat(editCat, currentCat.id)
        navigate("/catindex")
    }

    return (
        <>
            <h1 style={{
                textAlign: "center",
                paddingTop: "20px"
            }}
            >
                Edit a Cat
            </h1>
            <div className="add-new-cat-form">
                <Row>
                    <Form className="CatNew-form">
                        <FormGroup>
                            <Label for="name">
                                Name
                            </Label>
                            <Input
                                name="name"
                                placeholder="Please enter your name here"
                                type="text"
                                onChange={handleChange}
                                value={editCat.name}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="age">
                                Age
                            </Label>
                            <Input
                                name="age"
                                type="select"
                                onChange={handleChange}
                                value={editCat.age}
                            >  
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>

                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="enjoys">
                                What do you enjoy to do?
                            </Label>
                            <Input
                                name="enjoys"
                                type="textarea"
                                onChange={handleChange}
                                value={editCat.enjoys}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="image">
                                Image
                            </Label>
                            <Input
                                name="image"
                                placeholder="Please link your profile photo here"
                                type="url"
                                onChange={handleChange}
                                value={editCat.image}
                            />
                        </FormGroup>
                        <Button onClick={handleSubmit} name="submit">
                            Submit updated cat
                        </Button>
                    </Form>
                </Row>
            </div>
        </>
    )
}

export default CatEdit