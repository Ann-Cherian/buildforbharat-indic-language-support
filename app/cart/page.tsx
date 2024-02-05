"use client";

import Link from "next/link";
import {
  CardAction,
  selectCartItems,
  selectCartPrice,
  showCards,
  useAppSelector,
} from "../lib";

export default function Cart() {
  const laptops = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectCartPrice);

  return (
    <div className="p-6 space-y-6">
      {showCards(CardAction.REMOVE, laptops)}
      <div className="flex justify-between px-6">
        <p>Total amount: {totalPrice}</p>
        <Link href="/cart/payment">Proceed to payment</Link>
      </div>
    </div>
  );
}
