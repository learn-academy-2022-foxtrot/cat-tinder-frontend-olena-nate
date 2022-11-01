import {render, screen} from "@testing-library/react"
import CatNew from  './CatNew'
import { BrowserRouter } from "react-router-dom"

describe("<CatNew/>", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
            <CatNew />
            </BrowserRouter>
        )
    })


test("renders CatNew for the user", () => {
    const catNewHeading = screen.getByText(/new cat/i)
    expect(catNewHeading).toHaveTextContent("Add a New Cat")
})
test("has a form with entries for name, age, enjoys, image", () => {
    const nameLabel = screen.getByText(/name/i)
    expect(nameLabel.getAttribute("for")).toEqual("name")
})
})