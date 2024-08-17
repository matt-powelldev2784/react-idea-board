import styled from 'styled-components'
import heroImage from '../../assets/images/bitmap/light_bulb_blue_bg.jpg'

export const Home = () => {
  return (
    <StyledContainer>
      <StyledImage src={heroImage} alt="Albert Einstien" />
    </StyledContainer>
  )
}

const StyledContainer = styled.section`
  width: 100%;
  max-height: 600px;
  overflow: hidden;
  border: 1px solid green;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid red;
`
