import styled from 'styled-components'
import { IDBLogo } from '../../assets/images/svg'

export const Logo = () => {
  const handleClick = () => {
    window.location.href = '/'
  }

  return (
    <StyledButton
      aria-label="IDB Logo - click here to go to homepage"
      onClick={handleClick}
    >
      <StyledLogo />
    </StyledButton>
  )
}

const StyledButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;
  width: 180px;
  height: 60px;
  min-width: 140px;
  min-height: 30px;
  padding: 3px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 210px;
    height: 65px;
    margin: 5px;
  }
`

const StyledLogo = styled(IDBLogo)`
  width: 180px;
  height: 60px;
  min-width: 140px;
  min-height: 30px;
  padding: 3px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 210px;
    height: 65px;
    margin: 5px;
  }
`
