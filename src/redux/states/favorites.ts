// import { LocalStorageTypes, Person } from '@/models';
// import { getLocalStorage, setLocalStorage } from '@/utilities';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

// const initialState: [] = [];

export interface IFavs {
  id: string
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [] as IFavs[],
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