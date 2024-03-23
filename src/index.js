import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/authContext";
import LoadingProvider from "./context/LoadingProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>

);
