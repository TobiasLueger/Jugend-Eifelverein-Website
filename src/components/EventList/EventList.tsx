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
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
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
						if (event.acf.startseite) {
							return (
								<Teaser
									title={event.title.rendered}
									content={event.content.rendered}
									data={event.acf}
									id={event.id}
									slug={event.slug}
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
							/>
						);
				  })}
		</div>
	);
}
