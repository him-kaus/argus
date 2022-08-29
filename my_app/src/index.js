import React from "react";
import ReactDOM from "react-dom";
import App from './App.js';
import Router1 from './context/Router1'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
   <App />
  </BrowserRouter>
  // <App />
  ,
  document.getElementById("root")
)