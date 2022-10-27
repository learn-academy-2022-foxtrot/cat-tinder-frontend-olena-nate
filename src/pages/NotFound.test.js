import { render, screen } from '@testing-library/react'
import NotFound from './NotFound'

describe("<NotFound/>", () => {
    test("displays an error screen", () => {
        render(<NotFound/>)
        const element = screen.getByText("Page not found!")
        expect(element).toBeInTheDocument()
    })

    test("NotFound has an image", () => {
        render(<NotFound/>)
        const img = screen.getByRole('img')
        expect(img).toHaveAttribute('src', 'notfound.jpg')

    })
})