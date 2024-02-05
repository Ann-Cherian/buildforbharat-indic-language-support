"use client";

import { selectCartCount, selectCartPrice, useAppSelector } from "@/app/lib";
import Link from "next/link";

export default function Payment() {
  const numberOfItems = useAppSelector(selectCartCount);
  const amount = useAppSelector(selectCartPrice);

  return (
    <div className="flex border p-6 m-6">
      <div className="flex-1">
        <p>Buyer&apos;s Name: John Doe</p>
        <p>Delivery address: 123 Street, Earth</p>
        <p>Mode of payment: Cash on delivery</p>
        <p>Number of item(s): {numberOfItems}</p>
        <p>Amount: {amount}</p>
      </div>
      <div className="self-end space-x-6">
        <Link href="/cart/payment/success">Confirm payment</Link>
        <Link href="/cart">Cancel</Link>
      </div>
    </div>
  );
}
