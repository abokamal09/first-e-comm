// Library
import React from "react";
import ReactDOM from "react-dom/client";

// Component
import App from "./App";

// Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
