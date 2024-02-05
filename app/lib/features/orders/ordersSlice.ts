import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Laptop, RootState } from "../..";

export interface OrdersState {
  items: Laptop[];
}

const initialState: OrdersState = {
  items: [],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrdersItem: (state, action: PayloadAction<Laptop>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addOrdersItem } = ordersSlice.actions;
export const selectOrdersItems = (state: RootState) => state.orders.items;
export default ordersSlice.reducer;
