import React from "react";

export default function TextImg({
	headline,
	content,
	pictureDirection,
	picture,
}: {
	headline?: string;
	content: string;
	pictureDirection: string;
	picture: string;
}) {
	return (
		<div
			className={`flex w-full ${
				pictureDirection == "right"
					? "flex-row"
					: pictureDirection == "left"
					? "flex-row-reverse"
					: pictureDirection == "bottom"
					? "flex-col"
					: pictureDirection == "top"
					? "flex-col-reverse"
					: null
			}`}
		>
			<div className="w-1/2 mr-5">
				{headline && <h2>test</h2>}
				<p className="pl-4">{content}</p>
			</div>
			<div>
				<img className="rounded-[12px]" src={picture} alt="" />
			</div>
		</div>
	);
}
