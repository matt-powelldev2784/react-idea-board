import styled from 'styled-components'
import heroImage from '../../../assets/images/bitmap/light_bulb_blue_bg.jpg'
import smallLighBulb from '../../../assets/images/bitmap/light_bulb_no_bg_sm.png'

export const Hero = () => {
  return (
    <StyledContainer>
      <StyledBackgroundImage src={heroImage} alt="Light bulb background" />

      <StyledTextContainer>
        <StyledLightBulbImage src={smallLighBulb} alt="Light bulb" />
        <StyledTitle>Welcome to ID:B</StyledTitle>
        <StyledText>
          The ultimate idea board application, designed to spark creativity and
          innovation. Whether you&#39;re brainstorming your next big project or
          organizing your thoughts, ID:B offers a seamless and intuitive
          platform to capture, refine, and execute your ideas.
        </StyledText>
      </StyledTextContainer>
    </StyledContainer>
  )
}

const StyledContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 320px;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    position: relative;
    justify-content: flex-start;
    width: 100%;
    height: 600px;
    overflow: hidden;
  }
`

const StyledBackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 600px;
  object-fit: cover;
  background-color: #08346f;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    position: absolute;
    width: 100%;
    height: 100%;
    min-height: 600px;
    object-fit: cover;
  }
`

const StyledLightBulbImage = styled.img`
  display: relative;
  width: 75px;
  height: 110px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: none;
  }
`

const StyledTextContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    left: 40px;
    width: 55%;
    height: 100%;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
  }
`

const StyledTitle = styled.h1`
  width: 95%;
  font-size: 30px;
  font-family: 'Roboto_600Bold';
  color: ${({ theme }) => theme.colors.tertiaryLightBlue};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 100%;
    font-size: 40px;
    font-family: 'Roboto_600Bold';
    color: ${({ theme }) => theme.colors.tertiaryLightBlue};
    text-align: left;
  }
`
const StyledText = styled.p`
  width: 90%;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.secondaryWhite};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 98%;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.secondaryWhite};
    text-align: left;
  }
`
