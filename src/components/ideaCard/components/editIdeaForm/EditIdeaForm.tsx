import styled from 'styled-components'
import { useEditIdeaFormilk } from './hooks/useEditIdeaFormik'
import { IdeaCardT } from '../../../../types'
import { FormButton, Input, TextArea } from '../../../../ui'
import { useNavigate } from 'react-router-dom'

interface EditIdeaFormProps {
  idea: IdeaCardT
}

export const EditIdeaForm = ({ idea }: EditIdeaFormProps) => {
  const navigate = useNavigate()
  const formik = useEditIdeaFormilk({ idea })
  const handleCancelEditIdea = () => {
    navigate('/blank')
    setTimeout(() => navigate('/idea-list', { replace: true }), 20)
  }

  return (
    <StyledForm role="form" onSubmit={formik.handleSubmit}>
      <StyledTextContainer>
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

        <StyledButtonConatiner>
          <FormButton
            text={'Cancel'}
            type={'reset'}
            data-testid="submit-button"
            resetFormFunction={handleCancelEditIdea}
          />

          <FormButton
            disabled={formik.isSubmitting || !formik.isValid}
            text={'Submit'}
            type={'submit'}
            data-testid="submit-button"
          />
        </StyledButtonConatiner>
      </StyledTextContainer>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  position: relative;
  width: 100%;
  height: fit-content;
`

const StyledTextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: fit-content;
  margin-top: 12px;
  margin-left: 12px;
  margin-right: 12px;
`

const StyledButtonConatiner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 12px;
  margin-bottom: 12px;
`