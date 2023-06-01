import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
    id: number;
    quantity: number;
    size: string;
    color: string;
  }

  interface CartState {
    cartItems: CartItem[];
  }
  
  const initialState: CartState = {
    cartItems: [],
  };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state: any, action) => {
            state.cartItems.push(action.payload)
        },
        removeFromCart: (state: any, action) => {
            state.cart = state.cart.filter((item: any) => item.id !== action.payload)
        },
        clearCart: (state: any) => {
            state.cartItems = []
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer