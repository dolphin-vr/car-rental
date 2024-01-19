import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: 'filter',
	initialState: {
		brand: "b",
		price: null,
		kmFrom: null,
		kmTo: null,
	},
   reducers: {
		handleFilter(state, action){
			return action.payload
		},
   }
});

export const {handleFilter} = slice.actions;
export const filterReducer = slice.reducer;


export const selectBrandFilter = state => state.filter.brand;