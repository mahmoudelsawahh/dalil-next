"use client"
import { localUrl } from "@/lib/baseUrl";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllAds = createAsyncThunk(
  "Ads/getAllAds",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .get(`${localUrl}/rest/test.ads/getAll/5`)
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getAdDetails = createAsyncThunk(
  "Ads/getAdDetails",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .get(`${localUrl}/adDetails?id=${id}`)
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const AdvertSlice = createSlice({
  name: "Ads",
  initialState: {
    isLoadingAds: false,
    error: null,
    getAllAdsArray: null,
    getAdDetailsArray: null,
  },
  extraReducers: {
    // Get The AllAds
    [getAllAds.pending]: (state, action) => {
      state.isLoadingAds = true;
      state.error = null;
    },
    [getAllAds.fulfilled]: (state, action) => {
      state.isLoadingAds = false;
      state.getAllAdsArray = action.payload;
    },
    [getAllAds.rejected]: (state, action) => {
      state.isLoadingAds = false;
      state.error = action.payload;
    },

    [getAdDetails.pending]: (state, action) => {
      state.isLoadingAds = true;
      state.error = null;
    },
    [getAdDetails.fulfilled]: (state, action) => {
      state.isLoadingAds = false;
      state.getAdDetailsArray = action.payload;
    },
    [getAdDetails.rejected]: (state, action) => {
      state.isLoadingAds = false;
      state.error = action.payload;
    },
  },
});

export default AdvertSlice.reducer;
