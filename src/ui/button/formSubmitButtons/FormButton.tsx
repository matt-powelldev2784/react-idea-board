import styled from 'styled-components'

interface ButtonProps {
  text: string
  disabled?: boolean
  'data-testid'?: string
  type: 'submit' | 'reset'
}

export const FormButton = ({
  text,
  disabled,
  type,
  'data-testid': dataTestId,
}: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} data-testid={dataTestId} type={type}>
      {text}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  decoration: none;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.buttonPrimary};
  color: ${({ theme }) => theme.colors.secondaryWhite};

  font-size: 14px;
  font-family: 'Roboto_600Bold';
  letter-spacing: 0.51px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  padding: 10px 20px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 12px 30px;
    font-size: 16px;
  }
`
