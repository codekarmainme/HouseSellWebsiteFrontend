import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSignup: false,
  username: '',
  email: '',
  password: '',
  msg: null,
  showPassword: false,
  user:{}
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsSignup: (state, action) => { state.isSignup = action.payload; },
    setUsername: (state, action) => { state.username = action.payload; },
    setEmail: (state, action) => { state.email = action.payload; },
    setPassword: (state, action) => { state.password = action.payload; },
    setMsg: (state, action) => { state.msg = action.payload; },
    setShowPassword: (state, action) => { state.showPassword = action.payload; },
    setUser:(state, action)=> {state.user = action.payload},
    resetAuth: () => initialState,
    
  }
});

export const {
  setIsSignup, setUsername, setEmail, setPassword, setMsg, setShowPassword,setUser, resetAuth
} = authSlice.actions;

export default authSlice.reducer;