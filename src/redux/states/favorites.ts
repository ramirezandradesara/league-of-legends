import { createSlice, current } from "@reduxjs/toolkit";
import { IChamps } from "../../types/champs.types";

const initialState: IChamps[] = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: localStorage.getItem("FAVORITES")
    ? JSON.parse(localStorage.getItem("FAVORITES"))
    : initialState,
  reducers: {
    addFavorite: (action) => {
      localStorage.setItem("FAVORITES", JSON.stringify(action.payload));
      return action.payload;
    },
    removeFavorite: (state, action) => {
      const filteredState = current(state).filter(
        (p: IChamps) => p.id !== action.payload.id
      );
      localStorage.setItem("FAVORITES", filteredState);
      return filteredState;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
