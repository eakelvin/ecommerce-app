import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';

function Signup() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: ""
        }, 
        onSubmit:(values) => {
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
            <Form onSubmit={formik.handleSubmit}>
                <Col sm={3} className='mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control required className='p-2' style={{backgroundColor: "#F5F5F5"}} 
                                type="email"
                                name='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                    </Form.Group>
                </Col>

                <Col sm={3} className='mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required className='p-2' style={{backgroundColor: "#F5F5F5"}} 
                                type="password"
                                name='password'
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}/>
                </Form.Group>
                </Col>

                <Col sm={3} className='mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control required className='p-2' style={{backgroundColor: "#F5F5F5"}} 
                                type="password"
                                name='confirmPassword'
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                />
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

export default Signup
