"use client";

import { clearCart, useAppDispatch } from "@/app/lib";

export default function Sucess() {
  const dispatch = useAppDispatch();
  dispatch(clearCart());

  return (
    <div className="border p-6 m-6">
      <p>Payment successful.</p>
    </div>
  );
}
