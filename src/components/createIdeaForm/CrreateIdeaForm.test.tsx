import { fireEvent, render, screen } from '@testing-library/react'
import { CreateIdeaForm } from './CreateIdeaForm'
import { useCreateIdeaFormik } from './hooks/useCreateIdeaFormik'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme/theme'
import { MemoryRouter } from 'react-router-dom'

jest.mock('./hooks/useCreateIdeaFormik')

const mockFormik = {
  handleSubmit: jest.fn(),
  handleChange: jest.fn(),
  handleBlur: jest.fn(),
  values: {
    title: '',
    description: '',
    numberOfStars: 1,
    lastUpdated: '',
  },
  errors: {},
  touched: {},
  isSubmitting: false,
  isValid: true,
}

describe('CreateIdeaForm', () => {
  const renderIdeaForm = () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <CreateIdeaForm />
        </MemoryRouter>
      </ThemeProvider>
    )
  }

  beforeEach(() => {
    ;(useCreateIdeaFormik as jest.Mock).mockReturnValue(mockFormik)
  })

  test('should render the form', () => {
    renderIdeaForm()

    expect(screen.getByText('Create an Idea')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  test('should render input elements', () => {
    renderIdeaForm()

    expect(screen.getByLabelText('TITLE'.toUpperCase())).toBeInTheDocument()
    expect(screen.getByLabelText('DESCRIPTION')).toBeInTheDocument()
    expect(
      screen.getByLabelText('CONFIDENCE LEVEL (1-5 STARS)'.toUpperCase())
    ).toBeInTheDocument()
  })

  test('should call handleSubmit when the form is submitted', () => {
    renderIdeaForm()

    const form = screen.getByRole('form') as HTMLFormElement

    fireEvent.submit(form)

    expect(mockFormik.handleSubmit).toHaveBeenCalled()
  })

  // test('should update form values on input change', () => {
  //   renderIdeaForm()

  //   const titleInput = screen.getByLabelText('TITLE')
  //   fireEvent.change(titleInput, { target: { value: 'New Idea' } })

  //   expect(mockFormik.handleChange).toHaveBeenCalled()
  //   expect(titleInput).toHaveValue('New Idea')
  // })
})
