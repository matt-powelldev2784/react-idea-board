import { ReactComponent as Logo } from './assets/images/idb_logo.svg'
import styled from 'styled-components'


function App() {
  return (
    <div className="App">
      <StyledLogo />
    </div>
  )
}

export default App

const StyledLogo = styled(Logo)`
  width: 180px;
  height: 55px;
  padding: 3px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 210px;
    height: 65px;
    padding: 5px;
  }
`
