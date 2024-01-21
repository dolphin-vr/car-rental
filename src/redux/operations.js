import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const PAGE_LIMIT = 12;
export const requester = axios.create({
   baseURL: "https://65a7b9af94c2c5762da7652b.mockapi.io/api",
});

export const fetchCars = createAsyncThunk("cars/fetchCars",
  async (page, thunkAPI) => {
    try {
      const response = await requester.get(`/advert?page=${page}&l=${PAGE_LIMIT}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchMore = createAsyncThunk("cars/fetchMore",
  async (page, thunkAPI) => {
   try {
      const response = await requester.get(`/advert?page=${page}&l=${PAGE_LIMIT}`);
      return response.data;
   } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
   }
});
