import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface ButtonProps {
  text: string
  navigateTo: string
  bgColor?: string
  textColor?: string
}

export const CustomButton = ({
  text,
  navigateTo,
  bgColor,
  textColor,
}: ButtonProps) => {
  return (
    <StyledButton bgColor={bgColor} textColor={textColor}>
      <StyledNavLink to={navigateTo}>{text}</StyledNavLink>
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
`

const StyledNavLink = styled(Link)`
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
