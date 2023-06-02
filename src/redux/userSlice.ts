import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  quantity: number;
  size: string;
  color: string;
}

interface UserState {
  isLogged: boolean;
  name: string;
  email: string;
  cartItems: CartItem[];
  wishList: any[];
  orders: any[];
}

const initialState: UserState = {
  isLogged: false,
  name: "",
  email: "",
  cartItems: [],
  wishList: [],
  orders: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUser: (state) => {
      state.isLogged = true;
    },
    addToUserCart: (state, action: PayloadAction<CartItem>) => {
      state.cartItems.push(action.payload);
    },
    updateUserCartItem: (state, action) => {
        const itemToUpdate = state.cartItems.find((item: any) => item.id === action.payload)
            if (itemToUpdate) {
              itemToUpdate.quantity++;
        }
      },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { changeUser, addToUserCart, updateUserCartItem, removeFromCart } = userSlice.actions;

export default userSlice.reducer;
