/* eslint-disable jsx-a11y/no-redundant-roles */
import { render, screen, fireEvent } from '@testing-library/react'
import { FormButton } from './FormButton'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../theme/theme'
import { MemoryRouter } from 'react-router-dom'

interface ButtonProps {
  text: string
  disabled?: boolean
  'data-testid'?: string
  type: 'submit' | 'reset'
}

describe('FormButton', () => {
  const handleSubmit = jest.fn()
  const handleReset = jest.fn()

  const renderFormButton = ({ text, type, disabled }: ButtonProps) => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <form onSubmit={handleSubmit} onReset={handleReset} role="form">
            <FormButton
              text={text}
              type={type}
              disabled={disabled}
              data-testid="form-button"
            />
          </form>
        </MemoryRouter>
      </ThemeProvider>
    )
  }

  test('renders with correct text and attributes', () => {
    renderFormButton({ text: 'Submit', type: 'submit', disabled: false })

    const buttonElement = screen.getByTestId('form-button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveTextContent('Submit')
    expect(buttonElement).toHaveAttribute('type', 'submit')
  })

  test('is disabled when the disabled prop is true', () => {
    renderFormButton({ text: 'Submit', type: 'submit', disabled: true })

    const buttonElement = screen.getByTestId('form-button')
    expect(buttonElement).toBeDisabled()
  })

  test('triggers submit functionality when clicked', () => {
    renderFormButton({ text: 'Submit', type: 'submit', disabled: false })

    const form = screen.getByRole('form')
    fireEvent.submit(form)

    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })

  test('triggers reset functionality when clicked', () => {
    renderFormButton({ text: 'Submit', type: 'reset', disabled: false })

    const form = screen.getByRole('form')
    fireEvent.reset(form)

    expect(handleReset).toHaveBeenCalledTimes(1)
  })
})
