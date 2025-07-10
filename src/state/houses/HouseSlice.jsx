import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/houses';

export const postHouse = createAsyncThunk(
  'houses/posthouse',
  async (houseData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/posthouse`, houseData);
      return response.data;
    } catch (error) {
      console.error("Error posting house:", error); 
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// New: createAsyncThunk for fetching houses
export const fetchHouses = createAsyncThunk(
  'houses/fetchHouses',
  async (_, { rejectWithValue }) => { 
    try {
      const response = await axios.get(API_URL); 
      return response.data;
    } catch (error) {
      console.error("Error fetching houses:", error); 
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const houseSlice = createSlice({
  name: 'houses',
  initialState: {
    houses: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    // You can add synchronous reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      // Cases for postHouse
      .addCase(postHouse.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(postHouse.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.houses.push(action.payload); // Add the newly posted house to the array
        state.error = null;
      })
      .addCase(postHouse.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // New Cases for fetchHouses
      .addCase(fetchHouses.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchHouses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.houses = action.payload; // Set the fetched houses as the new state
        state.error = null;
      })
      .addCase(fetchHouses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default houseSlice.reducer;