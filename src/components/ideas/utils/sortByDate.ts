import { IdeaCardT } from '../../../types'
import { parseUpdatedDate } from './parseUpdatedDate'

export const sortByDate = (ideas: IdeaCardT[]) => {
  return ideas.sort((a, b) => {
    return (
      parseUpdatedDate(b.lastUpdated).getTime() -
      parseUpdatedDate(a.lastUpdated).getTime()
    )
  })
}
