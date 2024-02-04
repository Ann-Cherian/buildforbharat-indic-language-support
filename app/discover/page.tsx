import data from "../data/data.json";
import { showCards } from "../lib/utils";

export default function Home() {
  return <div className="p-6 space-y-6">{showCards(data)}</div>;
}
