import React from 'react'
import Navbar from '../Components/Navbar'
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';


function CartPage() {
    const itemsList = useSelector((state) => state.cart.cartItems)

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
                        <td>
                            <img src="" alt="" />
                            <p>{item.name}</p>
                        </td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.totalPrice}</td>
                        <td>
                            <Button variant="danger" size="sm">
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
                <p>Total Price :</p>
            </div>
            
            <div className='d-flex justify-content-end'>
                <Button style={{backgroundColor: "#001066"}} size="sm">
                    Checkout
                </Button>
            </div>
        </div>
      
    </>
  )
}

export default CartPage
