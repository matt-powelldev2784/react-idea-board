import { IdeaCardT } from '../../types'
import { getIdeasFromStorage } from '../index'

export const addIdeaToStorage = (idea: IdeaCardT) => {
  const ideas = getIdeasFromStorage()
  ideas.push(idea)
  localStorage.setItem('ideas', JSON.stringify(ideas))
}
