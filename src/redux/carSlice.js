import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: "",
  },
  // token: null,
  isLoading: false,
  // isLoggedIn: false,
  // isRefreshing: false,
  error: null,
};
// const handlePending = (state) => {
//   state.isLoading = true;
//   state.error = null;
//   state.isLoggedIn = false;
// };
// const handleRejected = (state, action) => {
//   state.isLoggedIn = false;
//   state.isLoading = false;
//   state.error = action.payload;
// };

const slice = createSlice({
	name: 'car',
	initialState,
	reducers: {
		handleCar(state, action){
				return action.payload
		},
	}
});

export const {handleCar} = slice.actions;
export const carReducer = slice.reducer;