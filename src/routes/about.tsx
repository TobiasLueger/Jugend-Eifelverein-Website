import dwj from "../images/DWJ-Logo.jpg";
import dwjNrw from "../images/DWJ_Logo.jpg";
import dwjFair from "../images/DWJ_Fair.png";
import wierGroup from "../images/wier-gruppenfoto.jpg";

export default function About() {
	return (
		<main className="pt-[116px]">
			<h1>Über Uns</h1>
			<br></br>
			<div className="flex flex-wrap">
				<div className="lg:w-1/2 pr-0 lg:pr-5">
					<h4 className="mt-10">Wer sind WIER?</h4>
					<br></br>
					<p>Im Jahre 2004 fand die erste Kinderwaldwoche in Rheinbach statt und damit die Gründung unserer Jugendabteilung - der Wanderjugend im Eifel- und Heimatverein Rheinbach (WIER). Unser Jugendteam besteht derzeit aus 15 ehrenamtlichen Teamer:innen. Dabei freuen wir uns immer, mit Kindern, Jugendlichen und Familien eine starke Gemeinschaft zu erleben - voller Neugier, Tatendrang und viel Spaß!</p>
					<br></br>
					<img src={wierGroup} className="w-full" alt="avatar img" />
				</div>
				<div className="lg:w-1/2 pl-0 lg:pl-5">
					<h4 className="mt-10">FAIR. STARK. MITEINANDER.</h4>
					<br></br>
					<p>
					Viele Kinder und Jugendliche nehmen mit Spaß an unseren Wanderungen, Aktionen und Freizeiten teil und gestalten sie aktiv mit. Wichtig ist uns, dass sich alle hierbei sicher und gut aufgehoben fühlen. Um dies zu gewährleisten wurde ein Schutzkonzept in der Deutschen Wanderjugend entwickelt und Vertrauenspersonen ausgewählt, um ein faires und starkes Miteinander zu fördern. Alle Informationen zu FAIR.STARK.MITEINANDER findet ihr unter <a href="https://www.fair-stark-miteinander.de/" className="text-greenLight hover:text-greenDefault transition-all">www.fair-stark-miteinander.de</a>.
					</p>

					<br></br>
					<b>Zur DWJ und DWJ-NRW:</b>
					<div className="flex gap-3 mt-4 flex-wrap">
						<a href="https://wanderjugend.de/deutsche-wanderjugend" target="_blank" className="p-4 bg-white shadow-lg  rounded-xl">
							<img src={dwj} className=" mr-2 h-20" alt="avatar img" />
						</a>
						<a href="https://www.fair-stark-miteinander.de/" target="_blank" className="p-4 bg-white shadow-lg  rounded-xl">
							<img src={dwjFair} className="mr-2 h-20" alt="avatar img" />
						</a>
						<a href="https://www.wanderjugend-nw.de/" target="_blank" className="p-4 bg-white shadow-lg  rounded-xl">
							<img src={dwjNrw} className="mr-2 h-20" alt="avatar img" />
						</a>
						
					</div>
				</div>
				<div className="lg:w-1/2 pr-0 lg:pr-5">
					<h4 className="mt-10">Was treibt uns an?</h4>
					<br></br>
					<p>Unser Ziel ist es, Kinder und Jugendliche an Themen wie Nachhaltigkeit, Naturschutz und den fairen Umgang miteinander zu fördern. Dazu bieten wir ein buntes, vielfältiges, geselliges Programm mit Wanderungen, Wochenend- und Ferienfreizeiten - auch künstlerisch, kreative Angebote fehlen bei uns nicht.</p>
				</div>
				
				<div className="lg:w-1/2 pl-0 lg:pl-5">
					<h4 className="mt-10">Und Du?</h4>
					<br></br>
					<p>Du hast Lust dich ehrenamtlich zu engagieren? Dann bist du immer herzlich willkommen. Unser Familien- und Jugendteam freut sich auf deine Unterstützung...</p>
				</div>
			</div>
		</main>
	);
}
