import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { InstagramLogo, FacebookLogo } from "phosphor-react";

export default function Footer() {
	return (
		<footer className="w-full bg-white absolute bottom-0 left-2/4 -translate-x-1/2 fixed w-11/12 rounded-t-3xl p-[15px]">
			<div>
				<h3>Folge uns:</h3>
				<a href="https://www.instagram.com/eifeljugendrheinbach/">
					<InstagramLogo size={40} color="#67B31F" weight="bold" />
				</a>

				<a href="">
					<FacebookLogo size={40} color="#67B31F" weight="bold" />
				</a>
			</div>

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
		</footer>
	);
}
