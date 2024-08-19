import styled from 'styled-components'

interface ButtonProps {
  text: string
  onClick: () => void
  disabled?: boolean
}

export const SubmitButton = ({ text, onClick, disabled }: ButtonProps) => {
  return (
    <StyledButton disabled={disabled}>
      <StyledLink onClick={onClick}>{text}</StyledLink>
    </StyledButton>
  )
}
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.buttonPrimary};
  color: ${({ theme }) => theme.colors.secondaryWhite};
  font-size: 14px;
  font-family: 'Roboto_600Bold';
  letter-spacing: 0.51px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
`

const StyledLink = styled.a`
  width: 100%;
  height: 100%;
  text-decoration: none;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  decoration: none;
  padding: 10px 20px;

  color: ${({ theme }) => theme.colors.secondaryWhite};

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 12px 30px;
    font-size: 16px;
  }
`
