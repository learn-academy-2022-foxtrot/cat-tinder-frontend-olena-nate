import React, {useState} from "react"
import { Navigate } from "react-router-dom"
import { Form, FormGroup, Label, Input, Button} from "reactstrap"
import { useNavigate } from "react-router-dom"


const CatNew = ({ createCat}) => {
    const navigate = useNavigate()
 
    const [ newCat, setNewCat ] = useState({
        name: "",
        age: "",
        enjoys: "",
        image: ""
    })

    const handleChange = (e) => {
        setNewCat({...newCat, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        createCat(newCat)
        navigate("/catindex")
    }
    return (
        <>
        <h1> Add a New Cat</h1>
            <Form>
                <FormGroup>
                    <Label for="name">
                        Name
                    </Label>
                    <Input
                        name="name"
                        placeholder="Please, enter your name"
                        type="text"
                        onChange={ handleChange }
                        value={ newCat.name }
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label for="age">
                        Please, select your age
                    </Label>
                    <Input
                        name="age"
                        type="select"
                        onChange={ handleChange }
                        value={ newCat.age }
                    >
                        <option>
                            1
                        </option>
                        <option>
                            2
                        </option>
                        <option>
                            3
                        </option>
                        <option>
                            4
                        </option>
                        <option>
                            5
                        </option>
                        <option>
                            6
                        </option>
                        <option>
                            7
                        </option>
                        <option>
                            8
                        </option>
                        <option>
                            9
                        </option>
                        <option>
                            10
                        </option>
                        <option>
                            11
                        </option>
                        <option>
                            12
                        </option>
                        <option>
                            13
                        </option>
                        <option>
                            14
                        </option>
                        <option>
                            15
                        </option>
                        <option>
                            16
                        </option>
                        <option>
                            17
                        </option>
                    </Input>
                </FormGroup>
                
                <FormGroup>
                    <Label for="enjoys">
                        What do you enjoy to do?
                    </Label>
                    <Input
                        name="enjoys"
                        type="textarea"
                        onChange={ handleChange }
                        value={ newCat.enjoys }
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="image">
                        Image
                    </Label>
                    <Input
                        name="image"
                        placeholder="Please, link your photo"
                        type="url"
                        onChange={ handleChange }
                        value={ newCat.image }
                    />
                </FormGroup>
                <Button onClick={handleSubmit} name="submit">
                    Submit cat
                </Button>
            </Form>
        </>
    )
}

export default CatNew