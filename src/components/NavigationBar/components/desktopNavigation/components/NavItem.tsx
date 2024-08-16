import styled from 'styled-components'

interface NavItemProps {
  href: string
  text: string
}

export const NavItem = ({ href, text }: NavItemProps) => {
  return (
    <StyledNavItem>
      <StyledNavLink href={href}>{text.toUpperCase()}</StyledNavLink>
    </StyledNavItem>
  )
}

const StyledNavItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
`

const StyledNavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryBlue};
  font-family: 'Roboto_600Bold';
`
