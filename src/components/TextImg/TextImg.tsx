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
					? "flex-col-reverse lg:flex-row"
					: pictureDirection == "left"
					? "flex-col lg:flex-row-reverse"
					: pictureDirection == "bottom"
					? "flex-col"
					: pictureDirection == "top"
					? "flex-col lg:flex-col-reverse"
					: null
			}`}
		>
			<div className="w-full lg:w-1/2 mr-5 mb-5 lg:mb-0">
				{headline && <h2>test</h2>}
				<p className="lg:pl-2">{content}</p>
			</div>
			<div className="w-full lg:w-1/2 mb-5 lg:mb-0">
				<img className="rounded-[12px]" src={picture} alt="" />
			</div>
		</div>
	);
}
