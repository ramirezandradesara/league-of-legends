import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageTypes } from "../../types/localstorage";
import { IChamps } from "../../types/champs.types";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../helpers/localstorage.utility";

const initialState: IChamps[] = [];

export const champSlice = createSlice({
  name: "people",
  initialState: getLocalStorage(LocalStorageTypes.PEOPLE)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.PEOPLE) as string)
    : initialState,
  reducers: {
    setChamps: (state, action) => {
      setLocalStorage(LocalStorageTypes.PEOPLE, state);
      return action.payload;
    },
  },
});

export const { setChamps } = champSlice.actions;

export default champSlice.reducer;
