import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { DesktopNavigation } from './DesktopNavigation'
import { navItemsList } from '../navItemsList/navItemsList'
import { theme } from '../../../../theme/theme'
import { MemoryRouter } from 'react-router-dom'

describe('DesktopNavigation', () => {
  test('should render the correct number of NavItem components', () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <DesktopNavigation />
        </MemoryRouter>
      </ThemeProvider>
    )

    const navItems = screen.getAllByRole('link', { hidden: true })
    expect(navItems.length).toBe(navItemsList.length)
  })
})
