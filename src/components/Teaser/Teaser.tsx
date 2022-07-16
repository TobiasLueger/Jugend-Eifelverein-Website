export default function Teaser({ title, content, data, key }) {
	return (
		<div
			className="w-full flex flex-row gap-16 bg-[#133849] p-10 rounded-2xl my-5"
			key={key}
		>
			<div className=" w-[50%]">
				<img className="rounded-2xl" src={data.bild} alt="" />
			</div>
			<div className="w-[50%] pt-5 text-white">
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

				<a
					href="[#EVENT-PAGE]"
					className="flex justify-center items-center justify-self-start font-bold rounded-2xl bg-green-700 text-white py-[12px] px-[70px] w-fit"
				>
					Anmelden
				</a>
			</div>
		</div>
	);
}
