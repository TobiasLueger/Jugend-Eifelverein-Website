import Stage from "../components/Stage/Stage";
import EventList from "../components/EventList/EventList";
import NewsList from "../components/NewsList/NewsList";
import Button from "../components/Button/Button";
import TextImg from "../components/TextImg/TextImg";
import GroupPicImg from "../images/gruppenfoto.png";

export default function Home() {
	return (
		<>
			<Stage />
			<main>
				<section className="mb-32 lg:mb-14">
					<h2 className="mb-5">WIER</h2>
					<TextImg
						content="sind die Jugend des Eifel- und Heimatvereins Rheinbach. Mit unserer Internetpräsenz machen wir Mitgliedern und interessierten Gästen ein Informationsangebot zum Verein und seinen Aktivitäten.

						Wir möchten Ihr Interesse am Wandern durch unser Wanderprogramm und die Wandervorschläge anregen. Wir ermutigen Sie, sich uns anzuschließen, Wandern zu Ihrem Hobby zu machen und zu erfahren: Wandern macht glücklich!
						Bei uns werden Sie in einen Kreis freundlicher Menschen herzlich aufgenommen. Auch Gäste sind uns willkommen.
						
						In der Navigationsleiste (links) erhalten Sie nähere Informationen zu unserem Angebot."
						picture={GroupPicImg}
						pictureDirection="right"
					/>
				</section>
				{/* <section className="section-colored"> */}
				<section>
					<h2 className="mb-5">Veranstaltungen</h2>
					<p className="lg:pl-2"> Schau dir gerne unsere Veranstaltungen an.</p>
					<EventList home={true} />
				</section>
				<section>
					<h2 className="mb-5">Berichte</h2>
					<p className="lg:pl-2">
						Willst du interessante Berichte und News über uns?
					</p>
					<NewsList home={true} />
				</section>
			</main>
		</>
	);
}
