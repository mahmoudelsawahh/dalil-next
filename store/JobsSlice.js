"use client"
import { localUrl } from "@/lib/baseUrl";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllJobs = createAsyncThunk(
  "Jobs/getAllJobs",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios.get(`${localUrl}/jobLite`).then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getJobDetails = createAsyncThunk(
  "Jobs/getJobDetails",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .get(`${localUrl}/jobDetails?id=${id}`)
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const JobSlice = createSlice({
  name: "Jobs",
  initialState: {
    isLoadingJobs: false,
    error: null,
    AllJobs: null,
    jobDetails: [],
  },
  extraReducers: {
    // Get The AllJobs
    [getAllJobs.pending]: (state, action) => {
      state.isLoadingJobs = true;
      state.error = null;
      state.AllJobs = null;
    },
    [getAllJobs.fulfilled]: (state, action) => {
      state.isLoadingJobs = false;
      state.AllJobs = action.payload;
    },
    [getAllJobs.rejected]: (state, action) => {
      state.isLoadingJobs = false;
      state.error = action.payload;
    },

    // Get The AllJobs
    [getJobDetails.pending]: (state, action) => {
      state.isLoadingJobs = true;
      state.error = null;
      // state.jobDetails = null;
    },
    [getJobDetails.fulfilled]: (state, action) => {
      state.isLoadingJobs = false;
      state.jobDetails = action.payload;
    },
    [getJobDetails.rejected]: (state, action) => {
      state.isLoadingJobs = false;
      state.error = action.payload;
    },
  },
});

export default JobSlice.reducer;
