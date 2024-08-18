import styled from 'styled-components'
import childWithIdeaImage from '../../assets/images/bitmap/kid_idea.png'
import { Stars } from './components/star/Stars'

export const IdeaCard = () => {
  return (
    <StyledArticle>
      <StyledImageContainer>
        <StyledImage src={childWithIdeaImage} alt="Child with idea" />
      </StyledImageContainer>

      <StyledTitle>Holiday to the moon</StyledTitle>
      <StyledDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since.
      </StyledDescription>

      <StyledTextContainer>
        <StyledFooterText>Last Updated: 12/12/24 14:00</StyledFooterText>
        <Stars numberOfStars={5} />
      </StyledTextContainer>
    </StyledArticle>
  )
}

const StyledArticle = styled.article`
  width: 95%;
  height: 'fit-content';
  background-color: #fff;
  border-radius: 18px;
  border: 1.4px solid #c0c0c0;
  padding-bottom: 16px;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 330px;
    min-width: 330px;
  }
`

const StyledImageContainer = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  margin-bottom: 16px;
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

const StyledTitle = styled.p`
  font-size: 18px;
  font-family: 'Roboto_600Bold';
  margin: 0;
  padding-left: 16px;
  padding-right: 16px;
`

const StyledDescription = styled.p`
  font-size: 14px;
  font-family: 'Roboto_400Regular';
  margin: 0;
  padding-left: 16px;
  padding-right: 16px;
  color: #6e6f71;
`

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
`

const StyledFooterText = styled.p`
  font-size: 12px;

  color: #6e6f71;
  margin: 0;
`
