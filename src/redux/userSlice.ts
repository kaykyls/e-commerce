import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogged: false,
        name: "",
        email: "",
        cartItems: [],
        wishList: [],
        orders: []
    },
    reducers: {
        changeUser: (state, action) => {
            state.isLogged = true
        },
        addToUserCart: (state: any, action) => {
            state.cartItems.push(action.payload)
        },
        removeFromCart: (state: any, action) => {
            state.cart = state.cart.filter((item: any) => item.id !== action.payload)
        }
    }
})

export const { changeUser, addToUserCart } = userSlice.actions

export default userSlice.reducer