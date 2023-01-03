// import { LocalStorageTypes, Person } from '@/models';
// import { getLocalStorage, setLocalStorage } from '@/utilities';
import { createSlice } from '@reduxjs/toolkit';

// const initialState: [] = [];

// export interface IChamps {
//   champs: []
// }

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