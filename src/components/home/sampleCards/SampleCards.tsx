import styled from 'styled-components'
import { IdeaCard } from '../../index'
import { useWindowWidth } from '../../../hooks/index'

export const SampleCards = () => {
  const widthWidth = useWindowWidth()

  return (
    <StyledSectoion>
      <IdeaCard />
      {widthWidth > 768 ? <IdeaCard /> : null}
      {widthWidth > 1100 ? <IdeaCard /> : null}
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
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`
