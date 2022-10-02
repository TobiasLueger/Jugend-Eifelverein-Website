import { FrameCorners } from "phosphor-react";

export default function Button({
	title,
	icon,
	className,
}: {
	title?: string;
	icon?: string;
	className?: string;
}) {
	console.log("Titel: ", title);
	console.log("icon: ", icon);
	return (
		<div
			className={`${className} font-bold flex justify-center items-center w-fit ${
				icon
					? "py-[5px] px-[5px] rounded-lg bg-[#133a4a] text-pink-50"
					: "py-[12px] px-[70px] rounded-xl bg-[#67b31b] text-white"
			}`}
		>
			{title}
			{icon == "frame-corners" ? (
				<FrameCorners size={30} color="#67b31b" weight="bold" />
			) : null}
		</div>
	);
}
