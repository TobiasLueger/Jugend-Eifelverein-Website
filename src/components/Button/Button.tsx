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
					? "py-[5px] px-[5px] rounded-lg bg-greyLight "
					: "py-[12px] px-[70px] rounded-xl bg-greenDefault text-white"
			}`}
		>
			{icon == "frame-corners" ? (
				<FrameCorners
					size={30}
					className="text-greenDefault"
					weight="regular"
				/>
			) : null}
			{title ? (
				<span className={`${icon ? "ml-2 text-greenDefault" : ""}`}>
					{title}
				</span>
			) : null}
		</div>
	);
}
