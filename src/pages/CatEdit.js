import React, {useState} from "react"
import { Form, FormGroup, Label, Input, Button} from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"

const CatEdit = ({ cats, updateCat}) => {
    const { id } = useParams()
    let currentCat = cats?.find((cat) => cat.id === +id)
 
    const [ editCat, setEditCat ] = useState({
        name: currentCat?.name,
        age: currentCat?.age,
        enjoys: currentCat?.enjoys,
        image: currentCat?.image
    })

    const handleChange = (e) => {
        setEditCat({...editCat, [e.target.name]: e.target.value })
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
            <Form>
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
                        type="number"
                        onChange={handleChange}
                        value={editCat.age}
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
        </>
    )
}

export default CatEdit