import { render, screen } from '@testing-library/react';
import CatEdit from './CatEdit';
import { BrowserRouter } from 'react-router-dom';


describe("<CatEdit/>", () => {
  beforeEach(() => {
      render(
        <BrowserRouter>
        <CatEdit />
        </BrowserRouter>
        )
      })
  test("renders the edit page for the user", () => {
    const CatEditHeading = screen.getByText(/edit/i)
    expect(CatEditHeading).toHaveTextContent("Edit a Cat")
  })
})