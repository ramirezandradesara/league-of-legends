// import { LocalStorageTypes, Person } from '@/models';
// import { getLocalStorage, setLocalStorage } from '@/utilities';
import { createSlice } from '@reduxjs/toolkit';

const initialState: [] = [];

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    addPeople: (state, action) => {
      return action.payload;
    }
  }
});

export const { addPeople } = peopleSlice.actions;

export default peopleSlice.reducer;