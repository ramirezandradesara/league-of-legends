import { createSlice, current } from "@reduxjs/toolkit";
import { LocalStorageTypes } from "../../types/localstorage";
import { IChamps } from "../../types/champs.types";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../helpers/localstorage.utility";

const initialState: IChamps[] = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: getLocalStorage(LocalStorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorite: (state, action) => {
      const newState = [...current(state), action.payload];
      setLocalStorage(LocalStorageTypes.FAVORITES, newState);
      return newState;
    },
    removeFavorite: (state, action) => {
      const filteredState = current(state).filter(
        (p: IChamps) => p.id !== action.payload.id
      );
      setLocalStorage(LocalStorageTypes.FAVORITES, filteredState);
      return filteredState;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
