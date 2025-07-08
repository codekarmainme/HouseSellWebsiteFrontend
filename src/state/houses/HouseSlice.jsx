import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const API_URL = 'http://localhost:5000/api/houses';

export const postHouse = createAsyncThunk(
  'houses/posthouse',
  async (houseData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/houses/posthouse', houseData);
      return response.data; 
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const houseSlice = createSlice({
  name: 'houses',
  initialState: {
    houses: [],
    status: 'idle',
    error: null,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(postHouse.pending, (state) => {
        state.status = 'loading';
        state.error = null; 
      })
      .addCase(postHouse.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.houses.push(action.payload); 
        state.error = null; 
      })
      .addCase(postHouse.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});


export default houseSlice.reducer;