import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    // cartTotalAmount: 0
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
                console.log('Item already exists in Cart');
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


    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer