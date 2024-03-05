"use client"
import { localUrl } from "@/lib/baseUrl";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRightFrinds = createAsyncThunk(
  "friends/frisGroub",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .get(`${localUrl}/rest/test.sites/firstGroup`)
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getLeftFriends = createAsyncThunk(
  "friends/leftFriends",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .get(`${localUrl}/rest/test.sites/secondGroup`)
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const FriendsSlice = createSlice({
  name: "friends",
  initialState: {
    isLoading: false,
    error: null,
    fristGroupArray: null,
    LeftGroupArray: null,
  },
  extraReducers: {
    // Get fristGroupArray
    [getRightFrinds.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.getAllAdsArray = null;
    },
    [getRightFrinds.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.fristGroupArray = action.payload;
    },
    [getRightFrinds.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Get Laft GroupArray
    [getLeftFriends.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.getAllAdsArray = null;
    },
    [getLeftFriends.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.LeftGroupArray = action.payload;
    },
    [getLeftFriends.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default FriendsSlice.reducer;
