import React from 'react'
import Navbar from '../Components/Navbar'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart, removeFromCart } from '../CarttSlice';
import { Link, useNavigate } from 'react-router-dom';


function CartPage() {
    const navigate = useNavigate()
    const itemsList = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch()
    let total = 0

    itemsList.forEach(item => {
        total += item.totalPrice
    })

    const addItems = (id) => {
        const item = itemsList.find(item => item.id === id)
        dispatch(addToCart(item))
    }

    const removeItem = (id) => {
        dispatch(removeFromCart(id))
    }

    const handleDelete = (id) => {
        dispatch(deleteFromCart(id))
    }

    const handleCheckout = () => {
        alert("Kindly Place an Order. No items in the cart.")
        navigate('/')
    }


  return (
    <>
        {/* <Navbar /> */}

        <div className='p-4'>            
        <div className='mt-5 p-5' style={{backgroundColor: "#F5F5F5"}}>
            <h1 className=''>Cart</h1>
            <div className='d-none d-sm-block'>
                <div className='d-flex justify-content-around border-5 border-bottom'>
                    <div className='col'>Product</div>
                    <div className='col'>Price</div>
                    <div className='col'>Quantity</div>
                    <div className='col'>Total</div>
                    <div className='col invisible'>5</div>
                </div>
                {itemsList.map((item) => (
                <div key={item.id} className='d-flex justify-content-around mt-4'>
                    <div className='col d-flex'>
                        <img className='cart-image' src={item.imgUrl} />
                        <p className='px-3'>{item.name}</p>
                    </div>
                    <div className='col'>
                        ${item.price}
                    </div>
                    <div className='col'>
                        <div className="btn-group" role="group" aria-label="Second group">
                            <button onClick={() => removeItem(item.id)} className="btn">-</button>
                            <button className="btn">{item.quantity}</button>
                            <button onClick={() => addItems(item.id)} type="button" className="btn ">+</button>
                        </div>
                    </div>
                    <div className='col'>
                        ${item.totalPrice}
                    </div>
                    <div className='col'>
                        <Button onClick={() => handleDelete(item.id)} variant="danger" size="sm">
                                Delete
                        </Button>
                    </div>
                </div>
             ))}
             </div>
             
             <div className='d-block d-sm-none mt-5'>
             {itemsList.map((item) => (
                <div key={item.id} className="col">
                    <div className="col-sm-6">
                        <div className='d-flex justify-content-between border border-4 p-2'>
                            <div><h1>Product</h1></div>
                            <div className='d-flex'>
                                <img className='cart-image' src={item.imgUrl} />
                                <p className='px-3'>{item.name}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className='d-flex justify-content-between border-4 border p-2'>
                            <div><h1>Price</h1></div>
                            <div>${item.price}</div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className='d-flex justify-content-between border-4 border p-2'>
                            <div><h1>Quantity</h1></div>
                            <div className="btn-group" role="group" aria-label="Second group">
                                <button onClick={() => removeItem(item.id)} className="btn">-</button>
                                <button className="btn">{item.quantity}</button>
                                <button onClick={() => addItems(item.id)} type="button" className="btn ">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className='d-flex justify-content-between border-4 border p-2'>
                            <div><h1>Total</h1></div>
                            <div>${item.totalPrice}</div>
                        </div>
                    </div>

                    <div className="col-sm-6 pt-5">
                        <div className='d-flex justify-content-end'>
                        <Button onClick={() => handleDelete(item.id)} variant="danger" size="sm">
                                Delete
                        </Button>
                        </div>
                    </div>
                </div>
             ))}

            </div>
        </div>
        </div>

        <div className='p-5 me-auto col-md-3 offset-md-7 '>
            <div className='d-flex justify-content-end'>
                <p>Total Price : ${total}</p>
            </div>
            
            <div className='d-flex justify-content-end'>
            {itemsList.length > 0 ? (
                <Button as={Link} to='/thanks' style={{backgroundColor: "#001066"}} size="sm">
                    Checkout
                </Button>
            ) : (
                <Button onClick={handleCheckout} style={{backgroundColor: "#001066"}} size="sm">
                    Place Order
                </Button>
            )}
            </div>
        </div>
      
    </>
  )
}

export default CartPage
