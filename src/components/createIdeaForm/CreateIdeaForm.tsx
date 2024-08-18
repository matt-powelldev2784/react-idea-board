import styled from 'styled-components'
import { useFormik } from 'formik'
// import useCreateIdeaFormik from './hooks/useCreateIdeaFormik'
import { LightBulbOutline } from '../../assets/images/svg'

export const CreateIdeaForm = () => {
  // const formik = useCreateIdeaFormik()

  const formik = useFormik({
    initialValues: {
      email: '',
    },

    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <StyledContainer>
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledImage as={LightBulbOutline} />
        <label htmlFor="email">Email Address</label>

        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <button type="submit">Submit</button>
      </StyledForm>
    </StyledContainer>
  )
}

const StyledContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

// const StyledBackground = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
// `

const StyledForm = styled.form`
  width: 400px;
  padding: 20px;
  margin: 50px auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

const StyledImage = styled.div`
  width: 150px;
  height: 150px;
  padding: 20px;
`
