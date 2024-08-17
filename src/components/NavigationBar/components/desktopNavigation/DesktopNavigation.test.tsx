import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { DesktopNavigation } from './DesktopNavigation'
import { navItemsList } from '../navItemsList/navItemsList'
import { theme } from '../../../../theme/theme'

describe('DesktopNavigation', () => {
  test('should render the correct number of NavItem components', () => {
    render(
      <ThemeProvider theme={theme}>
        <DesktopNavigation />
      </ThemeProvider>
    )

    const navItems = screen.getAllByRole('listitem')
    expect(navItems.length).toBe(navItemsList.length)
  })

  // Optionally, you can add more tests to check for responsiveness and other behaviors
})
