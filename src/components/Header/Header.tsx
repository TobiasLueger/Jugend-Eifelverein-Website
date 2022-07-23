import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { List, X } from "phosphor-react";

const Header = ({}) => {
	const [isActive, setActive] = useState();

	const toggleClass = (state: any = undefined) => {
		setActive(state === undefined ? !isActive : state);
	};

	useEffect(() => {
		window.addEventListener("resize", () => {
			toggleClass(false);
		});
	}, []);

	return (
		<header className="bg-white h-24  text-black flex items-center left-2/4 -translate-x-1/2 fixed w-11/12 rounded-b-[12px] border-[#133849] border-b-[1px] border-x-[1px] p-[15px] z-[100]">
			<div className="flex items-center w-full justify-between lg:justify-start">
				<a href="/" className="flex items-center h-full mr-[50px]">
					<img
						src="https://jugend.eifel-53359.de/www/img/wier-logo.jpeg"
						alt="Logo"
						className="w-[100px] min-w-[100px]"
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
								<li className="lg:ml-14 mb-5 lg:mb-0">
									<Link
										className="font-lato font-bold text-[20px] lg:text-[18px]"
										to="/events"
										onClick={() => toggleClass(false)}
									>
										Events
									</Link>
								</li>
								<li className="lg:ml-14 mb-5 lg:mb-0">
									<Link
										className="font-lato font-bold text-[20px] lg:text-[18px]"
										to="/berichte"
										onClick={() => toggleClass(false)}
									>
										Berichte
									</Link>
								</li>
								<li className="lg:ml-14 mb-5 lg:mb-0">
									<Link
										className="font-lato font-bold text-[20px] lg:text-[18px]"
										to="/mitglied-werden"
										onClick={() => toggleClass(false)}
									>
										Mitglied werden
									</Link>
								</li>
								<li className="lg:ml-14 mb-10 lg:mb-0">
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
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
