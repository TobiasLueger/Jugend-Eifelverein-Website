export default function Pill({
	bookedUp,
	freePlaces,
}: {
	bookedUp?: boolean;
	freePlaces?: number;
}) {
	return (
		<>
			{bookedUp ? (
				<div className="flex w-fit items-center justify-center rounded-full bg-white text-red text-[13px] font-bold px-[12px] lg:px-[20px] py-[4px] lg:py-[5px]">
					AUSGEBUCHT
				</div>
			) : null}

			{freePlaces ? (
				<div className="flex w-fit items-center justify-center rounded-full bg-white text-orange text-[13px] font-bold px-[12px] lg:px-[20px] py-[4px] lg:py-[5px]">
					🔥 NOCH {freePlaces} PLÄTZE FREI
				</div>
			) : null}
		</>
	);
}
