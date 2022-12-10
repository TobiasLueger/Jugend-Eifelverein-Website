import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import Pill from "../Pill/Pill";
import { useState } from "react";

export default function Teaser({
	title,
	content,
	data,
	id,
	showMore = false,
	loading = false,
}: {
	title?: string;
	content: string;
	data?: any;
	id?: number;
	showMore?: boolean;
	loading?: boolean;
}) {
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
		<div
			className="teaser w-full h-full relative block group hover:z-[1] min-w-[340px] md:min-w-0"
			key={id}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{loading ? (
				<>
					<div className="bg-greyLoading w-full h-[179px]a lg:h-[210px] relative overflow-hidden object-cover rounded-[12px]">
						<div className="bg-greyLoading h-[179px] lg:h-[210px] w-full"></div>
					</div>
					<div className="w-full pt-[20px] pb-[10px] lg:py-[5px]">
						<div className="mb-[10px] flex gap-3">
							<div className="ml-3">
								<h3 className="h5 mt-3 mb-2">
									<div className="h-[21px] w-24 bg-greyloading rounded-[12px]"></div>
								</h3>
								<p className="m-0 mb-1 items-center flex">
									<span className="mr-2">
										<div className="bg-greyLoading h-[20px] w-[20px] rounded-full"></div>
									</span>
									<div className="h-[18px] w-20 bg-greyloading rounded-[12px]"></div>
								</p>

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
						<div className="bg-blueMidnight h-[179px] lg:h-[210px] w-full text-white font-bold text-4xl flex justify-end items-center px-3 transition-all group-hover:text-3xl">
							<div className="w-full h-1 bg-white mr-6"></div>MEHR EVENTS
						</div>
					) : (
						<>
							<img
								className="w-full h-[179px] lg:h-[210px] relative overflow-hidden object-cover transition-all group-hover:scale-[102%]"
								src={data.bild}
								alt=""
							/>
							{data.ausgebucht && (
								<div className="absolute bottom-[10px] lg:bottom-[15px] right-[10px] lg:right-[15px]">
									<Pill bookedUp={data.ausgebucht} />
								</div>
							)}
							{data.freie_plaetze && (
								<div className="absolute bottom-[10px] lg:bottom-[15px] right-[10px] lg:right-[15px]">
									<Pill freePlaces={data.freie_plaetze} />
								</div>
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
							<p className="m-0 mb-1 items-center flex">
								<span className="mr-2">🧑</span>
								{data.leitung ? data.leitung : "Veranstalter"}
							</p>

							<div className="flex flex-row flex-wrap">
								<div className="mr-2">🕒</div>
								{data.startdatum || data.enddatum ? (
									<>
										<div>
											{data.startdatum && <span>{data.startdatum}</span>}
										</div>
										<div>
											{data.enddatum && (
												<span className="ml-2">- {data.enddatum}</span>
											)}
										</div>
									</>
								) : (
									<div>
										<span>Datum folgt</span>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
			{!showMore && !loading && hover && (
				<div
					className={`absolute block top-[-2rem] left-[-2rem] transition-all rounded-[12px] w-[calc(100%+4rem)] h-[calc(100%+4rem)] bg-white overflow-hidden`}
				>
					<img
						className="bg-greyloading w-full h-[179px] lg:h-[210px] rounded-[12px] relative overflow-hidden object-cover transition-all"
						src={data.bild}
						alt=""
					/>
					<h3 className="h5 mt-5 mx-5 mb-2 text-blueMidnight">{title}</h3>
					<p
						className="mb-5 mx-5 h-[calc(100%-179px-48px-28px)] lg:h-[calc(100%-210px-48px-28px)] overflow-hidden line-clamp-4 text-ellipsis text-blueMidnight"
						dangerouslySetInnerHTML={{ __html: content }}
					></p>
				</div>
			)}
		</div>
	);
}
