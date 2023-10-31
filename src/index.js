import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/index.css";

import "primereact/resources/primereact.css"; // core css
import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfoWEB from "./components/InfoWEB";

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Ocurrio un error de direccionamiento.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/info" element={<InfoWEB />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
   
  </React.StrictMode>
);
