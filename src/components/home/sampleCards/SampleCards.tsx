import styled from 'styled-components'
import { IdeaCard } from '../../index'
import { useWindowWidth } from '../../../hooks/index'
import { sampleCardList } from './sampleCardsList'

export const SampleCards = () => {
  const windowWidth = useWindowWidth()

  // logic to determine how many cards to display based on window width
  let numberOfCardsToDisplay = 1
  if (windowWidth > 768) numberOfCardsToDisplay = 2
  if (windowWidth > 1100) numberOfCardsToDisplay = 3
  const sampleCardsToDisplay = sampleCardList.slice(0, numberOfCardsToDisplay)

  return (
    <StyledSectoion>
      {sampleCardsToDisplay.map((card) => {
        return (
          <IdeaCard
            key={card.key}
            title={card.title}
            description={card.description}
            lastUpdated={card.lastUpdated}
            numberOfStars={card.numberOfStars}
          />
        )
      })}
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
