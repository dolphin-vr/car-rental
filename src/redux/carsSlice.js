import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { PAGE_LIMIT, fetchCars, fetchMore } from "./operations";
import { selectFilterBrand, selectFilterPrice } from "./filterSlice";

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
            state.cars = action.payload;
            state.isLoading = false;
            state.showBtnMore = action.payload.length < PAGE_LIMIT ? false : true;
            state.error = null;
         })
         .addCase(fetchCars.rejected, handleRejected)

         .addCase(fetchMore.pending, handlePending)
         .addCase(fetchMore.fulfilled, (state, action) => {
            state.cars = [...state.cars, ...action.payload];
            state.isLoading = false;
            state.showBtnMore = action.payload.length < PAGE_LIMIT ? false : true;
            state.error = null;
         })
         .addCase(fetchMore.rejected, handleRejected);
   },
});

export const carsReducer = carsSlice.reducer;

export const selectCars = (state) => state.cars.cars;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;
export const selectShowMore = (state) => state.cars.showBtnMore;

export const selectFilteredCars = createSelector([selectCars, selectFilterBrand, selectFilterPrice], (cars, brand, price) =>
   cars.filter((el) => el.make.toLowerCase().startsWith(brand.toLowerCase()) && parseInt(el.rentalPrice.substring(1)) <= (price || 99999))
);
