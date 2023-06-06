import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuid} from "uuid";

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuid(),
        text: action.payload,
      };

      state.push(todo);
    },
    }
});

// this is for dispatch
export const { addTodo } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;