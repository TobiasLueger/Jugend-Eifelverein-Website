import useSlugData from "../../lib/getData";
import Article from "../Article/Article";

export default function ShopList() {
	const {
		slugData,
		loading,
		error,
	}: { slugData: any; loading: boolean; error: boolean } = useSlugData(
		"shop",
	);
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5 mt-5">
			{loading &&
				[...Array(3)].map((e, i) => (
					<Article loading={true} id={i} key={i} />
				))}

			{error && <div>Leider wurden gerade keine Artikel gefunden</div>}
			{slugData && slugData.map((articles: any, key:number) => {
				return (
						<Article
							title={articles.acf.artikel_name}
							data={articles.acf}
							id={articles.id}
							key={key}
						/>
				);
			})}
		</div>
	);
}
