import { CardAction } from "./enums";
import cartReducer, {
  CartState,
  addItem,
  clearCart,
  removeItem,
  selectCartCount,
  selectCartItems,
  selectCartPrice,
} from "./features/cart/cartSlice";
import { useAppDispatch, useAppSelector, useAppStore } from "./hooks";
import { AppDispatch, AppStore, RootState, makeStore } from "./store";
import { Laptop } from "./types";
import { showCards } from "./utils";

export type { AppStore, CartState, Laptop, AppDispatch, RootState };
export {
  addItem,
  CardAction,
  cartReducer,
  clearCart,
  makeStore,
  removeItem,
  selectCartCount,
  selectCartItems,
  selectCartPrice,
  showCards,
  useAppDispatch,
  useAppSelector,
  useAppStore,
};
