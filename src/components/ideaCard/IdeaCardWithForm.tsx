import styled from 'styled-components'
import { Stars } from './components/star/Stars'
import { useState } from 'react'
import { Edit } from '../../assets/images/svg/index'
import childWithIdeaImage from '../../assets/images/bitmap/kid_idea.png'

interface IdeaCardProps {
  title: string
  description: string
  lastUpdated: string
  numberOfStars: number
}

export const IdeaCardWithForm = ({
  title,
  description,
  lastUpdated,
  numberOfStars,
}: IdeaCardProps) => {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false)
  const toggleFormIsVisible = () => setIsFormVisible((prev) => !prev)
  console.log('isFormVisible', isFormVisible)

  return (
    <StyledArticle>
      <StyledImageContainer>
        <StyledImage src={childWithIdeaImage} alt="Child with idea" />
      </StyledImageContainer>

      <StyledTextContainer>
        <StyledEditButton onClick={toggleFormIsVisible}>
          <StyledEditIcon />
        </StyledEditButton>

        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>

      <StyledFooterContainer>
        <StyledFooterText>Last Updated: {lastUpdated}</StyledFooterText>
        <Stars numberOfStars={numberOfStars} lastUpdated={lastUpdated} />
      </StyledFooterContainer>
    </StyledArticle>
  )
}

const StyledArticle = styled.article`
  position: relative;
  width: 95%;
  height: 340px;
  background-color: #fff;
  border-radius: 18px;
  border: 1.4px solid ${({ theme }) => theme.colors.boxOutlineGrey};
  padding-bottom: 16px;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 330px;
    min-width: 330px;
  }
`

const StyledImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(255, 0, 150, 0.5),
    rgba(0, 204, 255, 0.5)
  );
`
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const StyledTextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 140px;
  margin-top: 12px;
`

const StyledEditButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
`

const StyledEditIcon = styled(Edit)`
  width: 35px;
  height: 35px;
  margin-right: 12px;
`

const StyledTitle = styled.p`
  font-size: 18px;
  font-family: 'Roboto_600Bold';
  margin: 0;
  padding-left: 16px;
  padding-right: 16px;
  margin-right: 52px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`

const StyledDescription = styled.p`
  position: relative;
  font-size: 14px;
  font-family: 'Roboto_400Regular';
  margin: 0;
  margin-right: 52px;
  margin-top: 4px;
  padding-left: 16px;
  padding-right: 16px;
  color: #6e6f71;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  white-space: normal;
  word-break: break-word;
`

const StyledFooterContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
`

const StyledFooterText = styled.p`
  font-size: 10px;
  color: #6e6f71;
  margin: 0;
`
