import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'

describe("<Header>", () => {
    test("renders header without errors", () => {
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
            )
        const indexLink = screen.getByText("Home")
        expect(indexLink).toBeInTheDocument()
    })

    test("header has clickable links", () => {
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        )

        userEvent.click(screen.getByText("All Cats"))
        expect(screen.getByText("All Cats")).toBeInTheDocument()

        userEvent.click(screen.getByText("New Cat"))
        expect(screen.getByText("New Cat")).toBeInTheDocument()

        userEvent.click(screen.getByText("Edit Cat"))
        expect(screen.getByText("Edit Cat")).toBeInTheDocument()

        userEvent.click(screen.getByText("Home"))
        expect(screen.getByText("Home")).toBeInTheDocument()


    })
})