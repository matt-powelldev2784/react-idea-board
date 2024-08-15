import styled from 'styled-components'

interface NavItemProps {
  href: string
  text: string
}

export const NavItem = ({ href, text }: NavItemProps) => {
  return (
    <StyledNavItem>
      <StyledNavLink href={href}>{text}</StyledNavLink>
    </StyledNavItem>
  )
}

const StyledNavItem = styled.li``

const StyledNavLink = styled.a`
  text-decoration: none;
  color: inherit;
`
