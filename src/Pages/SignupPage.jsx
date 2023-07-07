import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup'

function Signup() {

  return (
    <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid p-3">
                <Link style={{textDecoration: 'none'}} to="/">
                <span className="ms-3">AzubiShop</span>
                </Link>
               

                <div className='d-flex justify-content-end'>
                    <div className='mx-3 mt-2'>
                        <p className='fs-6 text-center'>Already have an account?</p>
                    </div>

                    <div className="">
                    <Link to="/login">
                        <Button className="text-dark" style={{backgroundColor: "#F5F5F5"}} size="lg">
                        Sign in
                        </Button>
                    </Link>
                    </div>
                </div>

                </div>
        </nav>

        <div className='mt-5 pt-5'>
            <div className='d-flex justify-content-center'>
                <h5 className='fw-bold'>Create an Account</h5>
            </div>
            
            <div className='mt-5'>
            <Formik 
                initialValues={{
                    email:"",
                    password:"",
                    confirmPassword:""
                }}
                validationSchema={
                    Yup.object({
                        // email: Yup.string().required("Required")
                        password: Yup.string().required("Password is Required"),
                        confirmPassword: Yup.string()
                            .required("ConfirmPassword is Required")
                            .oneOf([Yup.ref("password"), null], "Passwords must match!")
                    })
                }
                onSubmit={(values) => {
                    console.log(values);
                }}
            >    
            <FormikForm>
                <Col sm={3} className='mx-auto'>
                    <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Field required className='form-control p-2' style={{backgroundColor: "#F5F5F5"}} 
                                type="email"
                                name='email'
                                // onBlur={formik.handleBlur} 
                            />
                    </Form.Group>
                </Col>

                <Col sm={3} className='mx-auto'>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Field required className='form-control p-2' style={{backgroundColor: "#F5F5F5"}} 
                                type="password"
                                name='password'
                                />
                    <ErrorMessage component="label" className='form-label text-danger' name='password' />
                </Form.Group>
                </Col>

                <Col sm={3} className='mx-auto'>
                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Field required className='form-control p-2' style={{backgroundColor: "#F5F5F5"}} 
                                type="password"
                                name='confirmPassword'
                               
                                />
                    <ErrorMessage name='confirmPassword' component='label' className='form-label text-danger font-bold' />
                </Form.Group>
                </Col>

                <Col sm={3} className='mx-auto mt-4'>
                <div className='d-grid gap-2'>
                <Button style={{backgroundColor: "#001066"}} type="submit">
                    Sign Up
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

export default Signup
