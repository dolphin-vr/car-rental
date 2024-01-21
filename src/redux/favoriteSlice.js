import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectCars } from "./carsSlice";

const slice = createSlice({
  name: "favorites",
  initialState: {favorites: []},
  reducers: {
    changeFavorites(state, action) {
      const idx = state.favorites.findIndex(el => el.id===action.payload.id);
			if (!!~idx) {
				state.favorites.splice(idx, 1)
			} else {
				state.favorites.push(action.payload)
			}
    },
  },
});

export const { changeFavorites } = slice.actions;
export const favoriteReducer = slice.reducer;

export const selectFavorite = state => state.favorites.favorites;

export const selectFavoriteCars = createSelector(
  [selectCars, selectFavorite],
  (cars, favorites) =>
		cars.filter(el => favorites.includes(el.id))
);
