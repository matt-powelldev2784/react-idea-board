import styled from 'styled-components'
import { useFormik } from 'formik'
// import useCreateIdeaFormik from './hooks/useCreateIdeaFormik'
import { LightBulbOutline } from '../../assets/images/svg'
import { Input, SubmitButton, TextArea } from '../../ui'
import * as Yup from 'yup'

export const CreateIdeaForm = () => {
  // const formik = useCreateIdeaFormik()

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

  return (
    <StyledContainer>
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledImage as={LightBulbOutline} />
        <Input
          formik={formik}
          htmlFor={'title'}
          id={'title'}
          name={'title'}
          type={'text'}
          labelText={'Title'}
        />

        <TextArea
          formik={formik}
          htmlFor={'description'}
          id={'description'}
          name={'description'}
          labelText={'Description'}
        />

        <Input
          formik={formik}
          htmlFor={'numOfStars'}
          id={'numOfStars'}
          name={'numOfStars'}
          type={'number'}
          labelText={'Confidence Level (1-5 stars)'}
        />

        <SubmitButton
          disabled={formik.isSubmitting || !formik.isValid}
          text={'Submit'}
          onClick={formik.handleSubmit}
        />
      </StyledForm>
    </StyledContainer>
  )
}

const StyledContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const StyledForm = styled.form`
  width: 90%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 600px;
    padding-left: 40px;
    padding-right: 40px;
    margin: 50px auto;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const StyledImage = styled.div`
  width: 150px;
  height: 150px;
  padding: 20px;
`
