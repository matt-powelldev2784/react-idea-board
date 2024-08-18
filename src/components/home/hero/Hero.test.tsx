import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Hero } from './Hero'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../theme/theme'

describe('Hero', () => {
  const renderHero = () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Hero />
        </MemoryRouter>
      </ThemeProvider>
    )
  }

  test('renders Hero component with correct text', () => {
    renderHero()

    // Check if the title is rendered
    const titleElement = screen.getByText(/Welcome to ID:B/i)
    expect(titleElement).toBeInTheDocument()

    // Check if the description text is rendered
    const descriptionElement = screen.getByText(
      /The ultimate idea board application/i
    )
    expect(descriptionElement).toBeInTheDocument()

    // Check if the button is rendered with correct text
    const buttonElement = screen.getByText(/CLICK HERE TO CREATE IDEA/i)
    expect(buttonElement).toBeInTheDocument()
  })

  test('PrimaryButton navigates to correct URL on click', () => {
    renderHero()

    const linkElement = screen.getByRole('link', {
      name: /CLICK HERE TO CREATE IDEA/i,
    })
    expect(linkElement).toHaveAttribute('href', '/create-idea')
  })
})
