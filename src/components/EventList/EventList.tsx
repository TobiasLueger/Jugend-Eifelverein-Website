import Teaser from "../Teaser/Teaser";
import useEventData from "../../lib/getData";
import { CircleNotch } from "phosphor-react";
import { NavLink } from "react-router-dom";

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
								<NavLink
									to={"/events/" + event.slug}
									className="h-full"
									key={event.id}
								>
									<Teaser
										title={event.title.rendered}
										content={event.content.rendered}
										data={event.acf}
										id={event.id}
									/>
								</NavLink>
							);
						}
				  })
				: eventData.map((event: any) => {
						return (
							<NavLink
								to={"/events/" + event.slug}
								className="h-full"
								key={event.id}
							>
								<Teaser
									title={event.title.rendered}
									content={event.content.rendered}
									data={event.acf}
									id={event.id}
								/>
							</NavLink>
						);
				  })}
		</div>
	);
}
