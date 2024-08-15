import styled from 'styled-components'
import { MobileNavigation } from './components/MobileNavigation/MobileNavigation'
import { IDBLogo } from '../../assets/images/svg'
import { DesktopNavigation } from './components/desktopNavigation/DesktopNavigation'

export const NavigationBar = () => {
  return (
    <StyledHeader>
      <StyledLogo />

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

const StyledLogo = styled(IDBLogo)`
  width: 180px;
  height: 60px;
  min-width: 140px;
  min-height: 30px;
  padding: 3px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 210px;
    height: 65px;
    margin: 5px;
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
