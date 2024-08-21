import styled from 'styled-components'
import { LightBulbOutline } from '../../assets/images/svg'
import { Input, FormButton, TextArea } from '../../ui'
import { useCreateIdeaFormik } from './hooks/useCreateIdeaFormik'

export const CreateIdeaForm = () => {
  const formik = useCreateIdeaFormik()

  return (
    <StyledContainer>
      <StyledForm role="form" onSubmit={formik.handleSubmit}>
        <StyledImage as={LightBulbOutline} />

        <StyledTitle>Create an Idea</StyledTitle>

        <Input
          formik={formik}
          id={'title'}
          name={'title'}
          type={'text'}
          labelText={'Title'}
        />

        <TextArea
          formik={formik}
          id={'description'}
          name={'description'}
          labelText={'Description'}
        />

        <Input
          formik={formik}
          id={'numberOfStars'}
          name={'numberOfStars'}
          type={'number'}
          labelText={'Confidence Level (1-5 stars)'}
        />

        <FormButton
          disabled={formik.isSubmitting || !formik.isValid}
          text={'Submit'}
          type={'submit'}
          data-testid="submit-button"
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
  background-color: ${({ theme }) => theme.colors.backgroundLightBlue};
`

const StyledForm = styled.form`
  width: 90%;
  background-color: ${({ theme }) => theme.colors.backgroundLightBlue};
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
  width: 100px;
  height: 100px;
  padding-top: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 150px;
    height: 150px;
    padding-top: 20px;
  }
`

const StyledTitle = styled.h1`
  font-size: 24px;
  font-family: 'Roboto_600Bold';
  margin: 0;
  padding-bottom: 20px;
  color: ${({ theme }) => theme.colors.primaryBlue};
`
