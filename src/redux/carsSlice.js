import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from 'reselect';
import { PAGE_LIMIT, addCar, deleteCar, fetchCars } from "./operations";
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
    cars: [],
    isLoading: false,
    showBtnMore: true,
    error: null,
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchCars.pending, handlePending)
    .addCase(fetchCars.fulfilled, (state, action) => {
      state.cars = [... state.cars, ...action.payload];
      state.isLoading = false;
      state.showBtnMore = (action.payload.length < PAGE_LIMIT) ? false : true;
      state.error = null;
    })
    .addCase(fetchCars.rejected, handleRejected)

    .addCase(addCar.pending, handlePending)
    .addCase(addCar.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.cars.push(action.payload);
    })
    .addCase(addCar.rejected, handleRejected)

    .addCase(deleteCar.pending, handlePending)
    .addCase(deleteCar.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.cars.findIndex(el => el.id === action.payload.id);
      state.cars.splice(index, 1);
    })
    .addCase(deleteCar.rejected, handleRejected)
  },
});

export const carsReducer = carsSlice.reducer;

export const selectCars = state => state.cars.cars;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;
export const selectShowMore = state => state.cars.showBtnMore;

export const selectFilteredCars = createSelector(
  [selectCars, selectBrandFilter],
  (cars, filter) =>
  cars.filter(el =>
      el.name.toLowerCase().startsWith(filter.toLowerCase())
    )
);
