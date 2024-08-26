import styled from 'styled-components'
import { Stars } from './components/star/Stars'
import { useState } from 'react'
import { EditIcon, BinIcon } from '../../assets/images/svg'
import childWithIdeaImage from '../../assets/images/bitmap/kid_idea.png'
import { IdeaCardT } from '../../types'
import { handleEditIdea } from './utils/handleEditIdea'
import { useNavigateToError } from './hooks/useNavigateToError'
import { EditIdeaForm } from './components/editIdeaForm/EditIdeaForm'
import { useHandleDeleteIdea } from './hooks/useHandleDeleteIdea'

interface IdeaCardProps {
  id: string
  title: string
  description: string
  lastUpdated: string
  numberOfStars: number
}

export const IdeaCardWithForm = ({
  id,
  title,
  description,
  lastUpdated,
  numberOfStars,
}: IdeaCardProps) => {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false)
  const [idea, setIdea] = useState<IdeaCardT | null>(null)
  const [isError, setIsError] = useState<boolean>(false)
  useNavigateToError(isError)
  const handleEditIdeaPress = () =>
    handleEditIdea({ id, setIsFormVisible, setIdea, setIsError })
  const { handleDeletePress } = useHandleDeleteIdea(id)

  return (
    <StyledArticle>
      <StyledImageContainer>
        <StyledDeleteButton onClick={handleDeletePress}>
          <StyledDeleteIcon as={BinIcon} />
        </StyledDeleteButton>

        <StyledImage src={childWithIdeaImage} alt="Child with idea" />
      </StyledImageContainer>

      {!isFormVisible ? (
        <>
          <StyledTextContainer>
            <StyledEditButton onClick={handleEditIdeaPress}>
              <StyledEditIcon as={EditIcon} />
            </StyledEditButton>

            <StyledTitle data-testid={'card-title'}>{title}</StyledTitle>

            <StyledDescription>{description}</StyledDescription>
          </StyledTextContainer>

          <StyledFooterContainer>
            <StyledFooterText>Last Updated: {lastUpdated}</StyledFooterText>
            <Stars numberOfStars={numberOfStars} lastUpdated={lastUpdated} />
          </StyledFooterContainer>
        </>
      ) : null}

      {isFormVisible && idea ? <EditIdeaForm idea={idea} /> : null}
    </StyledArticle>
  )
}

const StyledArticle = styled.article`
  position: relative;
  width: 95%;
  height: fit-content;
  background-color: #fff;
  border-radius: 18px;
  border: 1.4px solid ${({ theme }) => theme.colors.boxOutlineGrey};
  padding-bottom: 16px;
  overflow: hidden;
  max-width: 800px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
  }
`

const StyledImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(255, 0, 150, 0.5),
    rgba(0, 204, 255, 0.5)
  );
  z-index: 0;
`
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const StyledDeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 999;
`
const StyledDeleteIcon = styled.svg`
  width: 25px;
  height: 25px;
  margin-top: 10px;
  margin-right: 12px;
  z-index: 999;
  opacity: 0.8;
`

const StyledTextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 180px;
  margin-top: 12px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    height: 120px;
  }
`

const StyledEditButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 999;
`

const StyledEditIcon = styled.svg`
  width: 35px;
  height: 35px;
  margin-right: 12px;
`

const StyledTitle = styled.p`
  font-size: 18px;
  font-family: 'Roboto_600Bold';
  margin: 0;
  margin-left: 16px;
  padding-right: 16px;
  margin-right: 52px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`

const StyledDescription = styled.p`
  position: relative;
  font-size: 14px;
  font-family: 'Roboto_400Regular';
  margin: 0;
  margin-right: 52px;
  margin-top: 4px;
  margin-left: 16px;
  padding-right: 16px;
  color: #6e6f71;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  white-space: normal;
  word-break: break-word;
`

const StyledFooterContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
`

const StyledFooterText = styled.p`
  font-size: 10px;
  color: #6e6f71;
  margin: 0;
`
