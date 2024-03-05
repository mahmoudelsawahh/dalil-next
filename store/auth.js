"use client"
import { localUrl } from "@/lib/baseUrl";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const UserLogin = createAsyncThunk(
  "auth/login",
  async (arg, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .get(`${localUrl}/login?name=${arg.useName}&password=${arg.password}`)
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const UserRegister = createAsyncThunk( "auth/register",
  async (Clientdata, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`${localUrl}/rest/test.peoples/register`, {
        method: "POST",
        body: JSON.stringify(Clientdata),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    error: null,
    login: [],
  },
  extraReducers: {
    // User Login
    [UserLogin.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [UserLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.login = action.payload;
    },
    [UserLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // User Register
    [UserRegister.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [UserRegister.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.login = action.payload;
    },
    [UserRegister.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default AuthSlice.reducer;
