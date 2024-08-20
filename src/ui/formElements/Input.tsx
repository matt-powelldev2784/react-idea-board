import { FormikProps } from 'formik'
import { useState } from 'react'
import styled from 'styled-components'

interface InputProps {
  formik: FormikProps<any>
  id: string
  name: string
  type: string
  labelText: string
}

export const Input = ({ formik, id, name, type, labelText }: InputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    formik.handleBlur(e)
  }

  const isError =
    formik.touched[name] && formik.errors[name] && !isFocused ? true : false

  return (
    <StyledContainer>
      <StyledLabel htmlFor={id}>{labelText.toUpperCase()}</StyledLabel>

      <StyledInput
        id={id}
        name={name}
        type={type}
        onChange={formik.handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={formik.values[name] as any}
        $isError={isError}
      />

      {isError ? (
        <ErrorText>{formik.errors[name]?.toString()}</ErrorText>
      ) : null}
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 85px;
`

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.textGrey};
  margin: 0;
  padding-left: 2px;
  color: ${({ theme }) => theme.colors.primaryBlue};
  font-size: 14px;
  font-family: 'Roboto_600Bold';
`

const StyledInput = styled.input<{ $isError: boolean }>`
  width: 100%;
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
`

const ErrorText = styled.p`
  color: red;
  margin: 0;
  padding-left: 2px;
  font-size: 14px;
  text-align: center;
`
