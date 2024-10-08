import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { PrimaryButton } from '../../index'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../theme/theme'

describe('PrimaryButton', () => {
  const renderButton = () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <PrimaryButton text="Click Me" navigateTo="/not-found" />
        </MemoryRouter>
      </ThemeProvider>
    )
  }

  test('renders with correct text', () => {
    renderButton()
    const buttonElement = screen.getByText(/Click Me/i)
    expect(buttonElement).toBeInTheDocument()
  })

  test('navigates to correct URL on click', () => {
    renderButton()

    const linkElement = screen.getByRole('link', { name: /Click Me/i })
    fireEvent.click(linkElement)
    expect(window.location.pathname).toBe('/')

    expect(linkElement).toHaveAttribute('href', '/not-found')
  })
})
