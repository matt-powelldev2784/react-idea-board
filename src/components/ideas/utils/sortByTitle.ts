import { IdeaCardT } from '../../../types'

export const sortByTitle = (ideas: IdeaCardT[]) => {
  return ideas.sort((a, b) => a.title.localeCompare(b.title))
}
