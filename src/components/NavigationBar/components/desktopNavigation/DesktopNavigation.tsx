import styled from 'styled-components'
import { NavItem } from './components/NavItem'
import { navItemsList } from '../navItemsList/navItemsList'

export const DesktopNavigation = () => {
  return (
    <>
      <StyledNavLinks>
        {navItemsList.map((item) => (
          <NavItem key={item.key} to={item.to} text={item.name} />
        ))}
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
