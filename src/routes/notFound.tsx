import mountainImg from "../../src/images/mountain.png";

export default function NotFound() {
	return (
		<main className="w-full h-screen flex items-center justify-center">
			<div className="rounded-full flex items-center justify-center flex-col shadow-2xl">
				<img src={mountainImg} alt="404 Mountain" />
				<h1 className="font-lato text-[50px] font-bold relative -top-16">
					404
				</h1>
			</div>
		</main>
	);
}
