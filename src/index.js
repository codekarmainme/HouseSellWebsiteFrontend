import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import colors from "./common/colors"; // adjust path as needed
import { Provider } from 'react-redux';
import store from './state/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  palette: {
    primary: { main: colors.primary },
    background: { default: colors.background },
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>

      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>

    </ThemeProvider>
  </Provider>



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
