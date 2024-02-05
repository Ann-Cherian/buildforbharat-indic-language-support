"use client";

import { useState } from "react";
import { Laptop } from "../lib/types";
import { showCards } from "../lib/utils";
import { laptops } from "../data";
import { CardAction } from "../lib";
import { Form } from "../components";

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
    <>
      <Form
        placeholder="Enter laptop brand..."
        action="Search"
        onSubmit={onSubmit}
      />
      {showCards(CardAction.ADD, results)}
    </>
  );
}
