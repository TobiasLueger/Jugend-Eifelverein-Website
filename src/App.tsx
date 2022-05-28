import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Member from "./routes/member";
import Home from "./routes/home";
import About from "./routes/about";
import Events from "./routes/events";
import News from "./routes/news";
import NotFound from "./routes/notFound";
/* import axios from "axios"; */
import "./styles/tailwind.css";

interface footerProps {
	allData?: object;
}

const App: React.FC<footerProps> = () => {
	const [data, setData] = useState({ data: [], meta: {} });

	/* useEffect(() => {
		const fetchData = async () => {
			const result = await axios(
				"https://api2-eifeljugend.herokuapp.com/api/pages?populate=*"
			 'http://localhost:55555/api/pages?populate=*', 
			);
			setData(result.data);
		};
		fetchData();
	}, []);
 */
	return (
		<div className="App bg-white h-screen">
			<Header />
			<Routes>
				<Route path="*" element={<NotFound />} />
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/events" element={<Events />} />
				<Route path="/news" element={<News />} />
				<Route path="/members" element={<Member />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
