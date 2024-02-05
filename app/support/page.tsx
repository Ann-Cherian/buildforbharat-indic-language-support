"use client";

import { Form } from "../components";
import {
  addChatMessage,
  selectChatMessages,
  useAppDispatch,
  useAppSelector,
} from "../lib";

export default function Support() {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectChatMessages);
  let id = 1;

  async function onSubmit(formData: FormData) {
    const query = formData.get("query")!;
    const message = {
      id: id++,
      message: query.toString(),
    };

    dispatch(addChatMessage(message));
  }

  const showMessages = () => {
    return messages.map((message) => <p key={message.id}>{message.message}</p>);
  };

  return (
    <div className="absolute inset-6 top-24 border">
      <Form
        placeholder="Enter your message..."
        action="Send"
        onSubmit={onSubmit}
      />
      {showMessages()}
    </div>
  );
}
