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
    const cartItems = useSelector((state) => state.cart.cartItems)

    const handleCart = () => {
      const newItem = {
        name: products.name,
        id: products.id,
        price: products.price,
        imgUrl: products.imgUrl
      }
      const existingItem = cartItems.find((item) => item.id === newItem.id)
      if(existingItem) {
        alert("Item already exist in Cart")
      } else {
        dispatch(addToCart(newItem))
      }
    }

  return (
    <div>
        <Navbar />

        <Container className='p-5'>
            <Row>
                <div className='col-md-6 col-lg-4 p-5'>
                  <img className='rounded-2' src={products.imgUrl} alt="" />  
                </div>

                <div className='col-sm-12 col-md-6 col-lg-7'>
                    <div className='p-5'>
                        <h3 className='fw-bold'>{products.name}</h3>
                        <p>{products.description}</p>
                        <h5 className='fw-bold'>${products.price}</h5>
                        <div className="d-grid pt-2">
                            <Button 
                              onClick={handleCart} 
                              style={{backgroundColor : "#001066"}} 
                              size="lg">
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </Row>

        </Container>
      
    </div>
  )
}

export default DetailsPage