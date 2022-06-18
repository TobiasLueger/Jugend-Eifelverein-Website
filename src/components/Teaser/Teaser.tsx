import { CaretDown } from "phosphor-react";
import { useState, useEffect } from "react";

export default function Teaser() {

	return (
		<div className="w-full flex flex-row gap-16">
			<div className="bg-white shadow-2xl p-4 rounded-2xl w-[50%]">
        <img className="rounded-2xl" src="/src/images/gruppenfoto.png" alt="" />
      </div>
      <div className="w-[50%] pt-5">
        <h2 className="font-lato font-bold text-[24px] leading-[24px] lg:text-[60px] lg:leading-[60px]">Ich bin eine Überschrift</h2>
        <p className="text-[24px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet culpa nostrum enim quia error in. Aspernatur maxime dolorem id libero excepturi odit minus nulla quasi veniam non quo, necessitatibus impedit.</p>
        <a
							href="/login"
							className="flex justify-center items-center justify-self-end font-bold rounded-full bg-green-700 text-white py-[12px] px-[70px] lg:mr-[16px] lg:ml-24"
						>
							Zum  Event
						</a>
      </div>
		</div>
	);
}
