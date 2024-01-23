import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
   name: "filters",
   initialState: {
      brand: "",
      price: "",
      mileage: {
         from: 0,
         to: Number.MAX_SAFE_INTEGER,
      },
   },
   reducers: {
      handleFilterBrand(state, action) {
         state.brand = action.payload;
      },
      handleFilterPrice(state, action) {
         state.price = action.payload;
      },
      handleFilterMileage(state, action) {
         state.mileage.from = action.payload.from || 0;
         state.mileage.to = action.payload.to || Number.MAX_SAFE_INTEGER;
      },
   },
});

export const { handleFilterBrand, handleFilterPrice, handleFilterMileage } = slice.actions;
export const filtersReducer = slice.reducer;

export const selectFilterBrand = (state) => state.filters.brand;
export const selectFilterPrice = (state) => state.filters.price;
export const selectFilterMileage = (state) => state.filters.mileage;
