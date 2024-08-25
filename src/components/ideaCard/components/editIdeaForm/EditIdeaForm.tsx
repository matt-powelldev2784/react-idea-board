import styled from 'styled-components'
import { useEditIdeaFormilk } from './hooks/useEditIdeaFormik'
import { IdeaCardT } from '../../../../types'
import { ArrowRight } from '../../../../assets/images/svg'
import { TitleInput } from './components/TitleInput'
import { DescriptionTextArea } from './components/DescriptionTextArea'
import { NumberOfStarsInput } from './components/NumberOfStarsInput'

interface EditIdeaFormProps {
  idea: IdeaCardT
}

export const EditIdeaForm = ({ idea }: EditIdeaFormProps) => {
  const formik = useEditIdeaFormilk({ idea })

  return (
    <StyledForm role="form" onSubmit={formik.handleSubmit}>
      <StyledTextContainer>
        <StyledEditButton type="submit">
          <StyledEditIcon />
        </StyledEditButton>

        <TitleInput idea={idea} formik={formik} />

        <DescriptionTextArea idea={idea} formik={formik} />

        <NumberOfStarsInput idea={idea} formik={formik} />
      </StyledTextContainer>
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

const StyledEditIcon = styled(ArrowRight)`
  width: 35px;
  height: 35px;
  margin-right: 12px;
`

