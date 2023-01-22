import vertrauenPdf from "../data/Vertrauenspersonen_im_Eifelverein.pdf";

export default function About() {
	return (
		<main className="pt-[116px]">
			<h1>Über Uns</h1>
			<br></br>
			<div className="flex flex-wrap">
				<div className="lg:w-1/2 pr-0 lg:pr-5">
					<h4 className="mt-10">Wer sind WIER?</h4>
					<br></br>
					<p>
						Im Jahre 2004 fand die erste Kinderwaldwoche statt und damit die
						Gründung unserer Jugendabteilung - der Wanderjugend im Eifel- und
						Heimatverein Rheinbach (WIER). Unser Jugendteam besteht aus 15
						ehrenamtlichen Mitarbeitenden im Alter von 14 bis 73 Jahren.
					</p>
				</div>
				<div className="lg:w-1/2">
					<h4 className="mt-10">Was treibt uns an?</h4>
					<br></br>
					<p>
						Unser Ziel ist es, Kinder und Jugendliche an Themen wie
						Nachhaltigkeit, Naturschutz und den fairen Umgang miteinander zu
						fördern. Dazu bieten wir ein buntes, vielfältiges, geselliges
						Programm mit Wanderungen, Wochenend- und Ferienfreizeiten - auch
						künstlerisch, kreative Angebote fehlen bei uns nicht.
					</p>
				</div>
				<div className="lg:w-1/2 pr-0 lg:pr-5">
					<h4 className="mt-10">Unsere Vertrauenspersonen</h4>
					<br></br>
					<p>
						Vielleicht kennst Du es auch, von anderen Kindern, Jugend- lichen
						oder Erwachsenen (oder auch von Betreuerinnen und Betreuern) blöd
						angequatscht, begrapscht oder mit peinlichen Sprüchen beschimpft zu
						werden. Was angeblich Spaß sein soll, ist für die Betroffenen gar
						nicht lustig. Mädchen und Jungen, junge Frauen und Männer wissen oft
						nicht, was sie in solchen Situationen tun sollen. Manchmal ist es
						alleine viel zu schwer, sich gegen Gemeinheiten und un- faires
						Verhalten zu wehren, dann brauchst Du Hilfe, das ist normal. Hilfe
						holen ist kein Petzen und kein Verrat, sondern mutig und Dein Recht!
						<b className="ml-2">
							Dies sind unsere Vertrauenspersonen im Eifelverein:
						</b>
					</p>
					<br></br>
					<a
						href={vertrauenPdf}
						target={"_blank"}
						className="font-bold rounded-xl bg-greenDefault w-fit text-white py-[12px] px-[70px] mt-20"
					>
						Zu den Vertrauenspersonen
					</a>
				</div>
				<div className="lg:w-1/2">
					<h4 className="mt-10">Und Du?</h4>
					<br></br>
					<p>
						Du hast Lust dich ehrenamtlich zu engagieren? Dann bist du immer
						herzlich willkommen. Unser Familien- und Jugendteam freut sich auf
						deine Unterstützung...
					</p>
				</div>
			</div>
		</main>
	);
}
