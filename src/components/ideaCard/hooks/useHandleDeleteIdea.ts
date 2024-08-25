import { useNavigate } from 'react-router-dom'
import { removeIdeaFromStorage } from '../../../utils'

export const useHandleDeleteIdea = (id: string) => {
  const navigate = useNavigate()

  const handleDeletePress = () => {
    removeIdeaFromStorage(id)
    navigate('/blank')
    setTimeout(() => navigate('/idea-list', { replace: true }), 20)
  }

  return { handleDeletePress }
}
