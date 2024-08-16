import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface NavItemProps {
  to: string
  text: string
}

export const NavItem = ({ to, text }: NavItemProps) => {
  return (
    <StyledNavItem>
      <StyledNavLink to={to}>{text.toUpperCase()}</StyledNavLink>
    </StyledNavItem>
  )
}

const StyledNavItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
`

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryBlue};
  font-family: 'Roboto_600Bold';
`
