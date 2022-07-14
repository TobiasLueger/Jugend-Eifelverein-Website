import { CaretDown } from "phosphor-react";
import { useState, useEffect } from "react";

export default function Teaser() {
	return (
		<div className="w-full flex flex-row gap-16 bg-[#133849] p-10 rounded-2xl my-5">
			<div className=" w-[50%]">
				<img className="rounded-2xl" src="/src/images/gruppenfoto.png" alt="" />
			</div>
			<div className="w-[50%] pt-5 text-white">
				<h2>Ich bin eine Überschrift</h2>
				<p className="text-[24px] text-white">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet culpa
					nostrum enim quia error in. Aspernatur maxime dolorem id libero
					excepturi odit minus nulla quasi veniam non quo, necessitatibus
					impedit.
				</p>
				<a
					href="[#EVENT-PAGE]"
					className="flex justify-center items-center justify-self-start font-bold rounded-2xl bg-green-700 text-white py-[12px] px-[70px] w-fit"
				>
					Anmelden
				</a>
			</div>
		</div>
	);
}
