import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {v4 as uuid} from "uuid";
import axios from 'axios';


// demo for async call
export const fetchContent = createAsyncThunk(
  'todos/fetchContent',
  async () => {
    const res = await axios('https://jsonplaceholder.typicode.com/photos')
    const data = await res.data
    console.log('test aysnc thunk');
    return data
  }
)


export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
      content: [],
      isLoading: false,
    },
  reducers: {
    addTodo: addTodoHandler,
    tryAsyncCall: (state, action) => {
      console.log('test async call');   
      // const res = await axios('https://jsonplaceholder.typicode.com/photos')
      }   
    },
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false
      state.content = action.payload
    })
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },    
});

// this is for dispatch
export const { addTodo, tryAsyncCall  } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;

// need to use function instead 
// of const xxx = () => {} because we need to use this

function addTodoHandler (state, action)  {
  console.log(action.payload);

  const message = {
    id: uuid(),
    text: action.payload,
  };
  state.content.push(message);
}