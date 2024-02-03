import { Laptop } from "../lib/types";

type CardProps = {
  laptop: Laptop;
};

export default function Card({ laptop }: CardProps) {
  return (
    <div className="flex border p-6">
      <div className="flex-1">
        <p>Brand: {laptop.brand}</p>
        <p>Name: {laptop.name}</p>
        <p>Processor: {laptop.processor}</p>
        <p>RAM: {laptop.ram}</p>
        <p>Storage: {laptop.storage}</p>
        <p>Price: {laptop.price}</p>
      </div>
      <button className="self-end">Add to Cart</button>
    </div>
  );
}
