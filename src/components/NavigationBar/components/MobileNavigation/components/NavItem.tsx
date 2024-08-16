import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryWhite};
  border-radius: 10px;
`

const StyledNavLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  decoration: none;

  color: ${({ theme }) => theme.colors.secondaryWhite};
`
