export default function Home() {
	return (
		<main>
			<div className="bg-[url('../images/bg.png')] bg-cover bg-no-repeat bg-center w-full h-screen relative overflow-hidden">
				<div className="relative w-11/12 h-full left-2/4 -translate-x-1/2">
					<div className="absolute bottom-20 w-full">
						<h1 className="font-lato font-bold text-[60px] text-[#67B31F]">
							WIER
						</h1>
						<p className="font-lato font-bold text-[50px] text-[#EAEAEA] ml-12">
							sind mehr als nur wandern
						</p>
					</div>
					<div className="absolute w-[300px] h-[300px] bg-[url('../images/gruppenfoto.png')] bg-cover bg-no-repeat bg-center right-0 rounded-full bottom-24"></div>
				</div>
			</div>
		</main>
	);
}
