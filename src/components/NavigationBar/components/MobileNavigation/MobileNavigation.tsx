
import styled from 'styled-components'
import { BurgerImage } from '../../../../assets/images/svg'
import { NavItem } from './components/NavItem'
import { useState } from 'react'
import { navItemsList } from '../navItemsList/navItemsList'

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <>
      <StyledButton onClick={toggleMenu}>
        <StyledBurger />
      </StyledButton>
      {isOpen ? (
        <StyledNavLinks>
          {navItemsList.map((item) => (
            <NavItem key={item.key} href={item.href} text={item.name} />
          ))}
        </StyledNavLinks>
      ) : null}
    </>
  )
}

const StyledButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: none;
  }
`

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
