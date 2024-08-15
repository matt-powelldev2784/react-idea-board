import styled from 'styled-components'
import { NavigationBar } from './components/NavigationBar/NavigationBar'

function App() {
  return (
    <Main>
      <NavigationBar />
    </Main>
  )
}

export default App

const Main = styled.body`
  position: relative;
  width: 100%;
`
