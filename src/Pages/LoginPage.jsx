import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import * as Yup from 'yup'
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';


function Login() {
  const navigate = useNavigate()

  return (
    <>
    
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid p-3">
        <Link style={{textDecoration: 'none'}} to="/">
          <span className="ms-3">AzubiShop</span>
        </Link>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button> */}

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
          onSubmit = {(values, {setErrors, setSubmitting}) => {
            const storedInfo = JSON.parse(localStorage.getItem("values"))
            if(values.email === storedInfo.email && values.password === storedInfo.password) {
              navigate('/')
            } else {
              setErrors({ password: 'Invalid Email or Password. Please try again'})
            }
            
            // console.log(values);
          }}
        >
        <FormikForm>
          <Col sm={3} className='mx-auto'>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Field required className='form-control p-2' style={{backgroundColor: "#F5F5F5"}} 
                            type="email"
                            name='email' 
                            />
                  <ErrorMessage component='label' className='form-label text-danger fw-bold' name='email' />
            </Form.Group>
          </Col>

          <Col sm={3} className='mx-auto'>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Field className='form-control p-2' style={{backgroundColor: "#F5F5F5"}} 
                          type="password"
                          name='password'
                          />
                  <ErrorMessage component='label' className='form-label text-danger' name='password' />
          </Form.Group>
          </Col>

          <Col sm={3} className='mx-auto mt-4'>
          <div className='d-grid gap-2'>
          <Button style={{backgroundColor: "#001066"}} type="submit">
            Sign In
          </Button>
          </div>
          </Col>

        </FormikForm>
        </Formik>
        </div>

        </div>

    </>
  )
}

export default Login
