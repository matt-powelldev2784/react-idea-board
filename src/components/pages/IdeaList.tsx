import styled from 'styled-components'
import { Ideas } from '../index'

export const IdeaList = () => {
  return (
    <StyledMain>
      <Ideas />
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
