import { useEffect } from 'react'

export const useNavigateToError = (error: boolean) => {
  useEffect(() => {
    if (error) {
      window.location.href = '/error'
    }
  }, [error])
}
