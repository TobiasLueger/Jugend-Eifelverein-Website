import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Newsletter from "./routes/newsletter";
import Home from "./routes/home";
import About from "./routes/about";
import Events from "./routes/events";
import Event from "./routes/event";
import NewsPage from "./routes/newsPage";
import News from "./routes/news";
import NotFound from "./routes/notFound";
/* import axios from "axios"; */
import "./styles/tailwind.css";

interface footerProps {
	allData?: object;
}

const App: React.FC<footerProps> = () => {
	return (
		<div className="App bg-greyLight relative overflow-hidden">
			<Header />
			<Routes>
				<Route path="*" element={<NotFound />} />
				<Route path="/" element={<Home />} />
				<Route path="/ueber-uns" element={<About />} />
				<Route path="/veranstaltungen" element={<Events />} />
				<Route path="/berichte" element={<News />} />
				<Route path="/newsletter" element={<Newsletter />} />
				<Route path="/veranstaltungen/:id" element={<Event />} />
				<Route path="/berichte/:id" element={<NewsPage />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
