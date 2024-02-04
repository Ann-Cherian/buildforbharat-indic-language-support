import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex justify-between p-6 border-b">
      <Link href="/discover">Discover</Link>
      <Link href="/search">Search</Link>
      <h1>Cart</h1>
      <h1>Orders</h1>
      <h1>Customer Support</h1>
    </div>
  );
}
