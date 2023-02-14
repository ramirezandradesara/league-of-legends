import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { IChamps } from '../types/champs.types';
import { favoritesSlice, champSlice } from './states';

export interface AppStore {
  champs: IChamps[];
  favorites: IChamps[];
}

export const store = configureStore<AppStore>({
  reducer: {
    champs: champSlice.reducer,
    favorites: favoritesSlice.reducer
  }
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch