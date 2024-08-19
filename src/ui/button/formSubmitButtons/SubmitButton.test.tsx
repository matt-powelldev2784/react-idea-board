import { render, screen, fireEvent } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { SubmitButton } from './SubmitButton'
import { MemoryRouter } from 'react-router-dom'
import { theme } from '../../../theme/theme'

interface ButtonProps {
  text: string
  onClick: jest.Mock<any, any>
  disabled?: boolean
}

describe('SubmitButton', () => {
  const renderSubmitButton = ({ onClick, text, disabled }: ButtonProps) => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <SubmitButton text={text} onClick={onClick} disabled={disabled} />
        </MemoryRouter>
      </ThemeProvider>
    )
  }

  const onClick = jest.fn()

  test('renders with the correct text', () => {
    renderSubmitButton({ onClick, disabled: false, text: 'Submit' })
    const buttonElement = screen.getByText(/submit/i)
    expect(buttonElement).toBeInTheDocument()
  })

  test('calls onClick when clicked', () => {
    renderSubmitButton({ onClick, disabled: false, text: 'Submit' })

    const buttonElement = screen.getByText(/submit/i)
    fireEvent.click(buttonElement)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('is disabled when the disabled prop is true', () => {
    renderSubmitButton({ onClick, disabled: true, text: 'Submit' })

    const buttonElement = screen.getByText(/submit/i)
    expect(buttonElement).toBeDisabled()
  })
})
