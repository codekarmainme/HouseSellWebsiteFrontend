import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/AuthSlice';
import houseReducer from './houses/HouseSlice';
export default configureStore({
  reducer: {
    auth: authReducer,
    houses: houseReducer,

  },
});