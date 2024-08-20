import { getIdeasFromStorage } from '../index'

export const removeIdeaFromStorage = (key: string) => {
  const ideas = getIdeasFromStorage()
  const filteredIdeas = ideas.filter((idea) => idea.key !== key)
  localStorage.setItem('ideas', JSON.stringify(filteredIdeas))
}
