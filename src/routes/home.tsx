import Stage from "../components/Stage/Stage";
import EventList from "../components/EventList/EventList";

export default function Home() {
	return (
		<>
			<Stage />
			<main>
				<section>
					<h2>Events</h2>
					<p> hier kannst du alle unsere Events sehen</p>
					<EventList count="3" />
					<a href="#">Mehr Anzeigen</a>
				</section>
			</main>
		</>
	);
}
