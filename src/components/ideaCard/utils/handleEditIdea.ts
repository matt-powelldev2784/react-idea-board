import { getSingleIdeaFromStorage } from '../../../utils'

interface handleEditIdeaT {
  id: string
  setIsFormVisible: (value: boolean) => void
  setIdea: (value: any) => void
  setIsError: (value: boolean) => void
}

export const handleEditIdea = ({
  id,
  setIsFormVisible,
  setIdea,
  setIsError,
}: handleEditIdeaT) => {
  setIsFormVisible(true)
  const idea = getSingleIdeaFromStorage(id)
  if (!idea) {
    setIsFormVisible(true)
    setIsError(true)
  }
  setIdea(idea)
}
