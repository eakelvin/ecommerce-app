import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { Formik, Field, Form as FormikForm } from 'formik';


function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email Address").required("REQUIRED"),
      password: Yup.string().required("REQUIRED!")
    }),

    onSubmit: (values) => {
      console.log("onSubmit", values);
    }

  })

   

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
        <Form onSubmit={formik.handleSubmit}>
          <Col sm={3} className='mx-auto'>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control className='p-2' style={{backgroundColor: "#F5F5F5"}} 
                            type="email"
                            name='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} 
                            />
                  <div>{formik.errors.email && formik.touched.email && formik.errors.email}</div>
            </Form.Group>
          </Col>

          <Col sm={3} className='mx-auto'>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control className='p-2' style={{backgroundColor: "#F5F5F5"}} 
                          type="password"
                          name='password'
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          />
                  <div>{formik.errors.password && formik.touched.password && formik.errors.password}</div>
          </Form.Group>
          </Col>

          <Col sm={3} className='mx-auto mt-4'>
          <div className='d-grid gap-2'>
          <Button style={{backgroundColor: "#001066"}} type="submit">
            Sign In
          </Button>
          </div>
          </Col>

        </Form>
        </div>

        </div>

      
      
      
    </>
  )
}

export default Login
