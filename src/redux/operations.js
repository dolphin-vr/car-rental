import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const PAGE_LIMIT = 12;
export const requester = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (page, thunkAPI) => {
    try {
      const response = await requester.get(`/advert?page=${page}&l=${PAGE_LIMIT}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addCar = createAsyncThunk(
  "cars/addCar",
  async (car, thunkAPI) => {
    try {
      const response = await requester.get(car);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteCar = createAsyncThunk(
  "cars/deleteCar",
  async (id, thunkAPI) => {
    try {
      const response = await requester.get(id);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const changeCar = createAsyncThunk(
  "cars/changeCar",
  async (car, thunkAPI) => {
    try {
      const response = await requester.get(car);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
