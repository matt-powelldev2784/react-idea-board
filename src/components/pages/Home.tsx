import styled from 'styled-components'
import { Hero, IdeaCard } from '../index'

export const Home = () => {
  return (
    <StyledMain>
      <IdeaCard />
      <Hero />
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
