import { Card } from "../components";
import { Laptop } from "./types";

export const showCards = (data: Laptop[]) => {
  return data.map((val) => <Card key={val.id} laptop={val} />);
};
