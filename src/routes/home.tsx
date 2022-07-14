import Stage from "../components/Stage/Stage";
import Teaser from "../components/Teaser/Teaser";

export default function Home() {
	return (
		<>
			<Stage />
			<main>
				<section>
					<h2>Events</h2>
					<p> hier kannst du alle unsere Events sehen</p>
					<Teaser />
					<Teaser />
					<Teaser />
					<button>mehr laden</button>
				</section>
			</main>
		</>
	);
}
