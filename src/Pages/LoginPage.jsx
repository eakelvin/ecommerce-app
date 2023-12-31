import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import * as Yup from 'yup'
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';


function Login() {
  const navigate = useNavigate()

  return (
    <>
    
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid p-3">
        <Link style={{textDecoration: 'none'}} to="/">
          {/* <span className="ms-3">AzubiShop</span> */}
          <span className="">
            <img src="/Paperbag.png" alt="Logo" className="d-inline-block" />
              AzubiShop
          </span>
        </Link>

          <div className='d-flex justify-content-end'>
            <div className='mx-3 mt-2'>
                <p className='fs-6 text-center'>New to AzubiShop?</p>
            </div>

            <div className="">
              <Link to="/signup">
                <Button className="text-dark" style={{backgroundColor: "#F5F5F5"}} size="lg">
                  Create an Account
                </Button>
              </Link>
            </div>
          </div>

          </div>
      </nav>

      <div className='mt-5 pt-5'>
        <div className='d-flex justify-content-center'>
          <h5 className='fw-bold'>Sign in</h5>
        </div>
        
        <div className='mt-5'>
        <Formik 
          initialValues = {{
            email: "",
            password: ""
          }}
          validationSchema = {
            Yup.object({
              email: Yup.string().email("Invalid Email Address"),
              password: Yup.string()
                .required("PASSWORD IS REQUIRED!")
                .min(8, 'Password must be at least 8 characters')
            })
          }
          onSubmit = { async (values, {setFieldError}) => {
            // const storedInfo = JSON.parse(localStorage.getItem("values"))
            // if(values.email === storedInfo.email && values.password === storedInfo.password) {
            //   // localStorage.setItem('values', true)
            //   navigate('/')
            // } else {
            //   setErrors({ password: 'Invalid Email or Password. Please try again'})
            // }
            
            // console.log(values);
            try {
              await signInWithEmailAndPassword(auth, values.email, values.password)
              navigate('/')
            } catch (error) {
              if (error.code == 'auth/wrong-password') {
                setFieldError('password', 'Invalid Email or Password')
              }
              if(error.code == 'auth/user-not-found') {
                setFieldError('password', 'User does not exist, please create an account')
              }
              console.log(error);
            }

          }}
        >
        <FormikForm>
          <div className='col-7 col-lg-4 mx-auto'>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Field required className='form-control p-2' style={{backgroundColor: "#F5F5F5"}} 
                            type="email"
                            name='email' 
                            />
                  <ErrorMessage component='label' className='form-label text-danger fw-bold' name='email' />
            </Form.Group>
          </div>

          <div className='col-7 col-lg-4 mx-auto'>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Field className='form-control p-2' style={{backgroundColor: "#F5F5F5"}} 
                          type="password"
                          name='password'
                          />
                  <ErrorMessage component='label' className='form-label text-danger' name='password' />
          </Form.Group>
          </div>

          <div className='col-7 col-lg-4 mx-auto mt-4'>
          <div className='d-grid gap-2'>
          <Button style={{backgroundColor: "#001066"}} type="submit">
            Sign In
          </Button>
          </div>
          </div>

        </FormikForm>
        </Formik>
        </div>

        </div>

    </>
  )
}

export default Login
