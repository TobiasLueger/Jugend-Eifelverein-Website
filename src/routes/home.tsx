import Stage from "../components/Stage/Stage";
import Teaser from "../components/Teaser/Teaser";

export default function Home() {
	return (
		<>
			<Stage />
			<main className="left-2/4 -translate-x-1/2 relative w-11/12 py-8">
				<Teaser />
			</main>
		</>
	);
}
