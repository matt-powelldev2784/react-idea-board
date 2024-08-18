import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { MobileNavigation } from './MobileNavigation'
import { theme } from '../../../../theme/theme'
import { MemoryRouter } from 'react-router-dom'
import { navItemsList } from '../navItemsList/navItemsList'

describe('MobilepNavigation', () => {
  test('should render the correct number of NavItem components', () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <MobileNavigation />
        </MemoryRouter>
      </ThemeProvider>
    )

    const burgerMenu = screen.getByRole('button')
    fireEvent.click(burgerMenu)

    const navItems = screen.getAllByRole('link')
    expect(navItems.length).toBe(navItemsList.length)
  })
})
