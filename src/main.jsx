import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import CarttSlice from './CarttSlice.jsx';

const store = configureStore({
  reducer: {
    cart: CarttSlice
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
