import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import ScrollToTop from "./lib/ScrollToTop.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
let redirectUri;
let logoutUri;
if (process.env.NODE_ENV === "production") {
	redirectUri = "https://eifeljugend-rheinbach.de";
	logoutUri = "https://eifeljugend-rheinbach.de";
} else {
	redirectUri = "http://localhost:3000/login";
	logoutUri = "http://localhost:3000/login";
}
root.render(
	<BrowserRouter>
		<ScrollToTop />
		<KindeProvider clientId="d3259e82cddd4422a590582f8625d6ec" domain="https://eifeljugend.kinde.com" redirectUri={redirectUri} logoutUri={logoutUri} isDangerouslyUseLocalStorage={process.env.NODE_ENV === "development"}>
			<App />
		</KindeProvider>
	</BrowserRouter>
);
