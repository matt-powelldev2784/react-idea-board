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

const mockFormikProps: FormikProps<FormValues> = {
  initialValues,
  values: initialValues,
  errors: {},
  touched: {},
  isSubmitting: false,
  isValidating: false,
  submitCount: 0,
  handleBlur: jest.fn(),
  handleChange: jest.fn(),
  handleReset: jest.fn(),
  handleSubmit: jest.fn(),
  setErrors: jest.fn(),
  setFormikState: jest.fn(),
  setFieldTouched: jest.fn(),
  setFieldValue: jest.fn(),
  setFieldError: jest.fn(),
  setStatus: jest.fn(),
  setSubmitting: jest.fn(),
  setTouched: jest.fn(),
  setValues: jest.fn(),
  submitForm: jest.fn(),
  validateField: jest.fn(),
  validateForm: jest.fn(),
  resetForm: jest.fn(),
  getFieldProps: jest.fn(),
  getFieldMeta: jest.fn(),
  getFieldHelpers: jest.fn(),
  registerField: jest.fn(),
  unregisterField: jest.fn(),
  validateOnBlur: true,
  validateOnChange: true,
  validateOnMount: false,
  dirty: false,
  isValid: true,
  initialErrors: {},
  initialTouched: {},
  initialStatus: undefined,
  status: undefined,
}

test('it displays and updates the input value correctly', async () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Formik initialValues={initialValues} onSubmit={() => {}}>
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

  const inputElement = screen.getByLabelText(/test input/i)
  const testValue = 'Hello, World!'

  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    fireEvent.change(inputElement, { target: { value: testValue } })
  })

  // Assert that the input field value matches the typed text
  expect(inputElement).toHaveValue(testValue)
})
