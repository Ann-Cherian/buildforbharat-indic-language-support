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
import chatReducer, {
  ChatState,
  addChatMessage,
  selectChatMessages,
} from "./features/chat/chatSlice";
import ordersReducer, {
  OrdersState,
  addOrdersItem,
  selectOrdersItems,
} from "./features/orders/ordersSlice";
import { useAppDispatch, useAppSelector, useAppStore } from "./hooks";
import { AppDispatch, AppStore, RootState, makeStore } from "./store";
import { Laptop, Message } from "./types";
import { showCards } from "./utils";

export type {
  AppDispatch,
  AppStore,
  CartState,
  ChatState,
  Laptop,
  Message,
  OrdersState,
  RootState,
};
export {
  addCartItem,
  addChatMessage,
  addOrdersItem,
  CardAction,
  cartReducer,
  chatReducer,
  clearCart,
  makeStore,
  ordersReducer,
  removeCartItem,
  selectCartCount,
  selectCartItems,
  selectCartPrice,
  selectChatMessages,
  selectOrdersItems,
  showCards,
  useAppDispatch,
  useAppSelector,
  useAppStore,
};
