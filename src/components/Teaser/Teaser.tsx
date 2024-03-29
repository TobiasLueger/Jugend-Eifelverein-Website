import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import Pill from "../Pill/Pill";
import { useState } from "react";
import defaultImg from "../../../src/images/default.jpg";

export default function Teaser({ title, content, data, id, showMore = false, loading = false, layout = "event" }: { title?: string; content: string; data?: any; id?: number; showMore?: boolean; loading?: boolean; layout?: string }) {
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
		<div className="teaser w-full h-full relative block group hover:z-[1] min-w-[300px] md:min-w-0" key={id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
				<div className="w-full h-[179px]a lg:h-[210px] relative bg-greyloading overflow-hidden object-cover rounded-[12px]">
					{showMore ? (
						<div className="bg-greyDark h-[179px] lg:h-[210px] w-full text-white font-bold text-4xl flex justify-center items-center px-3 transition-all group-hover:text-3xl">MEHR...</div>
					) : (
						<>
							<img className="w-full h-[179px] lg:h-[210px] relative overflow-hidden object-cover transition-all group-hover:scale-[102%]" src={data.bild ? data.bild : defaultImg} alt={title} />
							{layout == "event" && (
								<>
									{data.ausgebucht && (
										<div className="absolute bottom-[10px] lg:bottom-[15px] right-[10px] lg:right-[15px]">
											<Pill waitlist={data.ausgebucht} />
										</div>
									)}
									{data.freie_plaetze && (
										<div className="absolute bottom-[10px] lg:bottom-[15px] right-[10px] lg:right-[15px]">
											<Pill freePlaces={data.freie_plaetze} />
										</div>
									)}
								</>
							)}
						</>
					)}
				</div>
			)}
			{!showMore && !loading && (
				<div className="w-full pt-[20px] pb-[10px] lg:py-[5px]">
					<div className="mb-[10px] flex gap-3">
						<div className="ml-3">
							<h3 className="h5 mt-3 mb-2">{title}</h3>
							{layout == "event" && (
								<p className="m-0 mb-1 items-center flex">
									<span className="mr-2 self-start">🧑</span>
									{data.fur_wen ? data.fur_wen : "Alle sind willkommen"}
								</p>
							)}

							<div className="flex flex-row flex-wrap">
								<div className="mr-2">🕒</div>
								{layout == "event" ? (
									<>
										{data.datum || data.enddatum ? (
											<>
												<div>
													{data.datum && (
														<span>
															{new Date(data.datum).toLocaleString("de-DE", {
																day: "numeric",
																month: "short",
																year: "numeric",
															})}
														</span>
													)}
												</div>
												<div>
													{data.enddatum && (
														<span className="ml-2">
															-{" "}
															{new Date(data.enddatum).toLocaleString("de-DE", {
																day: "numeric",
																month: "short",
																year: "numeric",
															})}
														</span>
													)}
												</div>
											</>
										) : (
											<div>
												<span>Datum folgt</span>
											</div>
										)}
									</>
								) : (
									<>
										{data.datum ? (
											<>
												<div>
													{data.datum && (
														<span>
															{new Date(data.datum).toLocaleString("de-DE", {
																day: "numeric",
																month: "short",
																year: "numeric",
															})}
														</span>
													)}
												</div>
											</>
										) : (
											<div>
												<span>Datum folgt</span>
											</div>
										)}
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
