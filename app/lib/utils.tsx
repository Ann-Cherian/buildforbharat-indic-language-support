import { CardAction, Laptop } from ".";
import { Card } from "../components";

export const showCards = (
  action: CardAction,
  data: Laptop[],
  message: string = ""
) => {
  return data.map((val) => (
    <Card key={val.id} action={action} laptop={val} message={message} />
  ));
};
