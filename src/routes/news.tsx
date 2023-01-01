import NewsList from "../components/NewsList/NewsList";

export default function News(props: any) {
	console.log(props);
	return (
		<main className="pt-[116px]">
			<h2>Berichte</h2>
			<p className="ml-1 mt-2">
				Hier siehst du alle unsere tollen Veranstaltungen. Sie dich um und such
				dir eine aus:
			</p>
			<NewsList home={false} />
		</main>
	);
}
