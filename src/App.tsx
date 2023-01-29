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
import Login from "./routes/login";
import Intern from "./routes/intern";
import NotFound from "./routes/notFound";
/* import axios from "axios"; */
import "./styles/tailwind.css";
import Impressum from "./routes/impressum";
import Datenschutz from "./routes/datenschutz";
import CookieBot from "react-cookiebot";
import { AuthContext, useAuth } from "./lib/auth-context";

const domainGroupId = "7ac8eac0-7fec-493e-a324-eb874ee8aebc";

interface footerProps {
	allData?: object;
}

const App: React.FC<footerProps> = () => {
	const [hasCookieBot, setHasCookieBot] = useState(undefined);
	const { state } = useAuth();

	const globalStateContext = React.createContext(state);
	return (
		<globalStateContext.Provider value={state}>
			<div className="App bg-greyLight relative overflow-hidden min-h-screen flex flex-col justify-between">
				<Header />

				<Routes>
					<Route path="*" element={<NotFound />} />
					<Route path="/" element={<Home />} />
					<Route path="/ueber-uns" element={<About />} />
					<Route path="/veranstaltungen" element={<Events />} />
					<Route path="/berichte" element={<News />} />
					<Route path="/newsletter" element={<Newsletter />} />
					<Route path="/impressum" element={<Impressum />} />
					<Route path="/datenschutz" element={<Datenschutz />} />
					<Route path="/veranstaltungen/:id" element={<Event />} />
					<Route path="/berichte/:id" element={<NewsPage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/intern" element={<Intern />} />
				</Routes>

				<CookieBot domainGroupId={domainGroupId} />
				<Footer />
			</div>
		</globalStateContext.Provider>
	);
};

export default App;
