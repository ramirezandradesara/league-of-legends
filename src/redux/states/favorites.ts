import { createSlice, current } from "@reduxjs/toolkit";
import { LocalStorageTypes } from "../../models/localstorage";
import { IChamps } from "../../types/champs.types";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../utilities/localstorage.utility";

const initialState: IChamps[] = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: getLocalStorage(LocalStorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorite: (action) => {
      setLocalStorage(LocalStorageTypes.FAVORITES, action.payload);
      return action.payload;
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
