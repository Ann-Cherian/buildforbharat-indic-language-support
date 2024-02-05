"use client";

import { useState } from "react";
import { Laptop } from "../lib/types";
import { showCards } from "../lib/utils";
import { laptops } from "../data";

export default function Search() {
  const [results, setResults] = useState<Laptop[]>([]);

  async function onSubmit(formData: FormData) {
    const query = formData.get("query");
    const results: Laptop[] = [];

    laptops.forEach((laptop) => {
      if (laptop.brand === query) {
        results.push(laptop);
      }
    });

    setResults(results);
  }

  return (
    <form action={onSubmit}>
      <div className="flex border-b pr-6 gap-x-6">
        <input
          className="bg-black flex-1 border-r p-6"
          type="text"
          name="query"
          placeholder="Enter laptop brand..."
        />
        <button type="submit">Search</button>
      </div>
      {showCards(results)}
    </form>
  );
}
