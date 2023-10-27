import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./css/index.css"

import 'primereact/resources/primereact.css';                       // core css
import 'primeflex/primeflex.css';   
import 'primeflex/themes/primeone-dark.css'  


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


