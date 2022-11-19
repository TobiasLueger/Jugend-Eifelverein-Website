import Stage from "../components/Stage/Stage";
import EventList from "../components/EventList/EventList";
import Button from "../components/Button/Button";
import TextImg from "../components/TextImg/TextImg";
import GroupPicImg from "../images/gruppenfoto.png";

export default function Home() {
	return (
		<>
			<Stage />
			<main>
				<section>
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
					<p> hier kannst du alle unsere Veranstaltungen sehen</p>
					<EventList home={true} />
				</section>
				<section>
					<h2 className="mb-5">Berichte</h2>
					<p> wer sind wir eigentlich und was machen wir!</p>
				</section>
			</main>
		</>
	);
}
