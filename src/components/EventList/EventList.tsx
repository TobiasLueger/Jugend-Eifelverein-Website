import Teaser from "../Teaser/Teaser";
import useSlugData from "../../lib/getData";
import { NavLink } from "react-router-dom";

const HOME_TEASERS = 3;

function eventTimestamp(ev: any): number {
	return new Date(ev.acf.datum).getTime();
}

/**
 * Die nächsten HOME_TEASERS zukünftigen Termine. Einträge mit `acf.startseite`
 * ersetzen jeweils den zeitlich am weitesten entfernten (spätesten) der aktuellen Auswahl,
 * sofern sie noch nicht enthalten sind.
 */
function selectHomeEvents(events: any[]): any[] {
	const now = Date.now();
	const upcoming = events
		.filter((e) => eventTimestamp(e) >= now)
		.slice()
		.sort((a, b) => eventTimestamp(a) - eventTimestamp(b));

	if (upcoming.length === 0) return [];

	let result = upcoming.slice(0, HOME_TEASERS);
	const pinned = upcoming
		.filter((e) => e.acf?.startseite)
		.sort((a, b) => eventTimestamp(a) - eventTimestamp(b));

	for (const pin of pinned) {
		if (result.some((r) => r.id === pin.id)) continue;

		if (result.length < HOME_TEASERS) {
			result.push(pin);
			result.sort((a, b) => eventTimestamp(a) - eventTimestamp(b));
			continue;
		}

		const maxIdx = result.reduce(
			(bestIdx, _, idx, arr) =>
				eventTimestamp(arr[idx]) > eventTimestamp(arr[bestIdx])
					? idx
					: bestIdx,
			0
		);

		result = result.map((item, idx) => (idx === maxIdx ? pin : item));
		result.sort((a, b) => eventTimestamp(a) - eventTimestamp(b));
	}

	return result.slice(0, HOME_TEASERS);
}

export default function EventList({ home }: { home?: boolean }) {
	const {
		slugData,
		loading,
		error,
	}: { slugData: any; loading: boolean; error: boolean } =
		useSlugData("events",
			false,
			false,
			true
		);

	const homeEvents = home ? selectHomeEvents(slugData) : [];

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-32 lg:mb-14 mt-5">
			{loading &&
				[...Array(HOME_TEASERS)].map((e, i) => (
					<Teaser content="" loading={true} key={i} id={i} />
				))}

			{error && <div>Leider wurden gerade keine Events gefunden</div>}
			{home
				? homeEvents.map((event: any) => {
						return (
							<NavLink
								to={"/veranstaltungen/" + event.slug}
								className="h-full"
								key={event.id}
							>
								<Teaser
									title={event.title.rendered}
									content={event.acf.text}
									data={event.acf}
									id={event.id}
								/>
							</NavLink>
						);
				  })
				: slugData.map((event: any) => {
						if (new Date(event.acf.datum) >= new Date()) {
							return (
								<NavLink
									to={"/veranstaltungen/" + event.slug}
									className="h-full"
									key={event.id}
								>
									<Teaser
										title={event.title.rendered}
										content={event.acf.text}
										data={event.acf}
										id={event.id}
									/>
								</NavLink>
							);
						}
				  })}
			{home && (
				<NavLink to={"/veranstaltungen"} className="h-full">
					<Teaser content="MEHR VERANSTALTUNGEN" showMore={true} />
				</NavLink>
			)}
		</div>
	);
}
