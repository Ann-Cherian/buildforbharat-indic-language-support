"use client";

import {
  CardAction,
  addCartItem,
  removeCartItem,
  useAppDispatch,
} from "../lib";
import { Laptop } from "../lib/types";

type CardProps = {
  action: CardAction;
  laptop: Laptop;
  message: string;
};

export default function Card({ action, laptop, message }: CardProps) {
  const dispatch = useAppDispatch();

  const addToCart = () => {
    dispatch(addCartItem(laptop));
  };

  const removeFromCart = () => {
    dispatch(removeCartItem(laptop));
  };

  const showAction = (action: CardAction) => {
    if (action === CardAction.ADD) {
      return (
        <button className="self-end" onClick={addToCart}>
          Add to Cart
        </button>
      );
    } else if (action === CardAction.REMOVE) {
      return (
        <button className="self-end" onClick={removeFromCart}>
          Remove
        </button>
      );
    } else {
      return <p>Status: {message}</p>;
    }
  };

  return (
    <div className="flex border p-6">
      <div className="flex-1">
        <p>Brand: {laptop.brand}</p>
        <p>Name: {laptop.name}</p>
        <p>Processor: {laptop.processor}</p>
        <p>RAM: {laptop.ram}</p>
        <p>Storage: {laptop.storage}</p>
        <p>Price: {laptop.price}</p>
      </div>
      {showAction(action)}
    </div>
  );
}
