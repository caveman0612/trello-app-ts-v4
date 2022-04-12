import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    folders: {
      1: {
        id: 1,
        title: "todo1",
        cardIds: [3, 4],
      },
      2: { id: 2, title: "todo2", cardIds: [] },
    },
    cards: {
      3: { id: 3, title: "go running" },
      4: { id: 4, title: "dishes" },
      5: { id: 5, title: "workout" },
    },
    folderOrder: [1, 2],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        cardIds: [],
      };
      state.folders[newTodo.id] = newTodo;
      state.folderOrder.push(newTodo.id);
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state.splice(index, 1);
    },
    // addCard: (state, action) => {
    //   const newCard = {
    //     id: Date.now(),
    //     title: action.payload.title,
    //   };
    //   const index = state.findIndex((todo) => todo.id === action.payload.id);
    //   state[index].cards.push(newCard);
    // },

    // deleteCard: (state, action) => {
    //   const { folderId, cardId } = action.payload;
    //   const folderIndex = state.findIndex((todo) => todo.id === folderId);
    //   const cardIndex = state[folderIndex].cards.findIndex(
    //     (card) => card.id === cardId
    //   );
    //   state[folderIndex].cards.splice(cardIndex, 1);
    // },
  },
});

export const { addTodo, addCard, deleteTodo, deleteCard } = todoSlice.actions;

export default todoSlice.reducer;
