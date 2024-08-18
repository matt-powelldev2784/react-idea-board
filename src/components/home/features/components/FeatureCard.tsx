import styled from 'styled-components'
import React from 'react'

interface FeatureCardProps {
  id: number
  svgImage: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}

export const FeatureCard = ({
  id,
  svgImage,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <StyledCard>
      <StyledImage data-testid={`mock-svg${id}`} as={svgImage} />
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledCard>
  )
}

const StyledCard = styled.article`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0px;
  padding-bottom: 16px;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 303px;
    min-width: 330px;
  }
`

const StyledImage = styled.svg`
  width: 110px;
  height: 93px;
  padding: 10px;
`

const StyledTitle = styled.h3`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.tertiaryLightBlue};
  font-weight: 600;
  text-align: center;
`

const StyledDescription = styled.p`
  width: 95%;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primaryDarkBlue};
  text-align: center;
  padding: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 100%;
    padding: 0 20px;
  }
`
