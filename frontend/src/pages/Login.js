import React from 'react'
import { useFormik } from "formik";

const Login = () => {

  const formik = useFormik({
    initialValues: {
      email:  '',
      password:  '',
    },
    onSubmit: (values) => {
      console.log('values', values);
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
    </form>
  )
}

export default Login;