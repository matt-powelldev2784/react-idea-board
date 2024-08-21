import styled from 'styled-components'
import { getIdeasFromStorage } from '../../utils'
import { IdeaCard } from '../index'

export const Ideas = () => {
  const ideas = getIdeasFromStorage()

  return (
    <StyledSection>
      <StyledTitleContainer>
        <StyledTitle>Idea List</StyledTitle>
        <StyledText>
          Unleash your creativity and share your groundbreaking ideas
        </StyledText>
      </StyledTitleContainer>

      <StyledCardContainer>
        {ideas.map((idea) => (
          <IdeaCard
            key={idea.key}
            title={idea.title}
            description={idea.description}
            numberOfStars={idea.numberOfStars}
            lastUpdated={idea.lastUpdated}
          />
        ))}
      </StyledCardContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundLightBlue};
  min-height: 100vh;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    padding-right: 20px;
  }
`
const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 15px;
  margin-right: 15px;
`

const StyledTitle = styled.p`
  font-size: 24px;
  font-family: 'Roboto_600Bold';
  color: ${({ theme }) => theme.colors.darkBlue};
  text-align: center;
`

const StyledText = styled.p`
  font-size: 16px;
  font-family: 'Roboto_400Regular';
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1080px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
  }
`
