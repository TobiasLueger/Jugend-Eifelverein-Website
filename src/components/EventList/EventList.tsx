import Teaser from "../Teaser/Teaser";
import useEventData from "../../lib/getData";
import { CircleNotch } from "phosphor-react";

// TODO: sort function old -> new

export default function EventList({ count }: { count?: string }) {
	const {
		eventData,
		loading,
		error,
	}: { eventData: any; loading: boolean; error: boolean } =
		useEventData("events");
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
			{loading && (
				<CircleNotch
					size={40}
					className="animate-spin"
					color="#133849"
					weight="bold"
				/>
			)}

			{error && <div>Leider wurden gerade keine Events gefunden</div>}
			{eventData.slice(0, count || eventData.length).map((event: any) => {
				console.log("event", event.id);
				return (
					<Teaser
						title={event.title.rendered}
						content={event.content.rendered}
						data={event.acf}
						id={event.id}
						slug={event.slug}
						key={event.title.rendered}
					/>
				);
			})}
		</div>
	);
}
