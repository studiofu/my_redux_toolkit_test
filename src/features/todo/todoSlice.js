import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuid} from "uuid";

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: addTodoHandler,
    }
});

// this is for dispatch
export const { addTodo } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;

// need to use function instead 
// of const xxx = () => {} because we need to use this

function addTodoHandler (state, action)  {
  console.log(action.payload);

  const todo = {
    id: uuid(),
    text: action.payload,
  };
  state.push(todo);
}