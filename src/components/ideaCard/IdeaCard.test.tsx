// IdeaCard.test.tsx

import { render, screen } from '@testing-library/react'
import { IdeaCard } from './IdeaCard'
import childWithIdeaImage from '../../assets/images/bitmap/kid_idea.png'
import { theme } from '../../theme/theme'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

describe('IdeaCard', () => {
  const sampleProps = {
    title: 'Sample Idea',
    description:
      '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890',
    lastUpdated: '2023-10-01',
    numberOfStars: 4,
  }

  test('renders correctly with given props', () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <IdeaCard {...sampleProps} />
        </MemoryRouter>
      </ThemeProvider>
    )

    const image = screen.getByAltText('Child with idea')
    expect(screen.getByText(sampleProps.title)).toBeInTheDocument()
    expect(screen.getByText(sampleProps.description)).toBeInTheDocument()
    expect(
      screen.getByText(`Last Updated: ${sampleProps.lastUpdated}`)
    ).toBeInTheDocument()

    // Check if the Stars component is rendered with correct number of stars
    const numberOfStarsArray = Array.from(
      Array(sampleProps.numberOfStars).keys()
    )
    numberOfStarsArray.forEach((_, index) => {
      expect(screen.getByTestId(`stars-${index}`)).toBeInTheDocument()
    })

    expect(image).toHaveAttribute('src', childWithIdeaImage)
  })
})
