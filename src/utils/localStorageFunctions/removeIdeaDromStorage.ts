import { getIdeasFromStorage } from '../index'

export const removeIdeaFromStorage = (key: number) => {
  const ideas = getIdeasFromStorage()
  const filteredIdeas = ideas.filter((idea) => idea.key !== key)
  localStorage.setItem('ideas', JSON.stringify(filteredIdeas))
}
