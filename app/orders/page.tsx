"use client";

import {
  CardAction,
  selectOrdersItems,
  showCards,
  useAppSelector,
} from "../lib";

export default function Orders() {
  const laptops = useAppSelector(selectOrdersItems);

  return (
    <div className="p-6 space-y-6">
      {showCards(CardAction.STATUS, laptops, "Out for delivery")}
    </div>
  );
}
