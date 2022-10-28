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
				<div className="flex w-fit items-center justify-center rounded-full bg-[#fff] text-[#e1102d] text-[13px] font-bold px-[12px] lg:px-[20px] py-[4px] lg:py-[5px]">
					AUSGEBUCHT
				</div>
			) : null}

			{freePlaces ? (
				<div className="flex w-fit items-center justify-center rounded-full bg-[#fff] text-[#e17a10] text-[13px] font-bold px-[12px] lg:px-[20px] py-[4px] lg:py-[5px]">
					🔥 NOCH {freePlaces} PLÄTZE FREI
				</div>
			) : null}
		</>
	);
}
