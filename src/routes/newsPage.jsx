import useSlugData from "../lib/getData";
import { useParams } from "react-router";

export default function NewsPage() {
	const params = useParams();

	const { slugData, loading, error } = useSlugData(`news?slug=${params.id}`);

	let data;

	!loading ? (data = slugData[0]) : "";

	return (
		<>
			<main className="mt-24">
				{!loading && (
					<>
						<div className="mb-5 lg:mb-10">
							<h1 className="leading-snug tracking-normal overflow-hidden overflow-ellipsis box">
								{data.title.rendered}
							</h1>
						</div>
						<div className="flex flex-wrap flex-col-reverse lg:flex-row">
							<div className="w-full max-w-[100%] basis-[100%] lg:max-w-[50%] lg:basis-[50%] grow-0 shrink-0 pr-8 mb-8 lg:mb-0">
								<p
									className="mt-3"
									dangerouslySetInnerHTML={{ __html: data.acf.text }}
								></p>
							</div>
							<div className="w-full max-w-[100%] basis-[100%] lg:max-w-[50%] lg:basis-[50%] grow-0 shrink-0">
								<div className="overflow-hidden rounded-[12px] shadow-xl w-full flex relative">
									<img
										src={data.acf.bild ? data.acf.bild : defaultImg}
										className="w-full object-cover h-full max-h-[500px]"
										alt=""
									/>
								</div>
							</div>
						</div>
					</>
				)}
			</main>
		</>
	);
}
