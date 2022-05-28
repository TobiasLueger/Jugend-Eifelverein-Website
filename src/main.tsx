import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Member from "./routes/member";
import About from "./routes/about";
import Events from "./routes/events";
import News from "./routes/news";

const root = ReactDOM.createRoot(document.getElementById("root"));

//TODO: Render child Sites

root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route path="about" element={<About />} />
				<Route path="events" element={<Events />} />
				<Route path="news" element={<News />} />
				<Route path="members" element={<Member />} />
				<Route
					path="*"
					element={
						<main style={{ padding: "1rem" }}>
							<p>Leider konnte keine Seite gefunden werden!</p>
						</main>
					}
				/>
			</Route>
		</Routes>
	</BrowserRouter>
);
