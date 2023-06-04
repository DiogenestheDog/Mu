//import * as dotenv from 'dotenv';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';

console.log("honk" + process.env.REACT_APP_MAP_KEY);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
