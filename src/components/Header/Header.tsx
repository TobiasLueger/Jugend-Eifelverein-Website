import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { List, X } from "phosphor-react";
//import { helloMessage } from "../../lib/getData";

const Header = ({}) => {
	const [data, setData] = useState({ data: [], meta: {} });

	const [isActive, setActive] = useState(false);

	const toggleClass = (state = undefined) => {
		setActive(state === undefined ? !isActive : state);
	};

	useEffect(() => {
		window.addEventListener("resize", () => {
			toggleClass(false);
		});
	}, []);

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
		<header className="bg-white h-24  text-black flex items-center left-2/4 -translate-x-1/2 fixed w-11/12 rounded-b-3xl p-[15px] z-[100]">
			<div className="flex items-center w-full justify-between lg:justify-start">
				<a href="/" className="flex items-center h-full mr-[50px]">
					<img
						src="https://jugend.eifel-53359.de/www/img/wier-logo.jpeg"
						alt="Logo"
						className="w-[100px]"
					/>
				</a>
				<div
					className="space-y-2 block lg:hidden cursor-pointer"
					onClick={() => toggleClass()}
				>
					{isActive ? (
						<X size={40} color="#67B31F" weight="bold" />
					) : (
						<List size={40} color="#67B31F" weight="bold" />
					)}
				</div>
				<div
					className={
						isActive
							? "block fixed h-screen bg-white pt-24 lg:p-0 top-0 -z-[1] -left-[32px] navi-w lg:flex justify-center"
							: "hidden lg:flex lg:w-full items-center justify-between"
					}
				>
					<div className="h-fit lg:h-auto top-[20%] relative lg:flex flex-row lg:w-full lg:justify-between">
						<nav>
							<ul
								className={
									isActive
										? "flex flex-col lg:flex-row items-center justify-between h-full"
										: "flex items-center justify-between h-full"
								}
							>
								<li className="lg:ml-12 mb-5 lg:mb-0">
									<Link
										className="font-lato font-bold text-[20px] lg:text-[18px]"
										to="/ueber-uns"
										onClick={() => toggleClass(false)}
									>
										Über Uns
									</Link>
								</li>
								<li className="lg:ml-12 mb-5 lg:mb-0">
									<Link
										className="font-lato font-bold text-[20px] lg:text-[18px]"
										to="/events"
										onClick={() => toggleClass(false)}
									>
										Events
									</Link>
								</li>
								<li className="lg:ml-12 mb-5 lg:mb-0">
									<Link
										className="font-lato font-bold text-[20px] lg:text-[18px]"
										to="/berichte"
										onClick={() => toggleClass(false)}
									>
										Berichte
									</Link>
								</li>
								<li className="lg:ml-12 mb-5 lg:mb-0">
									<Link
										className="font-lato font-bold text-[20px] lg:text-[18px]"
										to="/mitglied-werden"
										onClick={() => toggleClass(false)}
									>
										Mitglied werden
									</Link>
								</li>
								<li className="lg:ml-12 mb-10 lg:mb-0">
									<a
										href="https://eifelverein-rheinbach.de/"
										target="blank"
										className="font-lato font-bold text-[20px] lg:text-[18px]"
									>
										Eifelverein
									</a>
								</li>
							</ul>
						</nav>

						<a
							href="/login"
							className="flex justify-center items-center justify-self-end font-bold rounded-full bg-green-700 text-white py-[12px] px-[70px] lg:mr-[16px] lg:ml-24"
							onClick={() => toggleClass(false)}
						>
							Login
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
