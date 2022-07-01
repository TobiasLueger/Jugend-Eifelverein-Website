import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { InstagramLogo, FacebookLogo } from "phosphor-react";

export default function Footer() {
	return (
		<footer className="w-full text-white bottom-0">
			<img src="src/images/footer.svg" className="w-full"></img>
			<div className="bg-[#133a4a] p-[15px]">
				<div>
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
					<a href="https://www.instagram.com/eifeljugendrheinbach/">
						<InstagramLogo size={40} color="#67B31F" weight="bold" />
					</a>

					<a href="">
						<FacebookLogo size={40} color="#67B31F" weight="bold" />
					</a>
				</div>
				<div>
					<div>
						Abbonier unseren Newsletter um auf dem laufenden zu bleiben.
					</div>
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
										class="g-recaptcha"
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
				<div>Neukirchener Weg 11, 53359 Rheinbach</div>
			</div>
		</footer>
	);
}
