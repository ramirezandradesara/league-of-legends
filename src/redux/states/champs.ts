
import { createSlice } from '@reduxjs/toolkit';

export const champSlice = createSlice({
  name: 'people',
  initialState: [],
  reducers: {
    setChamps: (state, action) => {
      return state = action.payload
    }
  }
});

export const { setChamps } = champSlice.actions;

export default champSlice.reducer;