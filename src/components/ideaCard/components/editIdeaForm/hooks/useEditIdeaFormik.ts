import { format } from 'date-fns'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { addIdeaToStorage } from '../../../../../utils'
import { useNavigate } from 'react-router-dom'
import { IdeaCardT } from '../../../../../types'

const validationSchema = Yup.object({
  title: Yup.string()
    .required('Title is required')
    .max(10, 'Title must be 20 characters or less'),
  description: Yup.string()
    .required('Description is required')
    .max(140, 'Description must be 140 characters or less'),
  numberOfStars: Yup.number()
    .min(1, 'Number of stars must be at least between 1 and 5')
    .max(5, 'Number of stars must be at most between 1 and 5')
    .required('Number of stars is required'),
})

interface EditIdeaFormilkProps {
  idea: IdeaCardT
}

export const useEditIdeaFormilk = ({ idea }: EditIdeaFormilkProps) => {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      ...idea,
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
