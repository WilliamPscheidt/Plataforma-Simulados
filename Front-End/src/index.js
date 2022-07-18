import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Style/global.css'

const zyngo = ReactDOM.createRoot(document.getElementById('zyngo'));

zyngo.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);