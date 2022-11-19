import avatar from "../../images/avatar.png";

export default function Button({
	name,
	className,
}: {
	name?: string;
	className?: string;
}) {
	return (
		<div className={`flex flex-row ${className}`}>
			<img
				src={avatar}
				className="shadow-lg mr-2 rounded-full h-9 w-9"
				alt="avatar img"
			/>
		</div>
	);
}
