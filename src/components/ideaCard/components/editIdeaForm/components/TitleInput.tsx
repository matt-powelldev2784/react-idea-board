import { FormikProps } from 'formik'
import { IdeaCardT } from '../../../../../types'
import styled from 'styled-components'
import { useState } from 'react'

interface TitleInputProps {
  idea: IdeaCardT
  formik: FormikProps<any>
}

export const TitleInput = ({ idea, formik }: TitleInputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    formik.handleBlur(e)
  }

  const isError =
    formik.touched.title && formik.errors.title && !isFocused ? true : false

  return (
    <StyledTitleInput
      id={idea.key}
      name={'title'}
      type={'text'}
      onChange={formik.handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      value={formik.values.title as any}
      $isError={isError}
    />
  )
}

const StyledTitleInput = styled.input<{ $isError: boolean }>`
  font-size: 18px;
  font-family: 'Roboto_600Bold';
  margin: 0;
  margin-left: 16px;
  padding-right: 16px;
  margin-right: 52px;

  &:focus {
    border-color: ${({ theme, $isError }) =>
      $isError ? 'red' : theme.colors.black};
    outline: none;
  }
`
