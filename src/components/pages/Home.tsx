import styled from 'styled-components'
import { Hero, Features, Footer } from '../index'


export const Home = () => {
  return (
    <StyledMain>
      <Hero />
      <Features />
      <Footer />
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
