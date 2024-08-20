import styled from 'styled-components'
import { getIdeasFromStorage } from '../../utils'
import { IdeaCard } from '../index'

export const Ideas = () => {
  const ideas = getIdeasFromStorage()

  return (
    <StyledSection>
      <StyledTitleContainer>
        <StyledTitle>Idea FACTORY</StyledTitle>
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
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px;
`

const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
`

const StyledTitle = styled.p`
  font-size: 24px;
  font-family: 'Roboto_600Bold';
  color: ${({ theme }) => theme.colors.primaryBlue};
  margin-bottom: 20px;
`

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1080px;
`
