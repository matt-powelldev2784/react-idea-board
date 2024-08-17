import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'
import { theme } from '../../../../../theme/theme'
import { NavItem } from './NavItem'

const to = '/test-path'
const text = 'TEST'
const toggleMenuMock = jest.fn()

const renderNavItem = () => {
  render(
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <NavItem to={to} text={text} toggleMenu={toggleMenuMock} />
      </MemoryRouter>
    </ThemeProvider>
  )
}

describe('Nav Item Component', () => {
  test('renders NavItem with correct text', () => {
    renderNavItem()
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  test('renders NavItem with correct href', () => {
    renderNavItem()
    const link = screen.getByRole('link', { name: text })
    expect(link).toHaveAttribute('href', to)
  })

  test('calls toggleMenu when link is clicked', () => {
    renderNavItem()
    const link = screen.getByRole('link', { name: text })
    fireEvent.click(link)
    expect(toggleMenuMock).toHaveBeenCalledTimes(1)
  })
})
