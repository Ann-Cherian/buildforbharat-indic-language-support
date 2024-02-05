import { laptops } from "../data";
import { CardAction } from "../lib";
import { showCards } from "../lib/utils";

export default function Home() {
  return (
    <div className="p-6 space-y-6">{showCards(CardAction.ADD, laptops)}</div>
  );
}
