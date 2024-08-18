import styled from 'styled-components'
import { Hero, SampleCards } from '../index'

export const Home = () => {
  return (
    <StyledMain>
      <Hero />
      <SampleCards />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
