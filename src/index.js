import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { GlobalStyles } from './style/global';
import  { ResetCSS }  from './style/global';
import ProviderLottie from './providers/lottieContext';
import ProviderUser from './providers/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProviderLottie>
      <ProviderUser>
      <GlobalStyles />
      <ResetCSS />
      <App />
      </ProviderUser>
    </ProviderLottie>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
