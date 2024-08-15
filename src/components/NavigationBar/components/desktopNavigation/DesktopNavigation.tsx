import styled from 'styled-components'
import { NavItem } from './components/NavItem'

export const DesktopNavigation = () => {
  return (
    <>
      <StyledNavLinks>
        <NavItem href="https://www.instagram.com/" text="Instagram" />
        <NavItem href="https://www.facebook.com/" text="Facebook" />
        <NavItem href="https://www.linkedin.com/" text="LinkedIn" />
      </StyledNavLinks>
    </>
  )
}

const StyledNavLinks = styled.ul`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: flex;
    gap: 16px;
    list-style: none;
    padding: 0;
    margin: 0;
  }
`
