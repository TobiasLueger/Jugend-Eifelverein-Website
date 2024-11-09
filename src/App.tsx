import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Newsletter from "./routes/newsletter";
import Home from "./routes/home";
import About from "./routes/about";
import Events from "./routes/events";
import Event from "./routes/event";
import NewsPage from "./routes/newsPage";
import News from "./routes/news";
import Intern from "./routes/intern";
import Login from "./routes/login";
import NotFound from "./routes/notFound";
import "./styles/tailwind.css";
import Impressum from "./routes/impressum";
import Datenschutz from "./routes/datenschutz";
import CookieBot from "react-cookiebot";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import UserProvider from "./components/User/UserProvider";
import { Analytics } from "@vercel/analytics/react";
import NewsletterDialog from "./components/NewsletterDialog/NewsletterDialog";
import Game from "./components/Game/Game";
// import ChristmasQuiz from "./routes/christmasquiz";

const domainGroupId = "7ac8eac0-7fec-493e-a324-eb874ee8aebc";

interface footerProps {
	allData?: object;
}

const App: React.FC<footerProps> = () => {
	const [hasCookieBot, setHasCookieBot] = useState(undefined);

	const location = useLocation();
  const { pathname } = location;

	return (
		<UserProvider>
			<div className="App bg-greyLight relative overflow-hidden min-h-screen flex flex-col justify-between">
				{pathname !== "/game" &&
					<Header />
				}
				<Routes>
					<Route path="*" element={<NotFound />} />
					<Route path="/" element={<Home />} />
					<Route
						path="/intern"
						element={
							<ProtectedRoute>
								<Intern />
							</ProtectedRoute>
						}
					/>
					<Route path="/login" element={<Login />} />
					<Route path="/ueber-uns" element={<About />} />
					<Route path="/veranstaltungen" element={<Events />} />
					<Route path="/berichte" element={<News />} />
					<Route path="/newsletter" element={<Newsletter />} />
					<Route path="/impressum" element={<Impressum />} />
					<Route path="/datenschutz" element={<Datenschutz />} />
					<Route path="/veranstaltungen/:id" element={<Event />} />
					<Route path="/berichte/:id" element={<NewsPage />} />
					{/* <Route path="/weihnachtsquiz" element={<ChristmasQuiz />} /> */}
					<Route path="/game" element={<Game />} />
				</Routes>
				<CookieBot domainGroupId={domainGroupId} />
				<NewsletterDialog />
				{pathname !== "/game" &&
					<Footer />
				}
				<Analytics mode="production"></Analytics>
			</div>
		</UserProvider>
	);
};

export default App;
