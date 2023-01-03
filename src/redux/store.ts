// import { Person } from '@/models';
import { configureStore } from '@reduxjs/toolkit';
import { favoritesSlice, IFavs, peopleSlice } from './states';

export interface AppStore {
  people: [];
  favorites: IFavs[];
}

export default configureStore<AppStore>({
  reducer: {
    people: peopleSlice.reducer,
    favorites: favoritesSlice.reducer
  }
});