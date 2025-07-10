import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSignup: false,
  username: '',
  email: '',
  password: '', 
  msg: null,
  showPassword: false,
  user:{}, 
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
    setUser:(state, action)=> {
        state.user = action.payload;
       
        if (action.payload && action.payload.username) {
            state.username = action.payload.username;
        }
        if (action.payload && action.payload.email) {
            state.email = action.payload.email;
        }
    },
    
    logout: (state) => {
        localStorage.removeItem('token'); 
        state.user = {}; 
        state.username = ''; 
        state.email = ''; 
        state.password = ''; 
        state.msg = null;
        state.showPassword = false;

    },
    resetAuth: () => {
        localStorage.removeItem('token');
        return initialState;
    },
  }
});

export const {
  setIsSignup, setUsername, setEmail, setPassword, setMsg, setShowPassword, setUser, logout, resetAuth
} = authSlice.actions; 
export default authSlice.reducer;