import { IdeaCardT } from '../../types'

export const getIdeasFromStorage = (): IdeaCardT[] => {
  const ideas = localStorage.getItem('ideas')
  const parsedIdeas = ideas ? JSON.parse(ideas) : []
  return parsedIdeas
}
