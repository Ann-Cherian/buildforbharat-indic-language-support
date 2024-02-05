import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Laptop, RootState } from "../..";

export interface CartState {
  items: Laptop[];
  count: number;
  price: number;
}

const initialState: CartState = {
  items: [],
  count: 0,
  price: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Laptop>) => {
      state.items.push(action.payload);
      state.count++;
      state.price += action.payload.price;
    },
    removeItem: (state, action: PayloadAction<Laptop>) => {
      const index = state.items.findIndex(
        (laptop) => laptop.id === action.payload.id
      );

      state.items.splice(index, 1);
      state.count--;
      state.price -= action.payload.price;
    },
    clearCart: (state) => {
      state.items = [];
      state.count = 0;
      state.price = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartCount = (state: RootState) => state.cart.count;
export const selectCartPrice = (state: RootState) => state.cart.price;
export default cartSlice.reducer;
