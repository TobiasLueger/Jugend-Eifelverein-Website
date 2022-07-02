import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { InstagramLogo, FacebookLogo } from "phosphor-react";

const Footer = ({}) => {
	return (
		<footer className="w-full text-white bottom-0">
			<img
				src="src/images/footer.svg"
				className="w-[102%] relative -left-[2px] -bottom-[2px] max-w-[102%]"
			></img>
			<div className="bg-[#133a4a] p-[15px] flex flex-row w-full justify-between px-20 py-20">
				<div className="flex flex-col w-3/12">
					<Link className="font-lato text-[20px] lg:text-[18px]" to="/about">
						Über Uns
					</Link>
					<Link className="font-lato text-[20px] lg:text-[18px]" to="/events">
						Events
					</Link>
					<Link className="font-lato text-[20px] lg:text-[18px]" to="/berichte">
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
				<div className="w-6/12 px-5">
					<h3 className="font-lato font-bold text-[24px] leading-[24px] mb-2">
						Abbonier unseren Newsletter um auf dem laufenden zu bleiben.
					</h3>
					<form
						action="https://seu2.cleverreach.com/f/307538-320132/wcs/"
						method="post"
						target="_blank"
					>
						<div>
							<div className="flex flex-row mb-3">
								<div id="7136369" className="w-[50%]">
									<div>
										<input
											id="cr_form-input--text7136369"
											type="text"
											name="1013771"
											required
											placeholder="Vorname*"
											className="text-[#fff] font-bold bg-transparent p-2 rounded-lg border border-[#fff] border-r-2"
										/>
									</div>
								</div>
								<div id="7136372" className="w-[50%]">
									<div>
										<input
											id="cr_form-input--text7136372"
											type="text"
											name="1013773"
											required
											placeholder="Nachname*"
											className="text-[#fff] font-bold bg-transparent p-2 rounded-lg border border-[#fff] border-r-2"
										/>
									</div>
								</div>
							</div>
							<div className="flex flex-row">
								<div id="7136363" className="w-[50%]">
									<div>
										<input
											type="email"
											id="text7136363"
											name="email"
											required
											placeholder="Email*"
											className="text-[#fff] font-bold bg-transparent p-2 rounded-lg border border-[#fff] border-r-2"
										/>
									</div>
								</div>
								<div id="7136365" className="w-[50%]">
									<button
										className="g-recaptcha font-bold rounded-xl bg-green-700 text-white py-[12px] px-[70px]"
										data-sitekey=""
										data-callback="onSubmit"
										data-action="submit"
									>
										Anmelden
									</button>
								</div>
								<div>
									<div
										className="g-recaptcha"
										data-sitekey="6Lfhcd0SAAAAAOBEHmAVEHJeRnrH8T7wPvvNzEPD"
									></div>
								</div>
							</div>
						</div>
					</form>
				</div>
				<div className="border-r-2 border-[#0D2833]"></div>
				<div className="w-3/12">Neukirchener Weg 11, 53359 Rheinbach</div>
			</div>
			<div className="bg-[#0D2833] py-4">
				<Link
					className="font-lato font-bold text-[20px] lg:text-[18px]"
					to="/about"
				>
					Impressum
				</Link>

				<Link
					className="font-lato font-bold text-[20px] lg:text-[18px]"
					to="/about"
				>
					Datenschutz
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
