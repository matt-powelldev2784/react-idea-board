
import styled from 'styled-components'
import { BurgerImage } from '../../../../assets/images/svg'
import { NavItem } from './components/NavItem'

export const MobileNavigation = () => {
  return (
    <>
      <StyledBurger />
      <StyledNavLinks>
        <NavItem href="https://www.instagram.com/" text="Home" />
        <NavItem href="https://www.facebook.com/" text="Create Idea" />
        <NavItem href="https://www.linkedin.com/" text="Idea List" />
        <NavItem href="https://www.linkedin.com/" text="Idea List" />
      </StyledNavLinks>
    </>
  )
}

const StyledBurger = styled(BurgerImage)`
  width: 30px;
  height: 30px;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: none;
  }
`

const StyledNavLinks = styled.ul`
  position: absolute;
  top: 66px;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.primaryBlue};

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: none;
  }
`
