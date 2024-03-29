import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import { customTheme } from './styles/customTheme';
import CssBaseline from '@mui/material/CssBaseline';
import { extendedApiSlice } from './features/product/productSlice';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
//loads products at app load time
store.dispatch(extendedApiSlice.endpoints.getProducts.initiate());

root.render(
  <Provider store={store}>
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
