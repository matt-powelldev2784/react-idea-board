import styled from 'styled-components'
import { NavItem } from './components/NavItem'

export const DesktopNavigation = () => {
  return (
    <>
      <StyledNavLinks>
        <NavItem href="https://www.instagram.com/" text="Home" />
        <NavItem href="https://www.facebook.com/" text="Create Idea" />
        <NavItem href="https://www.linkedin.com/" text="Idea List" />
        <NavItem href="https://www.linkedin.com/" text="Idea List" />
      </StyledNavLinks>
    </>
  )
}

const StyledNavLinks = styled.ul`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: flex;
    gap: 50px;
    list-style: none;
    padding: 0;
    margin: 0;
  }
`
