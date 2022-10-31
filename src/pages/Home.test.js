import { render, screen } from '@testing-library/react'
import Home from './Home'

describe("<Home/>", () => {
    test("renders homepage without errors", () => {
        render(<Home/>)
        const element = screen.getByText("All Cats Are Welcome!")
        expect(element).toBeInTheDocument()
    })
})