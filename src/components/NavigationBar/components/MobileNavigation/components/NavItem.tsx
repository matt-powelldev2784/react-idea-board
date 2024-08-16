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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryWhite};
  border-radius: 10px;
`

const StyledNavLink = styled.a`
  text-decoration: none;
  padding-top: 5px;
  padding-bottom: 5px;

  color: ${({ theme }) => theme.colors.secondaryWhite};
`
