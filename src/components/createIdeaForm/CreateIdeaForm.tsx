import styled from 'styled-components'
import { LightBulbOutline } from '../../assets/images/svg'

export const CreateIdeaForm = () => {
  return (
    <StyledContainer>
      <StyledBackground />
      <StyledForm>
        <StyledImage as={LightBulbOutline} />
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

const StyledBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  // background: linear-gradient(
  //   135deg,
  //   rgba(53, 101, 151, 0.5),
  //   rgba(123, 164, 201, 0.5)
  // );
  // opacity: 0.5;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  height: fit-content;
  max-width: 600px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.boxOutlineGrey};
  margin-top: 16px;
  background: ${({ theme }) => theme.colors.secondaryWhite};
  z-index: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 100%;
  }
`
const StyledImage = styled.svg`
  width: 140px;
  height: 140px;
  padding: 16px;
`
