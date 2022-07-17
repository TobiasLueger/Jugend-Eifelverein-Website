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
		<div
			className="w-full flex flex-col bg-[#133849] p-10 rounded-2xl transition-all hover:scale-[102%]"
			key={key}
		>
			<div className="w-full">
				<img className="rounded-2xl" src={data.bild} alt="" />
			</div>
			<div className="w-full pt-5 text-white">
				<p>{data.startdatum}</p>
				<p>{data.startzeit}</p>
				{data.enddatum && <p>/ {data.enddatum}</p>}
				{data.endzeit && <p>/ {data.endzeit}</p>}
				<h2>{title}</h2>
				<p>{data.fur_wen}</p>
				<p
					className="text-[24px] text-white"
					dangerouslySetInnerHTML={{ __html: content }}
				></p>

				{data.enthaltene_leistungen && <p>{data.enthaltene_leistungen}</p>}
				{data.kosten && <p>{data.kosten}</p>}
				{data.voraussetzung && <p>{data.voraussetzung}</p>}
				{data.treffpunkt && <p>{data.treffpunkt}</p>}
				{data.ort && <p>{data.ort}</p>}

				<NavLink
					to={"/events/" + slug}
					className="flex justify-center items-center justify-self-start font-bold rounded-2xl bg-green-700 text-white py-[12px] px-[70px] w-fit"
				>
					Anmelden
				</NavLink>
			</div>
		</div>
	);
}
