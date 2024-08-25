import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../theme/theme'
import { CustomButton } from '../../index'

describe('CustomButton', () => {
  const onClick = jest.fn()

  const renderButton = () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <CustomButton text="Click Me" onClick={onClick} />
        </MemoryRouter>
      </ThemeProvider>
    )
  }

  test('renders with correct text', () => {
    renderButton()
    const buttonElement = screen.getByText(/Click Me/i)
    expect(buttonElement).toBeInTheDocument()
  })

  test('function is called when button is clicked', () => {
    renderButton()

    const linkElement = screen.getByRole('button', { name: /Click Me/i })
    fireEvent.click(linkElement)
    expect(onClick).toHaveBeenCalled()
  })
})
