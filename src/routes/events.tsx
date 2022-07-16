import Teaser from "../components/Teaser/Teaser";
import getData from "../lib/getData";

const eventData = await getData("events");

export default function Events() {
	return (
		<main style={{ padding: "1rem 0" }}>
			<h2>Events</h2>
			{eventData.map((event) => {
				return <Teaser />;
			})}
		</main>
	);
}
