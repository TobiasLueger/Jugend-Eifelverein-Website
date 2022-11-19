import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import footerImg from "../../../src/images/footer.svg";
import eifelvereinLogoImg from "../../../src/images/eifelverein-logo.png";
import {
	InstagramLogo,
	FacebookLogo,
	ArrowRight,
	Copyright,
} from "phosphor-react";

const Footer = ({}) => {
	return (
		<footer className="w-full text-white bottom-0">
			<img
				src={footerImg}
				className="w-[102%] relative -left-[2px] -bottom-[2px] max-w-[102%]"
			></img>
			<div className="bg-[#133a4a] w-full">
				<div className="relative left-2/4 -translate-x-1/2 w-11/12 p-[15px] flex flex-col lg:flex-row justify-between py-20">
					<div className="flex flex-col w-full lg:w-3/12 pb-5 lg:pb-0">
						<Link
							className="font-lato text-[20px] lg:text-[18px] text-center lg:text-left"
							to="/about"
						>
							Über Uns
						</Link>
						<Link
							className="font-lato text-[20px] lg:text-[18px] text-center lg:text-left"
							to="/events"
						>
							Events
						</Link>
						<Link
							className="font-lato text-[20px] lg:text-[18px] text-center lg:text-left"
							to="/berichte"
						>
							Berichte
						</Link>
						<Link
							className="font-lato text-[20px] lg:text-[18px] text-center lg:text-left"
							to="/newsletter"
						>
							Newsletter
						</Link>
						<a
							href="https://eifelverein-rheinbach.de/"
							target="blank"
							className="font-lato text-[20px] lg:text-[18px] text-center lg:text-left"
						>
							Eifelverein
						</a>
						<a
							href="https://jugend.eifel-53359.de/api/wp-admin"
							target="blank"
							className="font-lato text-[20px] lg:text-[18px] text-center lg:text-left"
						>
							Login
						</a>
						<div className="flex flex-row justify-center lg:justify-start mt-5 lg:-ml-1">
							<a href="https://www.instagram.com/eifeljugendrheinbach/">
								<InstagramLogo size={40} color="#67B31F" weight="bold" />
							</a>

							{/* <a href="">
								<FacebookLogo size={40} color="#67B31F" weight="bold" />
							</a> */}
						</div>
					</div>
					<div className="border-b-2 lg:border-r-2 border-[#fff]"></div>
					<div className="w-full lg:w-6/12 px-20 flex flex-col items-center py-5 lg:py-0">
						<h3 className="font-lato font-bold text-[24px] text-white leading-[24px] mb-2 text-center">
							Unser Newsletter
						</h3>
						<p className="font-lato text-[16px] leading-[16px] mb-8 text-center w-full">
							Abbonier unseren Newsletter um auf dem laufenden zu bleiben.
						</p>

						<a
							className="font-bold rounded-xl bg-green-700 w-fit text-white py-[12px] px-[70px]"
							href="https://jugend.eifel-53359.de/anmeldung_newsletter.html"
						>
							Anmelden
						</a>
					</div>
					<div className="border-b-2 lg:border-r-2 border-[#fff]"></div>
					<div className="w-full lg:w-3/12 px-5 text-right flex flex-col items-center lg:items-end pb-5 lg:pb-0">
						<p className="mb-5">
							Neukirchener Weg 11, <br />
							53359 Rheinbach
						</p>

						<p>02226/5329</p>
						<a
							href="https://eifelverein-rheinbach.de/"
							className="flex items-center h-full"
						>
							<img src={eifelvereinLogoImg} alt="Logo" className="w-[100px]" />
						</a>
					</div>
				</div>
			</div>
			<div className="bg-[#0D2833] w-full">
				<div className="relative left-2/4 -translate-x-1/2 w-11/12 py-4 flex flex-row justify-between">
					<div className="flex flex-row items-center">
						<Copyright size={16} color="#fff" weight="bold" />
						2022 WIER. All Right Reserved
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
