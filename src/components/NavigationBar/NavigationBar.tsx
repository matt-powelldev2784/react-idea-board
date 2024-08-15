import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../../assets/images/idb_logo.svg'

export const NavigationBar = () => {
  return (
    <Header>
      <StyledLogo />

      <Navigation>
        <p>1</p>
        <p>2</p>
      </Navigation>
    </Header>
  )
}

const Header = styled.header`
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

const StyledLogo = styled(Logo)`
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

const Navigation = styled.nav`
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
