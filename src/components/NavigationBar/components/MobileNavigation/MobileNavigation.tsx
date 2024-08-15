import React from 'react'
import styled from 'styled-components'
import { BurgerImage } from '../../../../assets/images/svg'

export const MobileNavigation = () => {
  return (
    <>
      <StyledBurger />
    </>
  )
}

const StyledBurger = styled(BurgerImage)`
  width: 30px;
  height: 30px;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: none;
  }
`
