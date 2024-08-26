import { useEffect, useState } from 'react'
import { getIdeasFromStorage } from '../../../utils'
import { IdeaCardT } from '../../../types'
import { sortByDate } from '../utils/sortByDate'
import { sortByString } from '../utils/sortByString'

interface GetIdeasProps {
  sortBy: string
  sortType: 'number' | 'string' | 'date'
}

export const useGetSortedIdeas = ({ sortBy, sortType }: GetIdeasProps) => {
  const [ideasList, setIdeasList] = useState<IdeaCardT[]>([])

  useEffect(() => {
    if (!ideasList.length) {
      const ideas = getIdeasFromStorage() as IdeaCardT[]

      const sortedIdeas =
        sortType === 'date' ? sortByDate(ideas) : sortByString(ideas)

      setIdeasList(sortedIdeas)
      console.log('sortedIdeas', sortedIdeas)
    }
  }, [ideasList, sortBy, sortType])

  return { ideasList }
}
