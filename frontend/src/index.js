import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router";
import { MyProvider } from "./context/Context.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyProvider>
    <Router />
  </MyProvider>
);
