import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import ScrollToTop from "./lib/ScrollToTop.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<ScrollToTop />
		<App />
	</BrowserRouter>
);
