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
    // toggleComplete: (state, action) => {
    //   const index = state.findIndex((todo) => todo.id === action.payload.id);
    //   state[index].completed = action.payload.completed;
    // },
    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
