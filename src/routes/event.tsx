import useEventData from "../lib/getData";
import { useParams } from "react-router";
import Button from "../components/Button/Button";

// TODO: MAKE EVENT DETAIL PAGE

export default function Event(props: any) {
	const params = useParams();
	console.log("Props", params);

	const {
		eventData,
		loading,
		error,
	}: { eventData: any; loading: boolean; error: boolean } = useEventData(
		`events?slug=${params.id}`
	);

	console.log("eventData", eventData[0], loading, error);

	let data;

	!loading ? (data = eventData[0]) : "";

	return (
		<>
			<main>
				{!loading && (
					<>
						<div
							className={`bg-[center_center] bg-no-repeat bg-cover overflow-hidden relative -mt-8 w-screen -left-[4.5%]`}
							style={{
								backgroundImage: `url("${data.acf.bild}")`,
							}}
						>
							<div className="min-h-[300px] lg:min-h-[507px] relative left-0"></div>
						</div>

						<div className="bg-[#133a4a] relative w-screen -left-[4.5%] text-white flex flex-col lg:flex-row justify-between items-center py-[31px] px-[15px] lg:px-[50px] text-[20px] lg:text-[22px]">
							<div>{data.acf.startdatum}</div>
							<Button
								href={`mailto:${data.acf.anmeldung}?subject=Anmeldung zu: ${data.title.rendered}&body=Name:</br>Vorname:`}
								title="Anmelden"
								className="w-[100%] lg:w-fit"
							/>
						</div>

						<section>
							<h2>{data.title.rendered}</h2>
							<p>{data.acf.fur_wen}</p>
							<p
								className=""
								dangerouslySetInnerHTML={{ __html: data.content.rendered }}
							></p>

							{data.acf.enthaltene_leistungen && (
								<p>{data.acf.enthaltene_leistungen}</p>
							)}
							{data.acf.kosten && <p>{data.acf.kosten}</p>}
							{data.acf.voraussetzung && <p>{data.acf.voraussetzung}</p>}
							{data.acf.treffpunkt && <p>{data.acf.treffpunkt}</p>}
							{data.acf.ort && <p>{data.acf.ort}</p>}
						</section>
					</>
				)}
			</main>
		</>
	);
}
