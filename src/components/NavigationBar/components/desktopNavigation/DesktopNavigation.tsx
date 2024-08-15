import React from 'react'
import styled from 'styled-components'

export const DesktopNavigation = () => {
  return (
    <>
      <NavLinks>
        <NavItem>
          <NavLink href="#home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">Contact</NavLink>
        </NavItem>
      </NavLinks>
    </>
  )
}

const NavLinks = styled.ul`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: flex;
    gap: 16px;
    list-style: none;
    padding: 0;
    margin: 0;
  }
`

const NavItem = styled.li``

const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
`
