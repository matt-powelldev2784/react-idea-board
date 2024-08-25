import styled from 'styled-components'

interface ButtonProps {
  text: string
  disabled?: boolean
  'data-testid'?: string
  type: 'submit' | 'reset'
  resetFormFunction?: () => void
}

export const FormButton = ({
  text,
  disabled,
  type,
  resetFormFunction,
  'data-testid': dataTestId,
}: ButtonProps) => {
  const handleResetForm = () => {
    if (type === 'reset' && resetFormFunction) {
      resetFormFunction()
    }
  }

  return (
    <StyledButton
      disabled={disabled}
      data-testid={dataTestId}
      type={type}
      onClick={handleResetForm}
    >
      {text}
    </StyledButton>
  )
}

const StyledButton = styled.button<{ type: 'submit' | 'reset' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  decoration: none;
  border-radius: 5px;
  background-color: ${({ theme, type }) =>
    type === 'submit'
      ? theme.colors.buttonPrimary
      : theme.colors.buttonSecondary};
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
