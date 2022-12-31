import Teaser from "../Teaser/Teaser";
import useSlugData from "../../lib/getData";
import { CircleNotch } from "phosphor-react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

export default function EventList({ home }: { home?: boolean }) {
	const {
		slugData,
		loading,
		error,
	}: { slugData: any; loading: boolean; error: boolean } =
		useSlugData("events");

	let teasercount = 0;
	const maxHomeTeaser = 5;

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5 mt-5">
			{loading &&
				[...Array(3)].map((e, i) => (
					<Teaser content="" loading={true} id={i} />
				))}

			{error && <div>Leider wurden gerade keine Events gefunden</div>}
			{home
				? slugData.map((event: any) => {
						if (event.acf.startseite && teasercount <= maxHomeTeaser) {
							teasercount += 1;
							return (
								<NavLink
									to={"/veranstaltungen/" + event.slug}
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
				: slugData.map((event: any) => {
						return (
							<NavLink
								to={"/veranstaltungen/" + event.slug}
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
			{home && (
				<NavLink to={"/veranstaltungen"} className="h-full">
					<Teaser content="MEHR VERANSTALTUNGEN" showMore={true} />
				</NavLink>
			)}
		</div>
	);
}
