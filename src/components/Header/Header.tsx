import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { helloMessage } from "../../lib/getData";

const Header = ({}) => {
	const [data, setData] = useState({ data: [], meta: {} });

	/* 	useEffect(() => {
		helloMessage().then((res) => setData(res));
	}, []); */
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
		<header className="bg-white h-24  text-black flex items-center left-2/4 -translate-x-1/2 fixed w-11/12 rounded-b-3xl rounded-br-3xl justify-between p-[15px] z-[100]">
			<div className="flex items-center justify-between w-full">
				<a href="/" className="flex items-center h-full mr-[50px]">
					<img
						src="https://jugend.eifel-53359.de/www/img/wier-logo.jpeg"
						alt="Logo"
						className="w-[100px]"
					/>
				</a>
				<div class="space-y-2 block lg:hidden">
					<div class="w-8 h-0.5 bg-gray-600"></div>
					<div class="w-8 h-0.5 bg-gray-600"></div>
					<div class="w-8 h-0.5 bg-gray-600"></div>
				</div>
				<div className="hidden lg:flex items-center justify-between">
					<nav>
						<ul className="flex items-center justify-between h-full">
							<li className="ml-12">
								<Link className="font-lato font-bold text-[18px]" to="/about">
									Über Uns
								</Link>
							</li>
							<li className="ml-12">
								<Link className="font-lato font-bold text-[18px]" to="/events">
									Events
								</Link>
							</li>
							<li className="ml-12">
								<Link className="font-lato font-bold text-[18px]" to="/news">
									Berichte
								</Link>
							</li>
							<li className="ml-12">
								<Link className="font-lato font-bold text-[18px]" to="/members">
									Mitglied werden
								</Link>
							</li>
							<li className="ml-12">
								<a
									href="https://eifelverein-rheinbach.de/"
									target="blank"
									className="font-lato font-bold text-[18px]"
								>
									Eifelverein
								</a>
							</li>
						</ul>
					</nav>

					<a
						href="/login"
						className="flex justify-center items-center justify-self-end font-bold rounded-full bg-green-700 text-white py-[12px] px-[70px] mr-[16px]"
					>
						Login
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
