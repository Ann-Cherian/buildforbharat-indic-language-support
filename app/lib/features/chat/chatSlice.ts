import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Message, RootState } from "../..";

export interface ChatState {
  messages: Message[];
}

const initialState: ChatState = {
  messages: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addChatMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
  },
});

export const { addChatMessage } = chatSlice.actions;
export const selectChatMessages = (state: RootState) => state.chat.messages;
export default chatSlice.reducer;
