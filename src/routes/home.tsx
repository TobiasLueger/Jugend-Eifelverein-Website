import Stage from "../components/Stage/Stage";
import EventList from "../components/EventList/EventList";

export default function Home() {
	return (
		<>
			<Stage />
			<main>
				<section>
					<h2>WIER</h2>
					<p> wer sind wir eigentlich und was machen wir!</p>
				</section>
				<section>
					<h2>Events</h2>
					<p> hier kannst du alle unsere Events sehen</p>
					<EventList home={true} />
					<a href="/events" className="btn mx-auto">
						Mehr Events
					</a>
				</section>
				<section>
					<h2>Berichte</h2>
					<p> wer sind wir eigentlich und was machen wir!</p>
				</section>
			</main>
		</>
	);
}
