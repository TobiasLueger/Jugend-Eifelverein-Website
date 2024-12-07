import EventList from "../components/EventList/EventList";

export default function Events() {
	return (
		<main className="pt-[116px]">
			<h2>Veranstaltungen</h2>
			<p className="mt-2 lg:pl-2">
				Hier siehst du alle unsere tollen Veranstaltungen. Sieh dich um und such
				dir eine aus:
			</p>
			<EventList home={false} />
		</main>
	);
}
