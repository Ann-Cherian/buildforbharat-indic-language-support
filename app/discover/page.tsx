import { Card } from "../components";
import data from "../data/data.json";

const showLaptopCards = () => {
  return Object.entries(data).map(([key, val]) => (
    <Card key={key} laptop={val} />
  ));
};

export default function Home() {
  return (
    <>
      <div className="p-6 space-y-6">{showLaptopCards()}</div>
    </>
  );
}
