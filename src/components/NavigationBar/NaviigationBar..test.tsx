import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { NavigationBar } from './NavigationBar'
import { theme } from '../../theme/theme'
import { MemoryRouter } from 'react-router-dom'

describe('NavigationBar', () => {
  const renderNavigationBar = () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <NavigationBar />
        </MemoryRouter>
      </ThemeProvider>
    )
  }

  test('should render the Logo component', () => {
    renderNavigationBar()

    const logoButton = screen.getByLabelText(
      'IDB Logo - click here to go to homepage'
    )
    expect(logoButton).toBeInTheDocument()
  })

  test('logo component should navigate to home page if clicked', () => {
    renderNavigationBar()

    const logoButton = screen.getByLabelText(
      'IDB Logo - click here to go to homepage'
    )
    fireEvent.click(logoButton)
    expect(window.location.pathname).toBe('/')
  })

  test('should render the MobileNavigation component', () => {
    renderNavigationBar()

    const mobileNav = screen.getByRole('navigation')
    expect(mobileNav).toBeInTheDocument()
  })

  test('should render the DesktopNavigation component', () => {
    renderNavigationBar()

    const desktopNav = screen.getByRole('navigation')
    expect(desktopNav).toBeInTheDocument()
  })
})
