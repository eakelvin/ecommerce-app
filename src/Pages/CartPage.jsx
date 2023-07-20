import React from 'react'
import Navbar from '../Components/Navbar'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart, removeFromCart } from '../CarttSlice';
import { Link } from 'react-router-dom';


function CartPage() {
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


  return (
    <>
        <Navbar />

        <div style={{backgroundColor: "#F5F5F5"}} className='w-75 mt-5 mx-auto'>
            <div className='p-5'>
                <h1>Cart</h1>
            
                <div className='p-5'>
                <table className="table table-secondary">
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quanity</th>
                        <th scope="col">Total</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                {itemsList.map((item) => (
                    <tbody key={item.id} className='table-group-divider'>
                        <tr>
                        <th scope="row"></th>
                        <td className='d-flex'>
                            <img className='cart-image' src={item.imgUrl} />
                            <p className='px-3'>{item.name}</p>
                        </td>
                        <td>${item.price}</td>
                        <td>
                            <div className="btn-group me-2" role="group" aria-label="Second group">
                                <button onClick={() => removeItem(item.id)} className="btn">-</button>
                                <button className="btn">{item.quantity}</button>
                                <button onClick={() => addItems(item.id)} type="button" className="btn ">+</button>
                            </div>
                        </td>
                        <td>${item.totalPrice}</td>
                        <td>
                            <Button onClick={() => handleDelete(item.id)} variant="danger" size="sm">
                                Delete
                            </Button>
                        </td>
                        </tr>
                    </tbody>
                ))}
                </table>
                </div>
            
            </div>
        </div>

        <div className='p-5 me-auto col-md-3 offset-md-7 '>
            <div className='d-flex justify-content-end'>
                <p>Total Price : ${total}</p>
            </div>
            
            <div className='d-flex justify-content-end'>
                <Button as={Link} to='/thanks' style={{backgroundColor: "#001066"}} size="sm">
                    Checkout
                </Button>
            </div>
        </div>
      
    </>
  )
}

export default CartPage
