"use client";

import {
  addOrdersItem,
  clearCart,
  selectCartCount,
  selectCartItems,
  selectCartPrice,
  useAppDispatch,
  useAppSelector,
} from "@/app/lib";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Payment() {
  const numberOfItems = useAppSelector(selectCartCount);
  const amount = useAppSelector(selectCartPrice);
  const laptops = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const confirmPayment = () => {
    laptops.forEach((laptop) => {
      dispatch(addOrdersItem(laptop));
    });
    dispatch(clearCart());
    router.push("/cart/payment/success");
  };

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
        <button onClick={confirmPayment}>Confirm payment</button>
        <Link href="/cart">Cancel</Link>
      </div>
    </div>
  );
}
