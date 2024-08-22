import styled from 'styled-components'

export const Blank = () => {
  return (
    <StyledMain>
      <BlankPage />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const BlankPage = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundLightBlue};
  min-height: 100vh;
  padding-bottom: 60px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    padding-right: 20px;
  }
`
