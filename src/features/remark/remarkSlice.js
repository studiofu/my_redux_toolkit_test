/*
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {v4 as uuid} from "uuid";
import axios from 'axios';

export const fetchContent = createAsyncThunk(
  'remark/fetchContent',
  async () => {
    const res = await axios('https://jsonplaceholder.typicode.com/photos')
    const data = await res.data
    return data
  }
)


export const remarkSlice = createSlice({
  name: 'remark',
  initialState: {remark: [],
    isLoading: false,
  },
  reducers: {
    addRemark: (state, action) => {
      const remark = {
        id: uuid(),
        text: action.payload,
      };

      state.push(remark);
    },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchContent.pending, (state) => {
        state.isLoading = true
      })
      builder.addCase(fetchContent.fulfilled, (state, action) => {
        state.isLoading = false
        state.contents = action.payload
      })
      builder.addCase(fetchContent.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
    },    
});

// this is for dispatch
export const { addRemark  } = remarkSlice.actions;

// this is for configureStore
export default remarkSlice.reducer;

*/