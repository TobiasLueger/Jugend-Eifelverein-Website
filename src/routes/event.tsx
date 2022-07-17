import useEventData from "../lib/getData";
import { useParams } from "react-router";

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

	console.log("eventData", eventData);

	return (
		<>
			<main>
				<section>
					<img src=""></img>
					<h2>WIER</h2>
					<p> wer sind wir eigentlich und was machen wir!</p>
				</section>
			</main>
		</>
	);
}
