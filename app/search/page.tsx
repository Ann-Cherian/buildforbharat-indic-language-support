"use client";

import { useState } from "react";
import data from "../data/data.json";
import { Laptop } from "../lib/types";
import { showCards } from "../lib/utils";

export default function Search() {
  const [results, setResults] = useState<Laptop[]>([]);

  async function onSubmit(formData: FormData) {
    const query = formData.get("query");
    const results: Laptop[] = [];

    data.forEach((val) => {
      if (val.brand === query) {
        results.push(val);
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
