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
						content="
						sind die Wanderjugend im Eifel- und Heimatverein Rheinbach. 
						Wir führen als Jugendgruppe des Eifelvereins Rheinbach eine Vielzahl von Aktivitäten durch, die auf die Förderung der Natur- und Heimatverbundenheit junger Menschen ausgerichtet sind.
						Dazu gehören zum Beispiel Wanderungen, Exkursionen, Naturbeobachtungen, Umweltprojekte, sowie Bildungs- und Informationsveranstaltungen.
						Wir nehmen aber auch an Wettbewerben, Wochenendfreizeiten, Zeltlager und anderen Aktivitäten teil.
						Außerdem initiieren und organisieren wir als Jugend eigene Projekte und Veranstaltungen.
						Wir bieten mit unserem Angebot eine Möglichkeit für junge Menschen Gleichgesinnte zu treffen und sich aktiv für die Umwelt und die Natur einzusetzten. 
						Auch Gäste sind bei uns herzlich willkommen.
						"
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
					<p className="lg:pl-2">Willst du interessante Berichte und News über uns?</p>
					<NewsList home={true} />
				</section>
			</main>
		</>
	);
}
