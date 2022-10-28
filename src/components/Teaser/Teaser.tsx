import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import Pill from "../Pill/Pill";

export default function Teaser({
	title,
	content,
	data,
	id,
	showMore = false,
}: {
	title?: string;
	content?: string;
	data?: any;
	id?: number;
	showMore?: boolean;
}) {
	return (
		<div
			className="w-full h-full relative block group overflow-hidden  min-w-[340px] md:min-w-0"
			key={id}
		>
			<div className="w-full h-[179px]a lg:h-[210px] relative overflow-hidden object-cover rounded-[12px]">
				{showMore ? (
					<div className="bg-[#133a4a] h-[179px] lg:h-[210px] w-full text-white font-bold text-4xl flex justify-end items-center px-3 transition-all group-hover:text-3xl">
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
			{!showMore && (
				<div className="w-full pt-[20px] pb-[10px] lg:py-[5px] text-[#133849]">
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

							{/* <p
							className="mt-5"
							dangerouslySetInnerHTML={{ __html: content }}
						></p> */}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
