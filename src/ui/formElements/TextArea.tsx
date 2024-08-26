import { FormikProps } from 'formik'
import { useRef, useState } from 'react'
import styled from 'styled-components'

interface InputProps {
  formik: FormikProps<any>
  id: string
  name: string
  labelText: string
}

export const TextArea = ({ formik, id, name, labelText }: InputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [characterCount, setCharacterCount] = useState<number>(0)
  const characterCountRef = useRef<HTMLTextAreaElement>(null)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false)
    formik.handleBlur(e)
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (characterCountRef.current) {
      setCharacterCount(characterCountRef.current.value.length)
    }
    formik.handleChange(e)
  }

  const isError =
    formik.touched[name] && formik.errors[name] && !isFocused ? true : false

  return (
    <StyledContainer>
      <StyledLabel htmlFor={id}>{labelText.toUpperCase()}</StyledLabel>
      <StyleCharacterCount>
        {characterCount > 120 ? `${characterCount} / 140` : null}
      </StyleCharacterCount>

      <StyledTextArea
        id={id}
        name={name}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={formik.values[name] as any}
        $isError={isError}
        ref={characterCountRef}
        placeholder="Enter your idea here (max 140 characters)"
      />

      {isError ? (
        <ErrorText>{formik.errors[name]?.toString()}</ErrorText>
      ) : null}
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 170px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    height: 130px;
  }
`

const StyledLabel = styled.label`
  margin: 0;
  padding-left: 2px;
  color: ${({ theme }) => theme.colors.primaryBlue};
  font-size: 14px;
  font-family: 'Roboto_600Bold';
`

const StyleCharacterCount = styled.p`
  position: absolute;
  right: 5px;
  top: 3px;
  color: grey;
  padding-left: 2px;
  font-size: 14px;
  text-align: right;
  font-size: 12px;
`

const StyledTextArea = styled.textarea<{ $isError: boolean }>`
  width: 100%;
  height: 120px;
  padding: 10px;
  border: 1px solid
    ${({ theme, $isError }) => ($isError ? 'red' : theme.colors.boxOutlineGrey)};
  border-radius: 4px;
  margin-top: 4px;
  font-family: 'Roboto_400Regular';
  font-size: 14px;

  &:focus {
    border-color: ${({ theme, $isError }) =>
      $isError ? 'red' : theme.colors.black};
    outline: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    height: 80px;
  }
`

const ErrorText = styled.p`
  color: red;
  margin: 0;
  padding-left: 2px;
  font-size: 14px;
  text-align: center;
`
