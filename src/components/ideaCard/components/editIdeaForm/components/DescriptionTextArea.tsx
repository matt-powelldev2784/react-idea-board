import styled from 'styled-components'
import { IdeaCardT } from '../../../../../types'
import { useState } from 'react'
import { FormikProps } from 'formik'

interface DescriptionTextAreaProps {
  idea: IdeaCardT
  formik: FormikProps<any>
}

export const DescriptionTextArea = ({
  idea,
  formik,
}: DescriptionTextAreaProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false)
    formik.handleBlur(e)
  }

  const isError =
    formik.touched.description && formik.errors.description && !isFocused
      ? true
      : false

  return (
    <StyledDescriptionTextArea
      id={idea.key}
      name={'description'}
      onChange={formik.handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      value={formik.values.description as any}
      $isError={isError}
      placeholder="Description"
    />
  )
}

const StyledDescriptionTextArea = styled.textarea<{ $isError: boolean }>`
  position: relative;
  height: 110px;
  font-size: 14px;
  font-family: 'Roboto_400Regular';
  padding-left: 4px;
  margin: 0;
  margin-right: 52px;
  margin-left: 16px;
  padding-right: 16px;
  color: #6e6f71;
  border: 1px solid
    ${({ theme, $isError }) => ($isError ? 'red' : theme.colors.boxOutlineGrey)};

  &:focus {
    border-color: ${({ theme, $isError }) =>
      $isError ? 'red' : theme.colors.boxOutlineGrey};
    outline: none;
  }
`
