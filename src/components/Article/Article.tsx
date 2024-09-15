import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import Pill from "../Pill/Pill";
import { useState } from "react";
import defaultImg from "../../../src/images/default.jpg";

export default function Article({ title, data, id, loading = false }: { title?: string; data?: any; id?: number; loading?: boolean; }) {
	const [hover, setHover] = useState(false);
	const [delayHandler, setDelayHandler] = useState(setTimeout(() => {}));

	const handleMouseEnter = () => {
		setDelayHandler(
			setTimeout(() => {
				setHover(true);
			}, 500)
		);
	};

	const handleMouseLeave = () => {
		clearTimeout(delayHandler);
		setHover(false);
	};
	return (
		<div className="teaser w-full h-full relative block group hover:z-[1] min-w-[300px] md:min-w-0 flex flex-col justify-between" key={id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			{loading ? (
				<>
					<div className="bg-greyLoading w-full h-[179px]a lg:h-[210px] relative overflow-hidden object-cover rounded-[12px] animate-pulse">
						<div className="bg-greyLoading h-[179px] lg:h-[210px] w-full"></div>
					</div>
					<div className="w-full pt-[20px] pb-[10px] lg:py-[5px] animate-pulse">
						<div className="mb-[10px] flex gap-3">
							<div className="ml-3">
								<h3 className="h5 mt-3 mb-2">
									<div className="h-[21px] w-24 bg-greyloading rounded-[12px]"></div>
								</h3>
								<div className="m-0 mb-1 items-center flex">
									<span className="mr-2">
										<div className="bg-greyLoading h-[20px] w-[20px] rounded-full"></div>
									</span>
									<div className="h-[18px] w-20 bg-greyloading rounded-[12px]"></div>
								</div>

								<div className="flex flex-row flex-wrap mt-3">
									<div className="mr-2">
										<div className="bg-greyloading h-[20px] w-[20px] rounded-full"></div>
									</div>
									<div className="h-[18px] w-40 bg-greyloading rounded-[12px]"></div>
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				<div className="w-full relative bg-greyloading overflow-hidden rounded-[12px]">
					<img className="w-full relative overflow-hidden object-contain transition-all group-hover:scale-[102%]" src={data.artikel_bild ? data.artikel_bild : defaultImg} alt={title} />
				</div>
			)}

			{!loading && (
				<div className="w-full pt-[20px] pb-[10px] lg:py-[5px]">
					<div className="mb-[10px] flex gap-3">
						<div className="ml-3">
							<h3 className="h5 mt-3 mb-2 flex gap-4 items-center">
								{title}
								{data.runtergesetzt && (
									<div className=" lg:bottom-[15px] right-[10px] lg:right-[15px]">
										<Pill lowPrice={data.runtergesetzt} />
									</div>
								)}
							</h3>
							{data.artikel_preis && 
								<div className="flex flex-row gap-1">
									{data.runtergesetzt && 
										<p className="m-0 mb-1 items-center flex">
											<span className="self-start">€</span>
											{data.neuer_preis}
										</p>
									}
									<p className={`m-0 mb-1 items-center flex ${data.runtergesetzt && "text-greyLoading line-through"}`}>
										<span className="self-start">€</span>
										{data.artikel_preis}
									</p>
								</div>
							}
						</div>
					</div>
				</div>
			)}
			
		</div>
	);
}
