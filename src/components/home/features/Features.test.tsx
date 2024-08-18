import { render, screen } from '@testing-library/react'
import { Features } from './Features'
import { featureCardList } from './data/featureCardList'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'
import { theme } from '../../../theme/theme'
import { useWindowWidth } from '../../../hooks/index'
import { sampleCardsList } from './data/sampleCardsList'

jest.mock('../../../hooks/index', () => ({
  useWindowWidth: jest.fn(),
}))

describe('Features', () => {
  const renderFeatures = () => {
    return render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Features />
        </MemoryRouter>
      </ThemeProvider>
    )
  }

  test('renders all data on feature cards cards', () => {
    renderFeatures()

    // check all feature cards are rendered
    featureCardList.forEach((card) => {
      expect(screen.getByText(card.title)).toBeInTheDocument()
      expect(screen.getByText(card.description)).toBeInTheDocument()
      expect(screen.getByTestId(`mock-svg${card.key}`)).toBeInTheDocument()
    })
  })

  test('renders the correct number of feature cards', () => {
    renderFeatures()

    // Check that exactly 3 feature cards are rendered
    const featureCards = screen.getAllByTestId(/mock-svg/)
    expect(featureCards).toHaveLength(3)
  })

  test('renders all data on sample cards', () => {
    // Mock window width
    ;(useWindowWidth as jest.Mock).mockReturnValue(1400)
    renderFeatures()

    sampleCardsList.forEach((sampleCard) => {
      expect(screen.getByText(sampleCard.title)).toBeInTheDocument()
      expect(screen.getByText(sampleCard.description)).toBeInTheDocument()
      expect(
        screen.getByText(`Last Updated: ${sampleCard.lastUpdated}`)
      ).toBeInTheDocument()

      const numberOfStarsArray = Array.from(
        Array(sampleCard.numberOfStars).keys()
      )
      numberOfStarsArray.forEach((_, index) => {
        expect(
          screen.getByTestId(`stars-${index}${sampleCard.lastUpdated}`)
        ).toBeInTheDocument()
      })
    })
  })

  test('renders three sample cards when window width is larger than 1100', () => {
    ;(useWindowWidth as jest.Mock).mockReturnValue(1101)
    renderFeatures()
    const sampleCards = screen.getAllByText(/Last Updated/)
    expect(sampleCards).toHaveLength(3)
  })

  test('renders two sample cards when window width is larger than 768', () => {
    ;(useWindowWidth as jest.Mock).mockReturnValue(769)
    renderFeatures()
    const sampleCards = screen.getAllByText(/Last Updated/)
    expect(sampleCards).toHaveLength(2)
  })

  test('renders one sample cards when window width is less than 768', () => {
    ;(useWindowWidth as jest.Mock).mockReturnValue(768)
    renderFeatures()
    const sampleCards = screen.getAllByText(/Last Updated/)
    expect(sampleCards).toHaveLength(1)
  })
})
