import React, { useState } from 'react'
import { PaystackButton } from 'react-paystack'
import { useSelector } from 'react-redux'

const Paystack = () => {
    const publicKey = process.env.API_KEY
        // const amount = 1000000 // Remember, set in kobo!
        const [email, setEmail] = useState("")
        const [name, setName] = useState("")
        const [phone, setPhone] = useState("")
        const amount = useSelector((state) => state.cart.cartTotalAmount)
        console.log(amount);
        
    const componentProps = {
        email,
        amount: (amount * 100),
        currency: 'GHS',
        metadata: {
          name,
          phone,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
          alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("Wait! You need this oil, don't go!!!!"),
      }

  return (
    <>
        <div className="checkout-form p-5 mt-5">
            <div className="checkout-field">
                <label>Name</label>
                <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="checkout-field">
                <label>Email</label>
                <input
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="checkout-field">
                <label>Phone</label>
                <input
                type="text"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                />
            </div>
        <PaystackButton className="paystack-button" {...componentProps} />
        </div>
      
    </>
  )
}

export default Paystack
