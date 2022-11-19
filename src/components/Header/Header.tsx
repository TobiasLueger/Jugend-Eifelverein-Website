import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { List, X } from "phosphor-react";
import logoImg from "../../../src/images/wier-logo.jpeg";

const Header = ({}) => {
	const [isNavActive, setNavActive] = useState();

	const toggleClass = (state: any = undefined) => {
		setNavActive(state === undefined ? !isNavActive : state);
	};

	useEffect(() => {
		window.addEventListener("resize", () => {
			toggleClass(false);
		});
	}, []);

	return (
		<header className="bg-white dark:bg-black h-24  text-black dark:text-white flex items-center lg:left-2/4 lg:-translate-x-1/2 fixed w-full lg:w-11/12 rounded-b-xl border-b-[1px] border-x-[1px] p-[15px] z-[100] shadow-md">
			<div className="flex items-center w-full justify-between lg:justify-start">
				<a href="/" className="flex items-center h-full mr-[50px]">
					<img src={logoImg} alt="Logo" className="w-[100px] min-w-[100px]" />
				</a>
				<div
					className="space-y-2 block lg:hidden cursor-pointer"
					onClick={() => toggleClass()}
				>
					{isNavActive ? (
						<X size={40} color="#67B31F" weight="bold" />
					) : (
						<List size={40} color="#67B31F" weight="bold" />
					)}
				</div>
				<div
					className={
						isNavActive
							? "block fixed h-screen bg-white pt-24 lg:p-0 top-0 -z-[1] left-0 w-full lg:flex justify-center"
							: "hidden lg:flex lg:w-full items-center justify-between"
					}
				>
					<div className="h-fit lg:h-auto top-[20%] relative lg:flex flex-row lg:w-full lg:justify-between">
						<nav>
							<ul
								className={
									isNavActive
										? "flex flex-col lg:flex-row items-center justify-between h-full"
										: "flex items-center justify-between h-full"
								}
							>
								<li className="lg:ml-12 mb-5 lg:mb-0">
									<NavLink
										className={({ isActive }) =>
											isActive
												? "font-lato font-bold text-[20px] lg:text-[18px] transition-all text-[#67b31b] hover:text-[#67b31b]"
												: "font-lato font-bold text-[20px] lg:text-[18px] transition-all hover:text-[#67b31b]"
										}
										to="/ueber-uns"
										onClick={() => toggleClass(false)}
									>
										Über Uns
									</NavLink>
								</li>
								<li className="lg:ml-14 mb-5 lg:mb-0">
									<NavLink
										className={({ isActive }) =>
											isActive
												? "font-lato font-bold text-[20px] lg:text-[18px] transition-all text-[#67b31b] hover:text-[#67b31b]"
												: "font-lato font-bold text-[20px] lg:text-[18px] transition-all hover:text-[#67b31b]"
										}
										to="/veranstaltungen"
										onClick={() => toggleClass(false)}
									>
										Veranstaltungen
									</NavLink>
								</li>
								<li className="lg:ml-14 mb-5 lg:mb-0">
									<NavLink
										className={({ isActive }) =>
											isActive
												? "font-lato font-bold text-[20px] lg:text-[18px] transition-all text-[#67b31b] hover:text-[#67b31b]"
												: "font-lato font-bold text-[20px] lg:text-[18px] transition-all hover:text-[#67b31b]"
										}
										to="/berichte"
										onClick={() => toggleClass(false)}
									>
										Berichte
									</NavLink>
								</li>
								<li className="lg:ml-14 mb-5 lg:mb-0">
									<NavLink
										className={({ isActive }) =>
											isActive
												? "font-lato font-bold text-[20px] lg:text-[18px] transition-all text-[#67b31b] hover:text-[#67b31b]"
												: "font-lato font-bold text-[20px] lg:text-[18px] transition-all hover:text-[#67b31b]"
										}
										to="/newsletter"
										onClick={() => toggleClass(false)}
									>
										Newsletter
									</NavLink>
								</li>
								<li className="lg:ml-14 mb-10 lg:mb-0">
									<a
										href="https://eifelverein-rheinbach.de/"
										target="blank"
										className="font-lato font-bold text-[20px] lg:text-[18px] transition-all hover:text-[#67b31b]"
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
