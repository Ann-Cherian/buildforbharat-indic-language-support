import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, chatReducer, ordersReducer } from ".";

export const makeStore = () =>
  configureStore({
    reducer: { cart: cartReducer, chat: chatReducer, orders: ordersReducer },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
