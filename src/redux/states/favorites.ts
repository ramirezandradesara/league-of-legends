import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      return [...state, action.payload]
    },
    removeFavorite: (state, action) => {
      return action.payload;
    }
  }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;