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
                    name: newItem.name,
                    imgUrl: newItem.imgUrl
                })
                state.cartTotalQuantity++
            }
        },
        removeFromCart(state, action) {
            const id = action.payload
            const existingItem = state.cartItems.find(item => item.id === id)
            if(existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
                state.cartTotalQuantity--
            } else {
                existingItem.quantity--
                existingItem.totalPrice -= existingItem.price
            }
        },
        deleteFromCart(state, action) {
            const id = action.payload
            const deletedItem = state.cartItems.find(item => item.id === id)
            if (deletedItem) {
                state.cartTotalQuantity --
                state.cartItems = state.cartItems.filter(item => item.id !== id)
            }
        }

    }
})

export const { addToCart, removeFromCart, deleteFromCart } = cartSlice.actions
export default cartSlice.reducer