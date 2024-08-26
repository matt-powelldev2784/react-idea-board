import { useEffect, useState } from 'react'
import { getIdeasFromStorage } from '../../../utils'
import { IdeaCardT } from '../../../types'
import { sortByDate } from '../utils/sortByDate'
import { sortByTitle } from '../utils/sortByTitle'

interface GetIdeasProps {
  sortBy: 'title' | 'date'
}

export const useGetSortedIdeas = ({ sortBy }: GetIdeasProps) => {
  const [ideasList, setIdeasList] = useState<IdeaCardT[]>([])

  useEffect(() => {
    const ideas = getIdeasFromStorage() as IdeaCardT[]

    const sortedIdeas =
      sortBy === 'date' ? sortByDate(ideas) : sortByTitle(ideas)

    setIdeasList(sortedIdeas)
  }, [sortBy])

  return { ideasList }
}
