import React, { useState, useEffect } from "react";
import { helloMessage } from "../../lib/getData";

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
		<header className="bg-white h-24  text-black flex items-center left-2/4 -translate-x-1/2 fixed w-11/12 rounded-b-3xl rounded-br-3xl justify-between p-[15px]">
			<div className="flex items-center">
				<a href="/" className="flex items-center h-full mr-[50px]">
					<img
						src="https://jugend.eifel-53359.de/www/img/logo-short.png"
						alt="Logo"
						className="w-[115px]"
					/>
				</a>
				<ul className="flex items-center h-full">
					{data.data.map(({ attributes, id }) => (
						<li key={id} className={id}>
							<a
								className="font-lato font-bold text-[20px]"
								href={attributes.slug}
							>
								{attributes.title}
							</a>
						</li>
					))}
				</ul>
			</div>
			<button className="flex justify-center items-center justify-self-end font-bold rounded-full bg-green-700 text-white py-[12px] px-[70px] mr-[20px]">
				Login
			</button>
		</header>
	);
};

export default Header;
