import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    folders: {
      1: {
        id: 1,
        title: "Ice box",
        cardIds: [3, 4],
      },
      2: { id: 2, title: "In progress", cardIds: [5] },
      3: { id: 6, title: "Testing", cardIds: [] },
      4: { id: 4, title: "Complete", cardIds: [] },
    },
    cards: {
      3: { id: 3, title: "go running" },
      4: { id: 4, title: "dishes" },
      5: { id: 5, title: "workout" },
    },
    folderOrder: [1, 2, 3, 4],
  },
  reducers: {
    switchCards(state, action) {
      const {source, destination, draggableId} = action.payload;
      state.folders[Number(source.droppableId)].cardIds.splice(source.index, 1);
      state.folders[Number(destination.droppableId)].cardIds.splice(destination.index, 0, 
        Number(draggableId))

    },
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
      const index = state.folderOrder.findIndex((id) => id === action.payload.id);
      state.folderOrder.splice(index, 1);
      delete state.folders[action.payload.id]
    },

    addCard: (state, action) => {
      const newCard = {
        id: Date.now(),
        title: action.payload.title,
      };
      state.folders[action.payload.id].cardIds.push(newCard.id)
      state.cards[newCard.id] = newCard
    },

    deleteCard: (state, action) => {
      const folder = state.folders[action.payload.folderId]
      const index = folder.cardIds.findIndex((id) => id === action.payload.cardId)
      folder.cardIds.splice(index, 1);
      delete state.cards[action.payload.cardId]
    },
    
  },
});

export const { addTodo, addCard, deleteTodo, deleteCard, switchCards } = todoSlice.actions;

export default todoSlice.reducer;
