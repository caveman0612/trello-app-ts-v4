import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      title: "todo1",
      cards: [
        { id: 3, title: "go running" },
        { id: 4, title: "dishes" },
      ],
    },
    { id: 2, title: "todo2", cards: [] },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        cards: [],
      };
      state.push(newTodo);
    },
    addCard: (state, action) => {
      const newCard = {
        id: Date.now(),
        title: action.payload.title,
      };
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].cards.push(newCard);
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state.splice(index, 1);
    },
    deleteCard: (state, action) => {
      const { folderId, cardId } = action.payload;
      const folderIndex = state.findIndex((todo) => todo.id === folderId);
      const cardIndex = state[folderIndex].cards.findIndex(
        (card) => card.id === cardId
      );
      state[folderIndex].cards.splice(cardIndex, 1);
    },
  },
});

export const { addTodo, addCard, deleteTodo, deleteCard } = todoSlice.actions;

export default todoSlice.reducer;
