import EventList from "../components/EventList/EventList";

export default function Events() {
	return (
		<main className="pt-[116px]">
			<h2>Veranstaltungen</h2>
			<p className="ml-1 mt-2">
				Hier siehst du alle unsere tollen Veranstaltungen. Sie dich um und such
				dir eine aus:
			</p>
			<EventList home={false} />
		</main>
	);
}
