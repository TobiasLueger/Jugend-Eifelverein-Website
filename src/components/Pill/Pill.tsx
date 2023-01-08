export default function Pill({
	bookedUp,
	freePlaces,
	customeClass,
}: {
	bookedUp?: boolean;
	freePlaces?: number;
	customeClass?: string;
}) {
	return (
		<>
			{bookedUp ? (
				<div
					className={`flex w-fit items-center justify-center rounded-full bg-white text-red ${
						customeClass ? customeClass : "text-[13px]"
					} font-bold px-[12px] lg:px-[20px] py-[4px] lg:py-[5px]`}
				>
					AUSGEBUCHT
				</div>
			) : null}

			{freePlaces ? (
				<div
					className={`${customeClass} flex w-fit items-center justify-center rounded-full bg-white text-orange ${
						customeClass ? customeClass : "text-[13px]"
					} font-bold px-[12px] lg:px-[20px] py-[4px] lg:py-[5px]`}
				>
					🔥 NOCH {freePlaces} PLÄTZE FREI
				</div>
			) : null}
		</>
	);
}
