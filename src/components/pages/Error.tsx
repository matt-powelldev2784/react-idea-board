import styled from 'styled-components'
import { Error } from '../../assets/images/svg'

export const ErrorPage = () => {
  return (
    <StyledContainer>
      <StyledLogo />
      <StyledH1>Server Error</StyledH1>
      <StyledP>Please try agian later</StyledP>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
`

const StyledLogo = styled(Error)`
  width: 75px;
  height: 60px;
  margin: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 100px;
    height: 90px;
    margin: 20px;
  }
`
const StyledH1 = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primaryBlue};
  padding: 5px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 40px;
  }
`

const StyledP = styled.p`
  color: ${({ theme }) => theme.colors.primaryBlue};
  font-size: 16px;
  margin: 10px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 20px;
  }
`
