import { render, screen, act, fireEvent } from '@testing-library/react'
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
  values: { title: '', description: '', numberOfStars: '' },
  errors: {},
  touched: {},
  isSubmitting: false,
  isValid: true,
}

describe('CreateIdeaForm', () => {
  const renderCreateIdeaForm = async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      render(
        <ThemeProvider theme={theme}>
          <MemoryRouter>
            <CreateIdeaForm />
          </MemoryRouter>
        </ThemeProvider>
      )
    })
  }

  beforeEach(() => {
    ;(useCreateIdeaFormik as jest.Mock).mockReturnValue(mockFormik)
  })

  test('should render the form', async () => {
    await renderCreateIdeaForm()

    expect(screen.getByText('Create an Idea')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  test('should render input elements', async () => {
    await renderCreateIdeaForm()

    expect(screen.getByLabelText('TITLE'.toUpperCase())).toBeInTheDocument()
    expect(screen.getByLabelText('DESCRIPTION')).toBeInTheDocument()
    expect(
      screen.getByLabelText('CONFIDENCE LEVEL (1-5 STARS)'.toUpperCase())
    ).toBeInTheDocument()
  })

  test('should call handleSubmit when the form is submitted', async () => {
    await renderCreateIdeaForm()

    const form = screen.getByRole('form') as HTMLFormElement

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.submit(form)
    })

    expect(mockFormik.handleSubmit).toHaveBeenCalled()
  })

  // test('it allows typing in the title input element', async () => {
  //   await renderCreateIdeaForm()

  //   const titleInputElement = screen.getByLabelText(/TITLE/i)
  //   const testValue = 'New Idea Title'

  //   // eslint-disable-next-line testing-library/no-unnecessary-act
  //   await act(async () => {
  //     fireEvent.change(titleInputElement, { target: { value: testValue } })
  //     mockFormik.values.title = testValue
  //   })

  //   console.log('mockFormik.values', mockFormik.values)

  //   expect(titleInputElement).toHaveValue(testValue)
  //   screen.debug(titleInputElement)
  // })
})
