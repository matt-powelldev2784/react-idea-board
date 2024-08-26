import { IdeaCardT } from '../../../types'

export const sortByString = (ideas: IdeaCardT[]) => {
  return ideas.sort((a, b) => a.title.localeCompare(b.title))
}
