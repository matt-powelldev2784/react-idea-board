import { format } from 'date-fns'
import { useFormik } from 'formik'
import { addIdeaToStorage } from '../../../utils'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { ideaValidationSchema } from '../utils/ideaValidationSchema'

export const useCreateIdeaFormik = () => {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      key: uuidv4(),
      title: '',
      description: '',
      numberOfStars: 1,
      lastUpdated: format(new Date(), 'dd-MM-yy HH:mm'),
    },
    validationSchema: ideaValidationSchema,
    onSubmit: (values) => {
      const updatedValues = {
        ...values,
        lastUpdated: format(new Date(), 'dd-MM-yy HH:mm'),
      }

      console.log('updatedValues', updatedValues)

      addIdeaToStorage({ ...updatedValues })
      navigate('/idea-list')
    },
  })

  return formik
}
