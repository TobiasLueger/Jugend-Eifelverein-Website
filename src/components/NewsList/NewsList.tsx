import Teaser from "../Teaser/Teaser";
import useSlugData from "../../lib/getData";
import { CircleNotch } from "phosphor-react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

export default function NewsList({ home }: { home?: boolean }) {
	const {
		slugData,
		loading,
		error,
	}: { slugData: any; loading: boolean; error: boolean } = useSlugData("news");

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
				? slugData.map((news: any) => {
						if (news.acf.startseite && teasercount <= maxHomeTeaser) {
							teasercount += 1;
							return (
								<NavLink
									to={"/berichte/" + news.slug}
									className="h-full"
									key={news.id}
								>
									<Teaser
										title={news.title.rendered}
										content={news.acf.text}
										data={news.acf}
										id={news.id}
										layout="news"
									/>
								</NavLink>
							);
						}
				  })
				: slugData.map((news: any) => {
						return (
							<NavLink
								to={"/berichte/" + news.slug}
								className="h-full"
								key={news.id}
							>
								<Teaser
									title={news.title.rendered}
									content={news.acf.text}
									data={news.acf}
									id={news.id}
									layout="news"
								/>
							</NavLink>
						);
				  })}
			{home && (
				<NavLink to={"/berichte"} className="h-full">
					<Teaser content="MEHR BERICHTE" showMore={true} />
				</NavLink>
			)}
		</div>
	);
}
