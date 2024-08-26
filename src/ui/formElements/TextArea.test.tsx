import { render, screen, fireEvent, act } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'
import { Formik, FormikProps } from 'formik'
import { TextArea } from './TextArea' // Adjust the import path as necessary
import { theme } from '../../theme/theme'

interface FormValues {
  testTextArea: string
}

const initialValues: FormValues = {
  testTextArea: '',
}

const mockFormikProps: Partial<FormikProps<FormValues>> = {
  initialValues,
  values: initialValues,
  handleBlur: jest.fn(),
  handleChange: jest.fn(),
  setFieldValue: jest.fn(),
  errors: { testTextArea: 'Required' },
  touched: { testTextArea: true },
}

describe('TextArea', () => {
  const renderTextArea = async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      render(
        <ThemeProvider theme={theme}>
          <MemoryRouter>
            <Formik
              initialValues={initialValues}
              onSubmit={() => {}}
              validate={(values) => {
                const errors: Partial<FormValues> = {}
                if (!values.testTextArea) {
                  errors.testTextArea = 'Required'
                }
                return errors
              }}
            >
              {(formikProps) => (
                <TextArea
                  formik={{ ...mockFormikProps, ...formikProps }}
                  id="testTextArea"
                  name="testTextArea"
                  labelText="Test TextArea"
                />
              )}
            </Formik>
          </MemoryRouter>
        </ThemeProvider>
      )
    })
  }

  test('it displays and updates the text area value correctly', async () => {
    await renderTextArea()

    const textAreaElement = screen.getByLabelText(/test textarea/i)
    const testValue = 'Hello, World!'

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.change(textAreaElement, { target: { value: testValue } })
    })

    expect(textAreaElement).toHaveValue(testValue)
  })

  test('it handles focus and blur events correctly', async () => {
    await renderTextArea()

    const textAreaElement = screen.getByLabelText(/test textarea/i)

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      textAreaElement.focus()
    })

    expect(textAreaElement).toHaveFocus()

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      textAreaElement.blur()
    })

    expect(textAreaElement).not.toHaveFocus()
  })

  test('it displays error message correctly', async () => {
    await renderTextArea()

    const textAreaElement = screen.getByLabelText(/test textarea/i)

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      textAreaElement.focus()
      fireEvent.change(textAreaElement, { target: { value: 'typed value' } })
      fireEvent.change(textAreaElement, { target: { value: '' } })
      textAreaElement.blur()
    })

    const errorMessage = screen.getByText(/required/i)
    expect(errorMessage).toBeInTheDocument()
  })

  test('characterCount does not appear if less than 120 characters are typed', async () => {
    await renderTextArea()

    const textAreaElement = screen.getByLabelText(/test textarea/i)
    const charactersTyped = 119
    const testValue = 'a'.repeat(charactersTyped)

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.change(textAreaElement, { target: { value: testValue } })
    })

    const characterCountElement = screen.getByRole('paragraph')
    expect(characterCountElement).toBeInTheDocument()
  })

  test('characterCount appears once 121 characters are typed', async () => {
    await renderTextArea()

    const textAreaElement = screen.getByLabelText(/test textarea/i)
    const charactersTyped = 121
    const testValue = 'a'.repeat(charactersTyped)

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      textAreaElement.focus()
      fireEvent.change(textAreaElement, { target: { value: testValue } })
    })

    const characterCountElement = screen.getByText(`${charactersTyped} / 140`)
    expect(characterCountElement).toBeInTheDocument()
  })
})
