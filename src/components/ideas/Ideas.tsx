import styled from 'styled-components'
import { IdeaCardWithForm } from '../index'
import { CustomButton } from '../../ui'
import { useGetSortedIdeas } from './hooks/useGetSortedIdeas'
import { useState } from 'react'

type sortBy = 'title' | 'date'

export const Ideas = () => {
  const [sortField, setSortField] = useState<sortBy>('title')
  const { ideasList } = useGetSortedIdeas({
    sortBy: sortField,
  })

  return (
    <StyledSection>
      <StyledTitleContainer>
        <StyledTitle>Idea List</StyledTitle>
        <StyledText>
          Unleash your creativity and share your groundbreaking ideas
        </StyledText>
      </StyledTitleContainer>

      <CustomButton
        text={'Sort By Title'}
        onClick={() => setSortField('title')}
      />
      <CustomButton
        text={'Sort By Date'}
        onClick={() => setSortField('date')}
      />

      <StyledCardContainer>
        {ideasList.map((idea) => (
          <IdeaCardWithForm
            key={idea.key}
            id={idea.key}
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
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundLightBlue};
  min-height: 100vh;
  padding-bottom: 60px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
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
  width: 100%;
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
  height: fit-content;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
  }
`
