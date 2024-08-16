import styled from 'styled-components'
import { MobileNavigation } from './components/MobileNavigation/MobileNavigation'
import { DesktopNavigation } from './components/desktopNavigation/DesktopNavigation'
import { Logo } from '../../ui/logo/Logo'

export const NavigationBar = () => {
  return (
    <StyledHeader>
      <Logo />

      <StyledNavigation>
        <MobileNavigation />
        <DesktopNavigation />
      </StyledNavigation>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  height: 66px;
  padding: 0 8px;
  display: flex;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    height: 75px;
    padding: 0 30px;
  }
`

const StyledNavigation = styled.nav`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  margin-right: 15px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;
    margin-right: 30px;
  }
`
