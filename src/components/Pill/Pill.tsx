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
				<div className="flex items-center justify-center rounded-full bg-[#fff] text-[#e1102d] font-bold px-[12px] lg:px-[20px] py-[4px] lg:py-[5px]">
					AUSGEBUCHT
				</div>
			) : null}

			{freePlaces ? (
				<div className="flex items-center justify-center rounded-full bg-[#fff] text-[#e17a10] font-bold px-[12px] lg:px-[20px] py-[4px] lg:py-[5px]">
					{/* 🔥 */}😱 NOCH {freePlaces} PLÄTZE FREI
				</div>
			) : null}
		</>
	);
}
