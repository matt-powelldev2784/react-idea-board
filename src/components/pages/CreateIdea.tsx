import { CreateIdeaForm } from '../index'
import styled from 'styled-components'

export const CreateIdea = () => {
  return (
    <StyledMain>
      <CreateIdeaForm />
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
