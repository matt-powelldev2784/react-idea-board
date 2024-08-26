import { act, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'
import { IdeaCardWithForm } from './IdeaCardWithForm' // Adjust the import path as necessary
import { theme } from '../../theme/theme'

const ideaCardWithFromProps = {
  id: '1',
  title: 'Idea title',
  description: 'Idea description',
  lastUpdated: '2021-09-01 09:00',
  numberOfStars: 5,
}

jest.mock('./components/editIdeaForm/hooks/useEditIdeaFormik')
jest.mock('./utils/handleEditIdea')

describe('IdeaCardWithForm', () => {
  const renderIdeaCardWithForm = async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      render(
        <ThemeProvider theme={theme}>
          <MemoryRouter>
            <IdeaCardWithForm
              id={ideaCardWithFromProps.id}
              title={ideaCardWithFromProps.title}
              description={ideaCardWithFromProps.description}
              lastUpdated={ideaCardWithFromProps.lastUpdated}
              numberOfStars={ideaCardWithFromProps.numberOfStars}
            />
          </MemoryRouter>
        </ThemeProvider>
      )
    })
  }

  test('it renders the form correctly', async () => {
    await renderIdeaCardWithForm()

    expect(screen.getByText(/Idea Title/i)).toBeInTheDocument()
    expect(screen.getByText(/Idea description/i)).toBeInTheDocument()
    expect(screen.getByText(/2021-09-01 09:00/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /edit/i })).toBeInTheDocument()
  })
})
