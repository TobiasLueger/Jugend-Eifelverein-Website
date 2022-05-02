import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import axios from "axios";
import "./tailwind.css";

function App() {
	const [data, setData] = useState({ data: [], meta: {} });

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(
				"https://api2-eifeljugend.herokuapp.com/api/pages?populate=*"
				/* 'http://localhost:55555/api/pages?populate=*', */
			);
			setData(result.data);
		};
		fetchData();
	}, []);

	return (
		<div className="App">
			<Header />
			<main></main>
			<Footer allData={data} />
		</div>
	);
}

export default App;
