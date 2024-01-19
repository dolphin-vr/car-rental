import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from 'reselect';
import { addCar, deleteCar, fetchCars } from "./operations";
import { selectBrandFilter } from "./filterSlice";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchCars.pending, handlePending)
    .addCase(fetchCars.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    })
    .addCase(fetchCars.rejected, handleRejected)

    .addCase(addCar.pending, handlePending)
    .addCase(addCar.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    })
    .addCase(addCar.rejected, handleRejected)

    .addCase(deleteCar.pending, handlePending)
    .addCase(deleteCar.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.cars.findIndex(el => el.id === action.payload.id);
      state.items.splice(index, 1);
    })
    .addCase(deleteCar.rejected, handleRejected)
  },
});

export const carsReducer = carsSlice.reducer;

export const selectCars = state => state.cars.items;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;

export const selectFilteredCars = createSelector(
  [selectCars, selectBrandFilter],
  (items, filter) =>
  items.filter(el =>
      el.name.toLowerCase().startsWith(filter.toLowerCase())
    )
);
