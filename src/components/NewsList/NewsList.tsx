import Teaser from "../Teaser/Teaser";
import useSlugData from "../../lib/getData";
import { NavLink } from "react-router-dom";

const HOME_TEASERS = 3;

export default function NewsList({ home }: { home?: boolean }) {
	const {
		slugData,
		loading,
		error,
	}: { slugData: any; loading: boolean; error: boolean } = useSlugData(
		"news",
		false,
		true
	);

	const homeNews = home ? slugData.slice(0, HOME_TEASERS) : [];

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5 mt-5">
			{loading &&
				[...Array(HOME_TEASERS)].map((e, i) => (
					<Teaser content="" loading={true} id={i} key={i} />
				))}

			{error && <div>Leider wurden gerade keine Events gefunden</div>}
			{home
				? homeNews.map((news: any) => {
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
				  })
				: slugData.map((news: any, key:number) => {
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
									key={key}
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
