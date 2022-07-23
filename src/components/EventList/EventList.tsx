import Teaser from "../Teaser/Teaser";
import useEventData from "../../lib/getData";
import { CircleNotch } from "phosphor-react";

export default function EventList({ home }: { home?: boolean }) {
	const {
		eventData,
		loading,
		error,
	}: { eventData: any; loading: boolean; error: boolean } =
		useEventData("events");
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
			{loading && (
				<CircleNotch
					size={40}
					className="animate-spin"
					color="#133849"
					weight="bold"
				/>
			)}

			{error && <div>Leider wurden gerade keine Events gefunden</div>}
			{home
				? eventData.map((event: any) => {
						console.log("event", event.acf.startseite);
						if (event.acf.startseite) {
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
						}
				  })
				: eventData.map((event: any) => {
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
