import { CardAction } from "./enums";
import cartReducer, {
  CartState,
  addCartItem,
  clearCart,
  removeCartItem,
  selectCartCount,
  selectCartItems,
  selectCartPrice,
} from "./features/cart/cartSlice";
import ordersReducer, {
  OrdersState,
  addOrdersItem,
  selectOrdersItems,
} from "./features/orders/ordersSlice";
import { useAppDispatch, useAppSelector, useAppStore } from "./hooks";
import { AppDispatch, AppStore, RootState, makeStore } from "./store";
import { Laptop } from "./types";
import { showCards } from "./utils";

export type {
  AppStore,
  CartState,
  Laptop,
  AppDispatch,
  OrdersState,
  RootState,
};
export {
  addCartItem,
  addOrdersItem,
  CardAction,
  cartReducer,
  clearCart,
  makeStore,
  ordersReducer,
  removeCartItem,
  selectCartCount,
  selectCartItems,
  selectCartPrice,
  selectOrdersItems,
  showCards,
  useAppDispatch,
  useAppSelector,
  useAppStore,
};
