import React from 'react'
import { useFormik } from "formik";
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
  const { signup, error, isLoading} = useSignup();

  const formik = useFormik({
    initialValues: {
      email:  '',
      password:  '',
    },
    onSubmit: ({email, password}) => {
      signup(email, password)
      console.log('check', error);
    },
  });

  return (
    <form className='signup' onSubmit={formik.handleSubmit}>
      <h3>Sign up</h3>

      <label>Email:</label>
      <input 
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label>Password:</label>
      <input 
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <button>Login</button>
      {error && <div className='error'>{error.data.error}</div>}
      {isLoading&& <div className='error'>loading</div>}
    </form>
  )
}

export default Signup;