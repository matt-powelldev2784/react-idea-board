import styled from 'styled-components'
import { useEditIdeaFormilk } from '../../hooks/useEditIdeaFormik'
import { IdeaCardT } from '../../../../types'
import { Edit } from '../../../../assets/images/svg'
import { TitleInput } from './components/TitleInput'
import { DescriptionTextArea } from './components/DescriptionTextArea'
import { NumberOfStarsInput } from './components/NumberOfStarsInput'

interface EditIdeaFormProps {
  idea: IdeaCardT
}

export const EditIdeaForm = ({ idea }: EditIdeaFormProps) => {
  const formik = useEditIdeaFormilk({ idea })

  console.log('idea', idea)

  return (
    <StyledForm role="form" onSubmit={formik.handleSubmit}>
      <StyledTextContainer>
        <StyledEditButton onClick={() => {}}>
          <StyledEditIcon />
        </StyledEditButton>

        <TitleInput idea={idea} formik={formik} />

        <DescriptionTextArea idea={idea} formik={formik} />

        <NumberOfStarsInput idea={idea} formik={formik} />
      </StyledTextContainer>

      {/* <InputSmall
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
        text={'Update'}
        type={'submit'}
        data-testid="submit-button"
      /> */}
    </StyledForm>
  )
}

const StyledForm = styled.form`
  position: relative;
  width: 100%;
  height: 176px;
`

const StyledTextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  height: 170px;
  margin-top: 12px;
`

const StyledEditButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
`

const StyledEditIcon = styled(Edit)`
  width: 35px;
  height: 35px;
  margin-right: 12px;
`

