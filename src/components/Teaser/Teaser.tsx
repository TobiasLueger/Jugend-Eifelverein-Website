import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import Pill from "../Pill/Pill";

export default function Teaser({
	title,
	content,
	data,
	id,
}: {
	title?: string;
	content: string;
	data?: any;
	id?: number;
}) {
	return (
		<div
			className="w-full h-full relative block bg-[#fff] rounded-2xl shadow-xl group overflow-hidden p-3 min-w-[340px] md:min-w-0"
			key={id}
		>
			<div className="w-full h-[179px]a lg:h-[210px] relative overflow-hidden object-cover rounded-lg">
				<img
					className="w-full h-[179px] lg:h-[210px] relative overflow-hidden object-cover transition-all group-hover:scale-[102%]"
					src={data.bild}
					alt=""
				/>
			</div>
			<div className="w-full pt-[20px] pb-[10px] lg:py-[5px] text-[#133849]">
				<div className="mb-[60px]">
					<h3 className="h4 mt-3 mb-2">{title}</h3>

					<div className="flex flex-row flex-wrap">
						<div>{data.startdatum && <span>{data.startdatum}</span>}</div>
						<div>
							{data.enddatum && <span className="ml-2">- {data.enddatum}</span>}
						</div>
					</div>

					<p className="mt-5" dangerouslySetInnerHTML={{ __html: content }}></p>
				</div>

				<div className="flex justify-between absolute bottom-3 w-[calc(100%-24px)]">
					<Avatar name={data.leitung} />
					<Button icon="frame-corners" />
				</div>
			</div>
			{data.ausgebucht && (
				<div className="absolute left-[20px] lg:left-[25px] top-[20px] lg:top-[25px]">
					<Pill bookedUp={data.ausgebucht} />
				</div>
			)}
			{data.freie_plaetze && (
				<div className="absolute left-[20px] lg:left-[25px] top-[20px] lg:top-[25px]">
					<Pill freePlaces={data.freie_plaetze} />
				</div>
			)}
		</div>
	);
}
