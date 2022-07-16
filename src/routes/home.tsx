import Stage from "../components/Stage/Stage";
import Teaser from "../components/Teaser/Teaser";
import getData from "../lib/getData";

const eventData = await getData("events");

export default function Home() {
	return (
		<>
			<Stage />
			<main>
				<section>
					<h2>Events</h2>
					<p> hier kannst du alle unsere Events sehen</p>
					{eventData.map((event) => {
						return (
							<Teaser
								title={event.title.rendered}
								content={event.content.rendered}
								data={event.acf}
							/>
						);
					})}
					<button>mehr laden</button>
				</section>
			</main>
		</>
	);
}
