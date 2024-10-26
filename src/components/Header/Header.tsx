import { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { List, X } from "phosphor-react";
import logoImg from "../../../src/images/wier-logo.jpeg";
import logoEasternImg from "../../../src/images/wier-logo-ostern.jpg";
import logoChristmasImg from "../../../src/images/wier-logo-weihnachten.jpg";
import logoHalloweenImg from "../../../src/images/wier-logo-halloween.jpg";
import UserContext from "../User/UserContext";

const Header = ({}) => {
	const [isNavActive, setNavActive] = useState();
	const [currentLogo, setCurrentLogo] = useState(logoImg); // State for the logo image

	const { user, handleLogout } = useContext(UserContext);

	const toggleClass = (state: any = undefined) => {
		setNavActive(state === undefined ? !isNavActive : state);
	};

	useEffect(() => {
		window.addEventListener("resize", () => {
			toggleClass(false);
		});
	}, []);

	// Function to determine the current season and set the appropriate logo
	useEffect(() => {
		const now = new Date();
		const month = now.getMonth() + 1; // Months are zero-based in JavaScript, so +1
		const day = now.getDate();

		// Easter period: Assume March 22 to April 25
		const isEaster = (month === 3 && day >= 22) || (month === 4 && day <= 25);

		// Halloween period: October 1 to October 31
		const isHalloween = month === 10;

		// Christmas period: December 1 to January 6
		const isChristmas = (month === 12) || (month === 1 && day <= 6);

		if (isEaster) {
			setCurrentLogo(logoEasternImg);
		} else if (isHalloween) {
			setCurrentLogo(logoHalloweenImg); // Change to Halloween logo if you have one
		} else if (isChristmas) {
			setCurrentLogo(logoChristmasImg);
		} else {
			setCurrentLogo(logoImg); // Default logo
		}
	}, []);

	const navItemAvtive = "font-lato font-bold text-[20px] lg:text-[18px] transition-all text-greenLight hover:text-greenLight";
	const navItemDefault = "font-lato font-bold text-[20px] lg:text-[18px] transition-all hover:text-greenLight";

	return (
		<header className="bg-white h-24  text-greyDark flex items-center lg:left-2/4 lg:-translate-x-1/2 fixed w-full lg:w-11/12 rounded-b-xl border-b-[1px] border-x-[1px] p-[15px] z-[100] shadow-md max-w-[1600px]">
			<div className="flex items-center w-full justify-between lg:justify-start">
				<Link className="flex items-center h-full mr-[50px]" to="/">
					<img src={currentLogo} alt="Logo" className="w-[100px] min-w-[100px]" />
				</Link>
				<div className="space-y-2 block lg:hidden cursor-pointer" onClick={() => toggleClass()}>
					{isNavActive ? <X size={40} className="text-greenLight" weight="bold" /> : <List size={40} className="text-greenLight" weight="bold" />}
				</div>
				<div className={isNavActive ? "block fixed h-screen bg-white pt-24 lg:p-0 top-0 -z-[1] left-0 w-full lg:flex justify-center" : "hidden lg:flex lg:w-full items-center justify-between"}>
					<div className="h-fit lg:h-auto top-[20%] relative lg:flex flex-row lg:w-full lg:justify-between">
						<nav>
							<ul className={isNavActive ? "flex flex-col lg:flex-row items-center justify-between h-full" : "flex items-center justify-between h-full"}>
								<li className="lg:ml-12 mb-5 lg:mb-0">
									<NavLink className={({ isActive }) => (isActive ? navItemAvtive : navItemDefault)} to="/ueber-uns" onClick={() => toggleClass(false)}>
										Über Uns
									</NavLink>
								</li>
								<li className="lg:ml-14 mb-5 lg:mb-0">
									<NavLink className={({ isActive }) => (isActive ? navItemAvtive : navItemDefault)} to="/veranstaltungen" onClick={() => toggleClass(false)}>
										Veranstaltungen
									</NavLink>
								</li>
								<li className="lg:ml-14 mb-5 lg:mb-0">
									<NavLink className={({ isActive }) => (isActive ? navItemAvtive : navItemDefault)} to="/berichte" onClick={() => toggleClass(false)}>
										Berichte
									</NavLink>
								</li>
								<li className="lg:ml-14 mb-5 lg:mb-0">
									<NavLink className={({ isActive }) => (isActive ? navItemAvtive : navItemDefault)} to="/newsletter" onClick={() => toggleClass(false)}>
										Newsletter
									</NavLink>
								</li>
								<li className="lg:ml-14 mb-10 lg:mb-0">
									<a href="https://eifelverein-rheinbach.de/" target="blank" className="font-lato font-bold text-[20px] lg:text-[18px] transition-all hover:text-greenLight">
										Eifelverein
									</a>
								</li>
								{user && (
									<>
										<li className="lg:ml-14 mb-5 lg:mb-0">
											<NavLink className={({ isActive }) => (isActive ? navItemAvtive : navItemDefault)} to="/intern" onClick={() => toggleClass(false)}>
												Intern
											</NavLink>
										</li>
										<li className="lg:ml-14 mb-5 lg:mb-0">
											<NavLink className={({ isActive }) => (isActive ? navItemAvtive : navItemDefault)} to="/login" onClick={() => toggleClass(false)}>
												Logout
											</NavLink>
										</li>
									</>
								)}
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
