import styled from 'styled-components'

interface StarProps {
  numberOfStars: number
}

export const Stars = ({ numberOfStars }: StarProps) => {
  const numberOfStarsArray = Array.from({ length: numberOfStars }, (_, i) => i)
  console.log('numberOfStarsArray', numberOfStarsArray)

  return (
    <div>
      {numberOfStarsArray.map((_, i) => (
        <StyledStar key={i} />
      ))}
    </div>
  )
}

const StyledStar = styled.div`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`
