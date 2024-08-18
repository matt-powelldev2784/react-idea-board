import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Footer } from './Footer'
import { theme } from '../../../theme/theme'
import { MemoryRouter } from 'react-router-dom'

describe('Footer component', () => {
  test('renders the footer with correct content', () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </ThemeProvider>
    )

    expect(screen.getByText('ID:B')).toBeInTheDocument()
    expect(
      screen.getByText('1 London Road, London, SW1 1AA')
    ).toBeInTheDocument()
    expect(
      screen.getByText('Email : idb-support@gmail.com')
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Email : idb-support@gmail.com/i })
    ).toHaveAttribute('href', 'mailto:idb-support@gmail.com')
  })
})
