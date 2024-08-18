import { useFormik } from 'formik'
import * as Yup from 'yup'

const useCreateIdeaFormik = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      description: Yup.string().required('Description is required'),
    }),
    onSubmit: (values, { setSubmitting }) => {
      // Handle form submission
      console.log(values)
      setSubmitting(false)
    },
  })

  return formik
}

export default useCreateIdeaFormik
