import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'

describe("<Footer>", () => {
    test("renders footer without errors", () => {
        render(
            <BrowserRouter>
                <Footer/>
            </BrowserRouter>
            )
        const indexLink = screen.getByText("Copyright © 2022 | Nathaniel Ross-Loyo & Olena Zheliabina")
        expect(indexLink).toBeInTheDocument()
    })
})