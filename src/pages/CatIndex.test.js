import { render, screen } from '@testing-library/react'
import CatIndex from './CatIndex'
import mockCats from "../mockCats"
import {BrowserRouter} from "react-router-dom"

describe("<CatIndex/>", () => {

    beforeEach(()=> {
        render(
            <BrowserRouter>
                <CatIndex cats={mockCats} />
            </BrowserRouter>
        )
    })
    
    test("renders the catindex page for the user", () => {
        const element = screen.getByText("Meet the Cats")
        expect(element).toBeInTheDocument()
    })

    test("renders cat cards", () => {
        mockCats.forEach(cat => {
            const catName = screen.getByText(cat.name)
            expect(catName).toBeInTheDocument()
            const catImage = screen.getAllByRole('img')
            expect(catImage).toBeVisible
        })
    })

})