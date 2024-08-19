import { IdeaCardT } from '../../types'
import { getIdeasFromStorage } from '../index'

export const updateIdeaInStorage = (idea: IdeaCardT) => {
  const ideas = getIdeasFromStorage()
  const updatedIdeas = ideas.map((storedIdea) =>
    storedIdea.key === idea.key ? idea : storedIdea
  )
  localStorage.setItem('ideas', JSON.stringify(updatedIdeas))
}
