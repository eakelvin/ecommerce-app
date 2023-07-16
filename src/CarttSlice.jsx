import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    // cartTotalAmount: 0
    showCart: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload
            const existingItem = state.cartItems.find((item) => item.id === newItem.id)
            if (existingItem) {
                existingItem.quantity++
                existingItem.totalPrice += newItem.price
            } else {
                state.cartItems.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                })
                state.cartTotalQuantity++
            }
            
        },
        removeFromCart() {

        },
        setShowCart(state) {
            state.showCart = true
        }


    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer