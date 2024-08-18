import styled from 'styled-components'
import { IdeaCard } from '../../index'

export const SampleCards = () => {
  return (
    <StyledSectoion>
      <IdeaCard />
      <IdeaCard />
      <IdeaCard />
    </StyledSectoion>
  )
}

const StyledSectoion = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  height: fit-content;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`
