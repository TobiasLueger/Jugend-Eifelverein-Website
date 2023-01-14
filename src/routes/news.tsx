import NewsList from "../components/NewsList/NewsList";

export default function News() {
	return (
		<main className="pt-[116px]">
			<h2>Berichte</h2>
			<p className="mt-2 lg:pl-2">
				Hier siehst du alle Berichte der letzen Veranstaltungen. Viel Spaß beim
				stöbern.
			</p>
			<NewsList home={false} />
		</main>
	);
}
