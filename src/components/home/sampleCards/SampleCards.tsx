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
      <StyledText>
        ID:B is your go-to application for turning your creative sparks into
        actionable plans. Our platform is meticulously designed to foster
        creativity and innovation, making it the perfect tool for brainstorming
        your next big project or organizing your thoughts. With ID:B, you can
        effortlessly capture, refine, and execute your ideas through an
        intuitive and seamless interface. Explore the potential of ID:B by
        checking out some sample idea cards at the bottom of this section. These
        examples showcase how you can use our platform to bring your ideas to
        life and stay organized. Join us on this journey to transform your
        creative process and achieve your goals with ease.
      </StyledText>

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

const StyledText = styled.p`
  width: 95%;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primaryDarkBlue};
  text-align: center;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 18px;
  }
`

