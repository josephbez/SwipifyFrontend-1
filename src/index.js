import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./Home.css";
import "./Swipescreen.css";

import App from "./App";
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root')
);

