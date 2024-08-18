import styled from 'styled-components'

export const Footer = () => {
  return (
    <StylefFooter>
      <StyledTextContainer>
        <StyledTitle>ID:B</StyledTitle>
        <StyledText>1 London Road, London, SW1 1AA</StyledText>
        <StyledLink href={'mailto:idb-support@gmail.com'}>
          Email : idb-support@gmail.com
        </StyledLink>
      </StyledTextContainer>
    </StylefFooter>
  )
}

const StylefFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  width: 100%;
  height: 200px;
`

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 5px;
  width: 100%;
  height: 100%;
  padding-top: 20px;
  padding-right: 30px;
`

const StyledTitle = styled.p`
  color: ${({ theme }) => theme.colors.tertiaryLightBlue};
  font-size: 24px;
  font-family: 'Roboto_600Bold';
  text-align: center;
  max-width: 800px;
`

const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.tertiaryLightBlue};
  font-size: 16px;
  text-align: center;
  max-width: 800px;
`

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.secondaryWhite};
  font-size: 20px;
  text-align: center;
  max-width: 800px;
  margin-top: 10px;
  font-family: 'Roboto_600Bold';
  text-decoration: none;
  cursor: pointer;
`
