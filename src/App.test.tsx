import { render, screen } from '@testing-library/react'
import App from './App'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'


describe('App Component', () => {
  test('App renders navigation bar logo', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    )
    const logoButton = screen.getByLabelText(
      'IDB Logo - click here to go to homepage'
    )
    expect(logoButton).toBeInTheDocument()
  })
})
