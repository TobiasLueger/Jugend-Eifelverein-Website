import Teaser from "../Teaser/Teaser";
import useEventData from "../../lib/getData";

// TODO: sort function old -> new

export default function EventList({ count }: { count?: string }) {
	const { eventData, loading, error } = useEventData("events");
	return (
		<>
			{eventData.slice(0, count || eventData.length).map((event) => {
				return (
					<Teaser
						title={event.title.rendered}
						content={event.content.rendered}
						data={event.acf}
						key={event.title.rendered}
					/>
				);
			})}
		</>
	);
}
