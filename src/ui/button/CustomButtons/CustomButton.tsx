import styled from 'styled-components'

interface ButtonProps {
  text: string
  onClick: () => void
  bgColor?: string
  textColor?: string
}

export const CustomButton = ({
  text,
  onClick,
  bgColor,
  textColor,
}: ButtonProps) => {
  return (
    <StyledButton bgColor={bgColor} textColor={textColor} onClick={onClick}>
      {text}
    </StyledButton>
  )
}
const StyledButton = styled.button<{ bgColor?: string; textColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme, bgColor }) =>
    bgColor || theme.colors.buttonPrimary};
  color: ${({ theme, textColor }) => textColor || theme.colors.secondaryWhite};
  font-size: 14px;
  font-family: 'Roboto_600Bold';
  letter-spacing: 0.51px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  padding: 10px 20px;
`
