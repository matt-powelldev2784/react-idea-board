/* eslint-disable jest/no-conditional-expect */
import { act, fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Ideas } from './Ideas'
import { theme } from '../../theme/theme'
import { useGetSortedIdeas } from './hooks/useGetSortedIdeas'
import { MemoryRouter } from 'react-router-dom'
import { sortByTitle } from './utils/sortByTitle'
import { sortByDate } from './utils/sortByDate'

jest.mock('./hooks/useGetSortedIdeas')

const mockIdeasList = [
  {
    key: '1',
    title: 'B',
    description: 'Description 1',
    numberOfStars: 5,
    lastUpdated: '2024-09-01 09:00',
  },
  {
    key: '2',
    title: 'A',
    description: 'Description 2',
    numberOfStars: 4,
    lastUpdated: '2024-09-02 10:00',
  },
]

describe('Ideas', () => {
  beforeEach(() => {
    ;(useGetSortedIdeas as jest.Mock).mockReturnValue({
      ideasList: mockIdeasList,
    })
  })

  const renderIdeas = async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      render(
        <ThemeProvider theme={theme}>
          <MemoryRouter>
            <Ideas />
          </MemoryRouter>
        </ThemeProvider>
      )
    })
  }

  test('renders the component with initial state', async () => {
    await renderIdeas()

    expect(screen.getByText('Idea List')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Unleash your creativity and share your groundbreaking ideas'
      )
    ).toBeInTheDocument()
    expect(screen.getByText('Sort By Title')).toBeInTheDocument()
    expect(screen.getByText('Sort By Date')).toBeInTheDocument()

    mockIdeasList.forEach((idea) => {
      expect(screen.getByText(idea.title)).toBeInTheDocument()
      expect(screen.getByText(idea.description)).toBeInTheDocument()
    })
  })

  test('sorts ideas by title when "Sort By Title" button is clicked', async () => {
    ;(useGetSortedIdeas as jest.Mock).mockReturnValue({
      ideasList: sortByTitle(mockIdeasList),
    })
    await renderIdeas()

    const sortByTitleButton = screen.getByText('Sort By Title')

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(sortByTitleButton)
    })

    const ideasElements = screen.getAllByTestId('card-title')
    ideasElements.forEach((element, i) => {
      if (i === 0) {
        expect(element.textContent).toBe('A')
      }
      if (i === 1) {
        expect(element.textContent).toBe('B')
      }
    })
  })

  test('sorts ideas by date when "Sort By Date" button is clicked', async () => {
    ;(useGetSortedIdeas as jest.Mock).mockReturnValue({
      ideasList: sortByDate(mockIdeasList),
    })
    await renderIdeas()

    const sortByTitleButton = screen.getByText('Sort By Title')

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(sortByTitleButton)
    })

    const ideasElements = screen.getAllByTestId('card-title')
    ideasElements.forEach((element, i) => {
      if (i === 0) {
        expect(element.textContent).toBe('A')
      }
      if (i === 1) {
        expect(element.textContent).toBe('B')
      }
    })
  })
})
