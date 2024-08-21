import styled from 'styled-components'
import { useEditIdeaFormilk } from '../../hooks/useEditIdeaFormik'
import { IdeaCardT } from '../../../../types'
import { Stars } from '../star/Stars'
import { Edit } from '../../../../assets/images/svg'
import { TitleInput } from './components/TitleInput'

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

        <StyledDescription>{idea.description}</StyledDescription>
      </StyledTextContainer>

      <StyledFooterContainer>
        <StyledFooterText>Last Updated: {idea.lastUpdated}</StyledFooterText>
        <Stars
          numberOfStars={idea.numberOfStars}
          lastUpdated={idea.lastUpdated}
        />
      </StyledFooterContainer>

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
  height: 140px;
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

const StyledDescription = styled.p`
  position: relative;
  font-size: 14px;
  font-family: 'Roboto_400Regular';
  margin: 0;
  margin-right: 52px;
  margin-top: 4px;
  padding-left: 16px;
  padding-right: 16px;
  color: #6e6f71;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  white-space: normal;
  word-break: break-word;
`

const StyledFooterContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
`

const StyledFooterText = styled.p`
  font-size: 10px;
  color: #6e6f71;
  margin: 0;
`
