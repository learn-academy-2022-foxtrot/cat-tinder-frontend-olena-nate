import React, {useState} from "react"
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
        <h1 style={{
                textAlign: "center",
                paddingTop: "20px"
            }}
        >
        Add a New Cat
        </h1>
            <Form>
                <FormGroup>
                    <Label for="name">
                        Name
                    </Label>
                    <Input
                        name="name"
                        placeholder="Please enter your name here"
                        type="text"
                        onChange={ handleChange }
                        value={ newCat.name }
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label for="age">
                        Age
                    </Label>
                    <Input
                        name="age"
                        type="number"
                        onChange={ handleChange }
                        value={ newCat.age }
                    >
                        
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
                        placeholder="Please link your profile photo here"
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