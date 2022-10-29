import Stage from "../components/Stage/Stage";
import EventList from "../components/EventList/EventList";
import Button from "../components/Button/Button";

export default function Home() {
	return (
		<>
			<Stage />
			<main>
				<section>
					<h2>WIER</h2>
					<p> wer sind wir eigentlich und was machen wir!</p>
				</section>
				<section className="section-colored">
					<h2>Events</h2>
					<p> hier kannst du alle unsere Events sehen</p>
					<EventList home={true} />
				</section>
				<section>
					<h2>Berichte</h2>
					<p> wer sind wir eigentlich und was machen wir!</p>
				</section>
			</main>
		</>
	);
}
