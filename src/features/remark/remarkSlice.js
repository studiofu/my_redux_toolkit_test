import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuid} from "uuid";

export const remarkSlice = createSlice({
  name: 'remark',
  initialState: [],
  reducers: {
    addRemark: (state, action) => {
      const remark = {
        id: uuid(),
        text: action.payload,
      };

      state.push(remark);
    },
    }
});

// this is for dispatch
export const { addRemark  } = remarkSlice.actions;

// this is for configureStore
export default remarkSlice.reducer;

