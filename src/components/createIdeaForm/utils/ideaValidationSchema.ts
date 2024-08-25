import * as Yup from 'yup'

export const ideaValidationSchema = Yup.object({
  title: Yup.string()
    .required('Title is required')
    .max(20, 'Title must be 20 characters or less'),
  description: Yup.string()
    .required('Description is required')
    .max(140, 'Description must be 140 characters or less'),
  numberOfStars: Yup.number()
    .min(1, 'Number of stars must be at least between 1 and 5')
    .max(5, 'Number of stars must be at most between 1 and 5')
    .required('Number of stars is required'),
})
