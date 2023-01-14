import { CaretDown } from "phosphor-react";
import { useState, useEffect } from "react";
import stageImg from "../../../src/images/bg2.svg";

export default function Stage() {
	function scrollDown() {
		window.scrollTo({
			top: window.innerHeight,
			left: 0,
			behavior: "smooth",
		});
	}

	return (
		<>
			<div className="w-screen h-screen relative overflow-hidden ">
				<img
					src={stageImg}
					alt="Wir sind mehr als nur wandern"
					className="w-screen h-screen object-cover object-left-bottom z-0 absolute top-0 left-0"
				/>
				<div className="relative w-full h-full left-1/2 -translate-x-1/2 z-10">
					<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white bg-opacity-60 w-fit bg-opacity-80 p-[15px] flex flex-col justify-center items-center rounded-3xl">
						<div className="w-fit my-0 mx-auto lg:m-0">
							<h1 className="font-lato font-bold text-[30px] leading-[30px] lg:text-[60px] lg:leading-[60px] text-greenLight">
								WIER
								<p className="font-lato font-bold text-[28px] leading-[28px] lg:text-[50px] lg:leading-[50px] text-greenDark lg:ml-12">
									sind mehr als nur wandern
								</p>
							</h1>
						</div>
					</div>
					<div
						className="absolute bottom-4 left-2/4 -translate-x-1/2 rounded-full bg-white p-2 animate-bounceCenter cursor-pointer"
						onClick={scrollDown}
					>
						<CaretDown size={30} className="text-greenLight" weight="bold" />
					</div>
				</div>
			</div>
		</>
	);
}
