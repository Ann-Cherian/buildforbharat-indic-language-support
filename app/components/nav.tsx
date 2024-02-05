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
      <Link href="/orders">Orders</Link>
      <Link href="/support">Customer Support</Link>
    </div>
  );
}
