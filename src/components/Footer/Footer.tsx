import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import footerImg from "../../../src/images/footer.svg";
import eifelvereinLogoImg from "../../../src/images/eifelverein-logo.png";
import { InstagramLogo, FacebookLogo, ArrowRight, Copyright } from "phosphor-react";

const navItemAvtive = "font-lato text-[20px] lg:text-[18px] text-center lg:text-left text-greenLight hover:text-greenLight transition-all";
const navItemDefault = "font-lato text-[20px] lg:text-[18px] text-center lg:text-left hover:text-greenLight transition-all";

const Footer = ({}) => {
	return (
		<footer className="w-full text-white bottom-0">
			<img src={footerImg} alt="Bild von zwei Rehen im Wald" className="w-[102%] relative -left-[2px] -bottom-[5px] max-w-[102%]"></img>
			<div className="bg-blueMidnight w-full">
				<div className="relative left-2/4 -translate-x-1/2 w-11/12 p-[15px] flex flex-col lg:flex-row justify-between py-20">
					<div className="flex flex-col w-full lg:w-3/12 pb-5 lg:pb-0">
						<NavLink className={({ isActive }) => (isActive ? navItemAvtive : navItemDefault)} to="/ueber-uns">
							Über Uns
						</NavLink>
						<NavLink className={({ isActive }) => (isActive ? navItemAvtive : navItemDefault)} to="/veranstaltungen">
							Veranstaltungen
						</NavLink>
						<NavLink className={({ isActive }) => (isActive ? navItemAvtive : navItemDefault)} to="/berichte">
							Berichte
						</NavLink>
						<NavLink className={({ isActive }) => (isActive ? navItemAvtive : navItemDefault)} to="/newsletter">
							Newsletter
						</NavLink>
						<a href="https://eifelverein-rheinbach.de/" target="blank" className="font-lato text-[20px] lg:text-[18px] text-center lg:text-left hover:text-greenLight transition-all">
							Eifelverein
						</a>
						<NavLink className={({ isActive }) => (isActive ? navItemAvtive : navItemDefault)} to="/intern">
							Intern
						</NavLink>
						<a href="https://jugend.eifel-53359.de/api/wp-admin" target="blank" className="font-lato text-[20px] lg:text-[18px] text-center lg:text-left hover:text-greenLight transition-all">
							Login
						</a>
						<div className="flex flex-row justify-center lg:justify-start mt-5 lg:-ml-1">
							<a href="https://www.instagram.com/eifeljugendrheinbach/" aria-label="Link zum Instagram Account der Eifeljugend Rheinbach">
								<InstagramLogo size={40} className="text-greenLight" weight="bold" />
							</a>
						</div>
					</div>
					<div className="border-b-2 lg:border-r-2 border-white"></div>
					<div className="w-full lg:w-6/12 px-20 flex flex-col items-center py-5 lg:py-0">
						<h3 className="font-lato font-bold text-[24px] text-white leading-[24px] mb-2 text-center">Unser Newsletter</h3>
						<p className="font-lato text-[16px] leading-[16px] mb-8 text-center w-full">Aboniere unseren Newsletter, um auf dem Laufenden zu bleiben.</p>

						<Link className="font-bold rounded-xl bg-greenDefault w-fit text-white py-[12px] px-[70px]" to="/newsletter">
							Anmelden
						</Link>
					</div>
					<div className="border-b-2 lg:border-r-2 border-white"></div>
					<div className="w-full lg:w-3/12 px-5 text-right flex flex-col items-center lg:items-end pb-5 lg:pb-0">
						<p className="mb-5 mt-5 flex lg:justify-end justify-center lg:items-end items-center flex-col">
							<span>Neukirchener Weg 11,</span>
							<span className="mb-5">53359 Rheinbach</span>
							<span>02226/5329</span>
						</p>
						<a href="https://eifelverein-rheinbach.de/" className="flex items-center h-full">
							<img src={eifelvereinLogoImg} alt="Logo" className="w-[100px]" />
						</a>
					</div>
				</div>
			</div>
			<div className="bg-blueDark w-full">
				<div className="relative left-2/4 -translate-x-1/2 w-11/12 py-4 flex flex-col lg:flex-row justify-center lg:justify-between items-center">
					<div className="flex flex-row items-center">
						<Copyright size={16} className="text-white" weight="bold" />
						2023 WIER. All Right Reserved
					</div>
					<div>
						<Link className="font-lato text-[16px] mr-4" to="/impressum">
							Impressum
						</Link>

						<Link className="font-lato text-[16px]" to="/datenschutz">
							Datenschutz
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
