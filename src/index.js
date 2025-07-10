import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import colors from "./common/colors"; // adjust path as needed
import { Provider } from 'react-redux';
import { store, persistor } from './state/Store';
import { PersistGate } from 'redux-persist/integration/react';
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

  <ThemeProvider theme={theme}>

    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* Your Router needs to be inside Provider and PersistGate */}
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>

  </ThemeProvider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
