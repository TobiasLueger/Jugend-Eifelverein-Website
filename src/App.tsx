import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
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
		<div className="App bg-slate-600 h-screen">
			<Header />
			<main className="pt-[150px] h-[3000px]"></main>
			<Footer />
		</div>
	);
};

export default App;
