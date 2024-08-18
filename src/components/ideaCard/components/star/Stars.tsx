import styled from 'styled-components'

interface StarProps {
  numberOfStars: number
  lastUpdated: string
}

export const Stars = ({ numberOfStars, lastUpdated }: StarProps) => {
  const numberOfStarsArray = Array.from(Array(numberOfStars).keys())

  return (
    <div>
      {numberOfStarsArray.map((_, i) => (
        <StyledStar key={i} data-testid={`stars-${i}${lastUpdated}`} />
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
