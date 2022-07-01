import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { InstagramLogo, FacebookLogo } from "phosphor-react";

export default function Footer() {
	return (
		<footer className="w-full text-white bottom-0">
			<img
				src="src/images/footer.svg"
				className="w-[102%] relative -left-[2px] -bottom-[2px] max-w-[102%]"
			></img>
			<div className="bg-[#133a4a] p-[15px] flex flex-row w-full justify-between px-20">
				<div className="flex flex-col w-3/12">
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
					<div className="flex row">
						<a href="https://www.instagram.com/eifeljugendrheinbach/">
							<InstagramLogo size={40} color="#67B31F" weight="bold" />
						</a>

						<a href="">
							<FacebookLogo size={40} color="#67B31F" weight="bold" />
						</a>
					</div>
				</div>
				<div className="border-r"></div>
				<div className="w-6/12 px-5">
					<h3 className="font-lato font-bold text-[24px] leading-[24px]">
						Abbonier unseren Newsletter um auf dem laufenden zu bleiben.
					</h3>
					<form
						action="https://seu2.cleverreach.com/f/307538-320132/wcs/"
						method="post"
						target="_blank"
					>
						<div>
							<div>
								<div id="7136369" rel="text">
									<div>
										<label htmlFor="cr_form-input--text7136369">Vorname*</label>
										<input
											id="cr_form-input--text7136369"
											type="text"
											name="1013771"
											placeholder="Max"
										/>
									</div>
								</div>
								<div id="7136372" rel="text">
									<div>
										<label htmlFor="cr_form-input--text7136372">
											Nachname*
										</label>
										<input
											id="cr_form-input--text7136372"
											type="text"
											name="1013773"
											placeholder="Mustermann"
										/>
									</div>
								</div>
								<div id="7136363" rel="email">
									<div>
										<label htmlFor="text7136363">E-Mail*</label>
										<input
											type="email"
											id="text7136363"
											name="email"
											placeholder="name@example.com"
										/>
									</div>
								</div>
								<div>
									<div
										className="g-recaptcha"
										data-sitekey="6Lfhcd0SAAAAAOBEHmAVEHJeRnrH8T7wPvvNzEPD"
									></div>
								</div>
								<div id="7136365" rel="button">
									<button
										className="g-recaptcha"
										data-sitekey=""
										data-callback="onSubmit"
										data-action="submit"
									>
										Anmelden
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
				<div className="border-r"></div>
				<div className="w-3/12">Neukirchener Weg 11, 53359 Rheinbach</div>
			</div>
		</footer>
	);
}
