import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: 'filters',
	initialState: {
		brand: "",
		price: "",
		kmFrom: null,
		kmTo: null,
	},
   reducers: {
		handleFilterBrand(state, action){
			state.brand = action.payload
		},
		handleFilterPrice(state, action){
			state.price = action.payload
		},
   }
});

export const {handleFilterBrand, handleFilterPrice} = slice.actions;
export const filtersReducer = slice.reducer;


export const selectFilterBrand = state => state.filters.brand;
export const selectFilterPrice = state => state.filters.price;