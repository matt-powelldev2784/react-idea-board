import { IdeaCardT } from '../../types'
import { getIdeasFromStorage } from '../index'

export const getSingleIdeaFromStorage = (key: string): IdeaCardT | undefined => {
  const ideas = getIdeasFromStorage()
  return ideas.find((idea) => idea.key === key)
}
