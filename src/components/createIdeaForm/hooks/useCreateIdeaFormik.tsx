import { format } from 'date-fns'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { addIdeaToStorage } from '../../../utils'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  description: Yup.string()
    .required('Description is required')
    .max(140, 'Description must be at most 140 characters'),
  numberOfStars: Yup.number()
    .min(1, 'Number of stars must be at least between 1 and 5')
    .max(5, 'Number of stars must be at most between 1 and 5')
    .required('Number of stars is required'),
})

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
    validationSchema,
    onSubmit: (values) => {
      formik.setFieldValue('lastUpdated', format(new Date(), 'dd-MM-yy HH:mm'))

      console.log('values', values)

      addIdeaToStorage({ ...values })
      navigate('/idea-list')
    },
  })

  return formik
}
