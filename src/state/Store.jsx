import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';

import authReducer from './auth/AuthSlice';
import houseReducer from './houses/HouseSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Only persist the 'auth' slice
};

const rootReducer = combineReducers({
  auth: authReducer,
  houses: houseReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/PURGE'],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor }; // Export both store and persistor