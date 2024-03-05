"use client"
import { localUrl } from "@/lib/baseUrl";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getGatecories = createAsyncThunk(
  "category/getCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .get(`${localUrl}/rest/test.category/cats`)
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getBranches = createAsyncThunk(
  "category/getBranches",
  async (Id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const result = await fetch(`${localUrl}/rest/test.branch/catBranches`,{
        method : 'POST',
			body : JSON.stringify(
      Id
      ),
      });
      const data = await result.json();
      
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getClientDetails = createAsyncThunk(
  "category/getClientDetails",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${localUrl}/rest/test.branch/branche/`, {
          id,
        })
        .then((res) => res.data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getLastBranches = createAsyncThunk(
  "category/getLastBranches",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`${localUrl}/rest/test.branch/last/0`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getLastViews = createAsyncThunk(
  "category/getLastViews",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`${localUrl}/rest/test.branch/viewed/9/0/`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getMatchBranch = createAsyncThunk(
  "category/getMatchBranch",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${localUrl}/rest/test.branch/matches/`, {
          id,
        })
        .then((res) => res.data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addMoreViews = createAsyncThunk(
  "category/addMoreViews",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${Url}/rest/test.branch/updateViews`, {
          id,
        })
        .then((res) => res.data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const CategoriesSlice = createSlice({
  name: "category",
  initialState: {
    AllCategories: [],
    isLoading: false,
    error: null,
    ALLBranches: null,
    ALLClientDetails: null,
    lastBranchesArr: null,
    lastViewsArr: null,
    matchBranchesArray: null,
    setview: false,
  },

  extraReducers: {
    // Get The Gategories
    [getGatecories.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.ALLBranches = null;
    },
    [getGatecories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.AllCategories = action.payload;
    },
    [getGatecories.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Get The Branches
    [getBranches.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.ALLBranches = null;
    },
    [getBranches.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.ALLBranches = action.payload;
    },
    [getBranches.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Get getClientDetails
    [getClientDetails.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
      // state.ALLBranches = null;
    },
    [getClientDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.ALLClientDetails = action.payload;
    },
    [getClientDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Get getLastBranches
    [getLastBranches.pending]: (state, action) => {
      state.isLoading = false;
      state.error = null;
    },
    [getLastBranches.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.lastBranchesArr = action.payload;
    },
    [getLastBranches.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Get getLastViews
    [getLastViews.pending]: (state, action) => {
      state.isLoading = false;
      state.error = null;
    },
    [getLastViews.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.lastViewsArr = action.payload;
    },
    [getLastViews.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Get MatchBranches
    [getMatchBranch.pending]: (state, action) => {
      state.isLoading = false;
      state.error = null;
    },
    [getMatchBranch.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.matchBranchesArray = action.payload;
    },
    [getMatchBranch.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // addMoreViews
    [addMoreViews.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [addMoreViews.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.setview = action.payload;
    },
    [addMoreViews.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export default CategoriesSlice.reducer;
