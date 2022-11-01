import { FrameCorners } from "phosphor-react";

export default function Button({
	title,
	icon,
	className = "",
}: {
	title?: string;
	icon?: string;
	className?: string;
}) {
	return (
		<div
			className={`${className} font-bold flex justify-center items-center w-fit ${
				icon
					? "py-[5px] px-[5px] rounded-lg bg-[#f1f5f9] "
					: "py-[12px] px-[70px] rounded-xl bg-[#15803d] text-white"
			}`}
		>
			{icon == "frame-corners" ? (
				<FrameCorners size={30} color="#15803d" weight="regular" />
			) : null}
			{title ? (
				<span className={`${icon ? "ml-2 text-[#15803d]" : ""}`}>{title}</span>
			) : null}
		</div>
	);
}
