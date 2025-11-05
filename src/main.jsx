import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import { CartProvider } from './context/cartContext.jsx';
import FormDataProvider from "./context/userContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <FormDataProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FormDataProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
