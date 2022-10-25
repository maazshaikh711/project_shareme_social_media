import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <GoogleOAuthProvider clientId='947311430903-d4me0oisc5mau3v0le4ea66vfn4o2ud9.apps.googleusercontent.com'>
  {/* <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}> */}
  <App />
    
  </GoogleOAuthProvider>
  </Router>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

