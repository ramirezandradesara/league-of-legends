import { createSlice } from "@reduxjs/toolkit";
import { IChamps } from "../../types/champs.types";

const initialState: IChamps[] = [];

export const champSlice = createSlice({
  name: "people",
  initialState: initialState,
  reducers: {
    setChamps: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setChamps } = champSlice.actions;

export default champSlice.reducer;
