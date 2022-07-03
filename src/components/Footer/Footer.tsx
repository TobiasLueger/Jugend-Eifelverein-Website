import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
				src="src/images/footer.svg"
				className="w-[102%] relative -left-[2px] -bottom-[2px] max-w-[102%]"
			></img>
			<div className="bg-[#133a4a] w-full">
				<div className="relative left-2/4 -translate-x-1/2 w-11/12 p-[15px] flex flex-row justify-between py-20">
					<div className="flex flex-col w-3/12">
						<Link className="font-lato text-[20px] lg:text-[18px]" to="/about">
							Über Uns
						</Link>
						<Link className="font-lato text-[20px] lg:text-[18px]" to="/events">
							Events
						</Link>
						<Link
							className="font-lato text-[20px] lg:text-[18px]"
							to="/berichte"
						>
							Berichte
						</Link>
						<Link
							className="font-lato text-[20px] lg:text-[18px]"
							to="/mitglied-werden"
						>
							Mitglied werden
						</Link>
						<a
							href="https://eifelverein-rheinbach.de/"
							target="blank"
							className="font-lato text-[20px] lg:text-[18px]"
						>
							Eifelverein
						</a>
						<Link className="font-lato text-[20px] lg:text-[18px]" to="#">
							Login
						</Link>
						<div className="flex row mt-5">
							<a href="https://www.instagram.com/eifeljugendrheinbach/">
								<InstagramLogo size={40} color="#67B31F" weight="bold" />
							</a>

							<a href="">
								<FacebookLogo size={40} color="#67B31F" weight="bold" />
							</a>
						</div>
					</div>
					<div className="border-r-2 border-[#0D2833]"></div>
					<div className="w-6/12 px-20 flex flex-col items-center">
						<h3 className="font-lato font-bold text-[24px] leading-[24px] mb-2 text-center">
							Unser Newsletter
						</h3>
						<p className="font-lato italic text-[16px] leading-[16px] mb-8 text-center w-full">
							Abbonier unseren Newsletter um auf dem laufenden zu bleiben.
						</p>

						<a
							className="font-bold rounded-xl bg-green-700 w-fit text-white py-[12px] px-[70px]"
							href="https://jugend.eifel-53359.de/anmeldung_newsletter.html"
						>
							Anmelden
						</a>
					</div>
					<div className="border-r-2 border-[#0D2833]"></div>
					<div className="w-3/12 px-5 text-right flex flex-col items-end">
						<Link
							className="font-lato font-bold text-[16px] flex flex-row items-center mb-5 transition-all group"
							to="/message"
						>
							<p>Schreib uns eine Nachricht </p>
							<ArrowRight
								size={16}
								color="#fff"
								weight="bold"
								className="ml-2  transition-all group-hover:ml-3"
							/>
						</Link>
						<p className="mb-5">
							Neukirchener Weg 11, <br />
							53359 Rheinbach
						</p>

						<p>02226/5329</p>
						<a
							href="https://eifelverein-rheinbach.de/"
							className="flex items-center h-full"
						>
							<img
								src="src/images/eifelverein-logo.png"
								alt="Logo"
								className="w-[100px]"
							/>
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
