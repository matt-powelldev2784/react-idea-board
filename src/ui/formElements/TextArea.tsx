import { FormikProps } from 'formik'
import { useState } from 'react'
import styled from 'styled-components'

interface InputProps {
  formik: FormikProps<any>
  htmlFor: string
  id: string
  name: string
  labelText: string
}

export const TextArea = ({
  formik,
  htmlFor,
  id,
  name,
  labelText,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false)
    formik.handleBlur(e)
  }

  const isError =
    formik.touched[name] && formik.errors[name] && !isFocused ? true : false

  return (
    <StyledContainer>
      <StyledLabel htmlFor={htmlFor}>{labelText.toUpperCase()}</StyledLabel>

      <StyledTextArea
        id={id}
        name={name}
        onChange={formik.handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={formik.values[name] as any}
        $isError={isError}
      />

      {isError ? <ErrorText>Error</ErrorText> : null}
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 170px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    height: 130px;
  }
`

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.textGrey};
  margin: 0;
  padding-left: 2px;
  color: ${({ theme }) => theme.colors.primaryBlue};
  font-size: 14px;
  font-family: 'Roboto_600Bold';
`

const StyledTextArea = styled.textarea<{ $isError: boolean }>`
  width: 100%;
  height: 120px;
  padding: 10px;
  border: 1px solid
    ${({ theme, $isError }) => ($isError ? 'red' : theme.colors.boxOutlineGrey)};
  border-radius: 4px;
  margin-top: 4px;

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
