import { useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  description: Yup.string()
    .required('Description is required')
    .max(140, 'Description must be at most 140 characters'),
  numOfStars: Yup.number()
    .min(1, 'Number of stars must be at least between 1 and 5')
    .max(5, 'Number of stars must be at most between 1 and 5')
    .required('Number of stars is required'),
})

export const useCreateIdeaFormik = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      numOfStars: 1,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return formik
}
