import React from 'react'
import data from '../data'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../CarttSlice'


function DetailsPage() {
    const {id} = useParams()
    const products = data.find(prod => prod.id === id)
    const dispatch = useDispatch()
   

    const handleCart = () => {
      dispatch(addToCart({
        name: products.name,
        id: products.id,
        price: products.price,
        imgUrl: products.imgUrl
      }))
    }

  return (
    <div>
        <Navbar />

        <Container className='p-5 mt-5'>
            <Row>
                <Col xs={3}>
                  <img className='rounded-2' src={products.imgUrl} alt="" />  
                </Col>

                <Col>
                    <div className='p-5'>
                        <h3 className='fw-bold'>{products.name}</h3>
                        <p>{products.description}</p>
                        <h5 className='fw-bold'>${products.price}</h5>
                        <div className="d-grid">
                            <Button 
                              onClick={handleCart} 
                              style={{backgroundColor : "#001066"}} 
                              size="lg">
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>

        </Container>
      
    </div>
  )
}

export default DetailsPage