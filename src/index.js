import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./css/index.css"

import 'primereact/resources/primereact.css';                       // core css
import 'primeflex/primeflex.css';   
import "primereact/resources/themes/lara-light-indigo/theme.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


