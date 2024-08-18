import { render, screen } from '@testing-library/react'
import { Stars } from './Stars'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'
import { theme } from '../../../../theme/theme'

describe('Stars component', () => {
  it('renders the correct number of stars', () => {
    const numberOfStars = 5
    const lastUpdated = '2023-10-01'
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Stars numberOfStars={numberOfStars} lastUpdated={lastUpdated} />
        </MemoryRouter>
      </ThemeProvider>
    )

    const numberOfStarsArray = Array.from(Array(numberOfStars).keys())

    numberOfStarsArray.forEach((_, index) => {
      expect(
        screen.getByTestId(`stars-${index}${lastUpdated}`)
      ).toBeInTheDocument()
    })
  })
})
