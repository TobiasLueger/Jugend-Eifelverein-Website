import { CaretDown } from "phosphor-react";

export default function Stage() {
	return (
		<main>
			<div className="bg-[url('../images/bg.png')] bg-cover bg-no-repeat bg-center w-full h-screen relative overflow-hidden">
				<div className="relative w-11/12 h-full left-2/4 -translate-x-1/2">
					<div className="absolute top-2/4 -translate-y-1/2 lg:bottom-0 lg:top-auto lg:block lg:bg-transparent w-full bg-white bg-opacity-30 p-[15px] flex flex-row">
						<h1 className="font-lato font-bold text-[24px] leading-[24px] lg:text-[60px] lg:leading-[60px] text-[#67B31F]">
							WIER
						</h1>
						<p className="font-lato font-bold text-[22px] leading-[22px] lg:text-[50px] lg:leading-[50px] text-[#FFFFFF] ml-2 lg:ml-12">
							sind mehr als nur wandern
						</p>
					</div>
					<div className="bg-[#ffffff] bg-opacity-50 absolute right-0 rounded-full bottom-24 hidden lg:flex w-[390px] h-[390px] flex justify-center items-center before:content-[''] before:absolute before:rounded-full before:bg-[#FFFFFF] before:bg-opacity-50 before:w-[370px] before:h-[370px] before:flex before:justify-center before:items-center">
						<div className=" w-[90%] h-[90%] bg-[url('../images/gruppenfoto.png')] bg-cover bg-no-repeat bg-center right-0 rounded-full bottom-24 z-[1]"></div>
					</div>
					<div className="absolute bottom-4 left-2/4 -translate-x-1/2 rounded-full bg-white p-2 animate-bounceCenter">
						<CaretDown size={40} color="#67B31F" weight="bold" />
					</div>
				</div>
			</div>
		</main>
	);
}
