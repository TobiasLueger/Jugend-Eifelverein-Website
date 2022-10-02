import { User } from "phosphor-react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";

export default function Teaser({
	title,
	content,
	data,
	id,
	slug,
}: {
	title: string;
	content: string;
	data: any;
	id: number;
	slug: string;
}) {
	return (
		<NavLink to={"/events/" + slug} className="h-full">
			<div
				className="w-full h-full relative block bg-[#fffaea] rounded-[6px] shadow-xl group overflow-hidden p-3"
				key={id}
			>
				<div className="w-full h-[179px] lg:h-[210px] relative overflow-hidden object-cover rounded-lg">
					<img
						className="w-full h-[179px] lg:h-[210px] relative overflow-hidden object-cover transition-all group-hover:scale-[102%]"
						src={data.bild}
						alt=""
					/>
				</div>
				<div className="w-full pt-[20px] pb-[10px] lg:py-[5px] px-[5px] lg:px-[15px] text-[#133849]">
					{/* <div className="flex flex-row flex-wrap">
						<div>
							{data.startdatum && <span>{data.startdatum}</span>}
							{data.startzeit && (
								<span className="ml-2">{data.startzeit} Uhr</span>
							)}
						</div>
						<div>
							{data.enddatum && <span className="ml-2">- {data.enddatum}</span>}
							{data.endzeit && (
								<span className="ml-2"> {data.endzeit} Uhr</span>
							)}
						</div>
					</div> */}

					<h3>{title}</h3>
					<p className="h5" dangerouslySetInnerHTML={{ __html: content }}></p>

					<Avatar name={data.leitung} />

					<Button icon="frame-corners" className="absolute right-3 bottom-2" />
				</div>
				{data.ausgebucht && (
					<div className="absolute flex items-center justify-center rounded-[4px] bg-[#fff] text-[#af2a3c] left-[12px] lg:left-[25px] top-[15px] lg:top-[18px] px-[12px] lg:px-[20px] py-[4px] lg:py-[5px]">
						AUSGEBUCHT
					</div>
				)}
			</div>
		</NavLink>
	);
}
