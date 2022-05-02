import React, { useState, useEffect } from "react";
import axios from "axios";
import { helloMessage } from "../../lib/getData";
import HeaderWrapper from "./components/HeaderWrapper";

const Header = ({}) => {
	const [data, setData] = useState({ data: [], meta: {} });

	useEffect(() => {
		helloMessage().then((res) => setData(res));
	}, []);
	// const [data, setData] = useState({ data: [], meta: {} })

	// useEffect(() => {
	//   // const fetchData = async () => {
	//   //   const result = await axios(
	//   //    //'https://api2-eifeljugend.herokuapp.com/api/pages?populate=*',
	//   //    'http://localhost:55555/api/pages?populate=*',
	//   //   );
	//   //   setData(result.data);
	//   // };
	//   // fetchData();
	//   setData(getData);
	// }, []);

	//console.log(data);
	// const data = getData;

	return (
		<header className="bg-gray-800 text-white">
			<p>Header</p>
			<ul>
				{data.data.map(({ attributes, id }) => (
					<li key={id} className={id}>
						<a href={attributes.slug}>{attributes.title}</a>
					</li>
				))}
			</ul>
		</header>
	);
};

export default Header;
