export default function Button({
	href,
	title,
	className,
}: {
	title: string;
	href: string;
	className: string;
}) {
	return (
		<a
			className={`${className} font-bold flex justify-center items-center rounded-xl bg-green-700 w-fit text-white py-[12px] px-[70px]`}
			href={`${href}`}
		>
			{title}
		</a>
	);
}
