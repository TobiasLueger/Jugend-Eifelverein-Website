import { NavLink } from "react-router-dom";

export default function Teaser({
	title,
	content,
	data,
	key,
	id,
	slug,
}: {
	title: string;
	content: string;
	data: any;
	key: string;
	id: number;
	slug: string;
}) {
	return (
		<NavLink to={"/events/" + slug} className="h-full">
			<div
				className="w-full h-full relative block bg-[#fffaea] rounded-[6px] border-[#133849] border-[1px] group overflow-hidden"
				key={key}
			>
				<div className="w-full h-[179px] lg:h-[210px] relative overflow-hidden object-cover">
					<img
						className="w-full h-[179px] lg:h-[210px] relative overflow-hidden object-cover transition-all group-hover:scale-[102%]"
						src={data.bild}
						alt=""
					/>
				</div>
				<div className="w-full py-[20px] lg:py-[25px] px-[25px] lg:px-[30px] text-[#133849]">
					<div className="flex flex-row flex-wrap">
						<div>
							{data.startdatum && <span>{data.startdatum}</span>}
							{data.startzeit && (
								<span className="ml-2">{data.startzeit} Uhr</span>
							)}
						</div>
						<div>
							{data.enddatum && <span className="ml-2">- {data.enddatum}</span>}
							{data.endzeit && (
								<span className="ml-2"> {data.endzeit} Uhr</span>
							)}
						</div>
					</div>

					<h2>{title}</h2>
					<p dangerouslySetInnerHTML={{ __html: content }}></p>

					<div className="flex justify-center items-center justify-self-start font-bold rounded-2xl bg-green-700 text-white py-[12px] px-[70px] w-fit">
						Mehr Anzeigen
					</div>
				</div>
				{data.ausgebucht && (
					<div className="absolute flex items-center justify-center rounded-[4px] bg-[#fff] text-[#af2a3c] left-[12px] lg:left-[25px] top-[15px] lg:top-[18px] px-[12px] lg:px-[20px] py-[4px] lg:py-[5px]">
						AUSGEBUCHT
					</div>
				)}
			</div>
		</NavLink>
	);
}
