import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; //add browser router
import App from "./App";
import "./index.css";

//allow us to use route components inside BrowserRouter
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
