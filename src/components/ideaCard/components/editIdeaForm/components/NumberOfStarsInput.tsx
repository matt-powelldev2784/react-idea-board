import { FormikProps } from 'formik'
import { IdeaCardT } from '../../../../../types'
import styled from 'styled-components'
import { useState } from 'react'

interface TitleInputProps {
  idea: IdeaCardT
  formik: FormikProps<any>
}

export const NumberOfStarsInput = ({ idea, formik }: TitleInputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    formik.handleBlur(e)
  }

  const isError =
    formik.touched.numberOfStars && formik.errors.numberOfStars && !isFocused
      ? true
      : false

  return (
    <StyledStarsInput
      id={idea.key}
      name={'numberOfStars'}
      type={'number'}
      onChange={formik.handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      value={formik.values.numberOfStars as any}
      $isError={isError}
    />
  )
}

const StyledStarsInput = styled.input<{ $isError: boolean }>`
  font-size: 18px;
  font-family: 'Roboto_600Bold';
  margin: 0;
  margin-left: 16px;
  padding-left: 8px;
  padding-right: 16px;
  margin-right: 52px;
  border: 1px solid
    ${({ theme, $isError }) => ($isError ? 'red' : theme.colors.boxOutlineGrey)};

  &:focus {
    border-color: ${({ theme, $isError }) =>
      $isError ? 'red' : theme.colors.boxOutlineGrey};
    outline: none;
  }
`
