import { render, screen, fireEvent, act } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'
import { Formik, FormikProps } from 'formik'
import { Input } from './Input'
import { theme } from '../../theme/theme'

interface FormValues {
  testInput: string
}

const initialValues: FormValues = {
  testInput: '',
}

const mockFormikProps: Partial<FormikProps<FormValues>> = {
  initialValues,
  values: initialValues,
  handleBlur: jest.fn(),
  handleChange: jest.fn(),
  setFieldValue: jest.fn(),
  errors: { testInput: 'Required' },
  touched: { testInput: true },
}

describe('Input', () => {
  const renderInput = async () => {
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
                if (!values.testInput) {
                  errors.testInput = 'Required'
                }
                return errors
              }}
            >
              {(formikProps) => (
                <Input
                  formik={{ ...mockFormikProps, ...formikProps }}
                  id="testInput"
                  name="testInput"
                  type="text"
                  labelText="Test Input"
                />
              )}
            </Formik>
          </MemoryRouter>
        </ThemeProvider>
      )
    })
  }

  test('it displays and updates the input value correctly', async () => {
    await renderInput()

    const inputElement = screen.getByLabelText(/test input/i)
    const testValue = 'Hello, World!'

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.change(inputElement, { target: { value: testValue } })
    })

    expect(inputElement).toHaveValue(testValue)
  })

  test('it handles focus and blur events correctly', async () => {
    await renderInput()

    const inputElement = screen.getByLabelText(/test input/i)

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      inputElement.focus()
    })

    expect(inputElement).toHaveFocus()

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      inputElement.blur()
    })

    expect(inputElement).not.toHaveFocus()
  })

  test('it displays error message correctly', async () => {
    await renderInput()

    const inputElement = screen.getByLabelText(/test input/i)

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      inputElement.focus()
      fireEvent.change(inputElement, { target: { value: 'typed value' } })
      fireEvent.change(inputElement, { target: { value: '' } })
      inputElement.blur()
    })

    const errorMessage = screen.getByText(/required/i)
    expect(errorMessage).toBeInTheDocument()
  })
})


