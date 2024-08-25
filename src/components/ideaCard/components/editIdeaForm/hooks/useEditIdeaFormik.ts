import { format } from 'date-fns'
import { useFormik } from 'formik'
import { updateIdeaInStorage } from '../../../../../utils'
import { useNavigate } from 'react-router-dom'
import { IdeaCardT } from '../../../../../types'
import { ideaValidationSchema } from '../../../../createIdeaForm/utils/ideaValidationSchema'

interface EditIdeaFormilkProps {
  idea: IdeaCardT
}

export const useEditIdeaFormilk = ({ idea }: EditIdeaFormilkProps) => {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      ...idea,
    },
    validationSchema: ideaValidationSchema,
    onSubmit: async (values) => {
      const updatedValues = {
        ...values,
        lastUpdated: format(new Date(), 'dd-MM-yy HH:mm'),
      }

      console.log('updatedValues', updatedValues)

      updateIdeaInStorage({ ...updatedValues })
      navigate('/blank')
      setTimeout(() => navigate('/idea-list', { replace: true }), 20)
    },
  })

  return formik
}
