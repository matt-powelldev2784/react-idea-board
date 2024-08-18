import { render, screen } from '@testing-library/react'
import { FeatureCard } from './FeatureCard'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'
import { theme } from '../../../../theme/theme'

const MockSvg = () => <svg data-testid="mock-svg" />

describe('FeatureCard', () => {
  test('renders the title and description', () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <FeatureCard
            svgImage={MockSvg}
            title="Test Title"
            description="Test Description"
          />
        </MemoryRouter>
      </ThemeProvider>
    )

    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
    expect(screen.getByTestId('mock-svg')).toBeInTheDocument()
  })
})
