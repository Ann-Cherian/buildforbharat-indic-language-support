"use client";

import Link from "next/link";
import { selectCartCount, useAppSelector } from "../lib";

export default function Nav() {
  const cartItemsCount = useAppSelector(selectCartCount);

  return (
    <div className="flex justify-between p-6 border-b">
      <Link href="/discover">Discover</Link>
      <Link href="/search">Search</Link>
      <Link href="/cart">Cart ({cartItemsCount})</Link>
      <h1>Orders</h1>
      <h1>Customer Support</h1>
    </div>
  );
}
