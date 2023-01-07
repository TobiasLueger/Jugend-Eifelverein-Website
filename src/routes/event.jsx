import useSlugData from "../lib/getData";
import { useParams } from "react-router";
import {
	X,
	CurrencyEur,
	Clock,
	MapPin,
	MapTrifold,
	UsersThree,
	ClipboardText,
	Calendar,
} from "phosphor-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import {
	EMAILJS_SERVICE_ID,
	EMAILJS_TEMPLATE_ID,
	EMAILJS_PUBLIC_KEY,
} from "../lib/Env";

// TODO: MAKE EVENT DETAIL PAGE
/* export default function Event(props: any) { */
export default function Event() {
	const params = useParams();

	/* const {
		eventData,
		loading,
		error,
	}: { eventData: any, loading: boolean, error: boolean } = useEventData(
		`events?slug=${params.id}`
	); */

	const { slugData, loading, error } = useSlugData(`events?slug=${params.id}`);

	let data;

	!loading ? (data = slugData[0]) : "";

	const form = useRef();

	let serviceId, templateId, publicKey;

	if (process.env.NODE_ENV === "production") {
		// For production
		serviceId = process.env.VERCEL_EMAILJS_SERVICE_ID;
		templateId = process.env.VERCEL_EMAILJS_TEMPLATE_ID;
		publicKey = process.env.VERCEL_EMAILJS_PUBLIC_KEY;
	} else {
		// For development
		serviceId = EMAILJS_SERVICE_ID;
		templateId = EMAILJS_TEMPLATE_ID;
		publicKey = EMAILJS_PUBLIC_KEY;
	}

	const [isSendForm, setIsSendForm] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);

		setIsSendForm(true);
	};

	const [emailForm, setEmailForm] = useState(false);

	const toggleEmailForm = () => {
		setEmailForm(!emailForm);

		setTimeout(() => {
			setIsSendForm(false);
		}, 500);
	};

	return (
		<>
			<main className="mt-48">
				{!loading && (
					<>
						<div className="flex relative gap-4">
							<div className="w-2/3 max-h-60">
								<h2 className=" leading-snug tracking-normal overflow-hidden overflow-ellipsis box">
									{data.title.rendered}
								</h2>
							</div>
							<div className="w-1/2 flex justify-center">
								<div className="overflow-hidden rounded-[12px] aspect-[1/1] shadow-xl w-full flex max-h-96">
									<img
										src={data.acf.bild}
										className="w-full object-cover"
										alt=""
									/>
								</div>
							</div>
							<div className="absolute  w-full h-fit bottom-8 flex flex-row justify-between">
								<div className="flex flex-wrap w-2/3 bg-white shadow-2xl rounded-[12px] p-4">
									<div className="flex flex-col w-1/2 justify-between">
										<div className="mb-5 lg:mb-0 ">
											{data.acf.startdatum && (
												<p className="flex gap-2 text-[20px] font-bold text-greyDark">
													<Calendar
														size={30}
														className="text-greyDark"
														weight="bold"
													/>
													{data.acf.startdatum}
												</p>
											)}
										</div>
										<div className="mb-5 lg:mb-0 flex">
											{data.acf.startzeit && (
												<p className="flex gap-2 text-[20px] font-bold text-greyDark">
													<Clock
														size={30}
														className="text-greyDark"
														weight="bold"
													/>
													{data.acf.startzeit} Uhr
												</p>
											)}
										</div>
									</div>
									<div className="flex flex-col w-1/2 justify-between">
										<div className="mb-5 lg:mb-0">
											{data.acf.enddatum && (
												<p className="flex gap-2 text-[20px] font-bold text-greyDark">
													<Calendar
														size={30}
														className="text-greyDark"
														weight="bold"
													/>
													{data.acf.enddatum}
												</p>
											)}
										</div>
										<div className="mb-5 lg:mb-0">
											{data.acf.endzeit && (
												<p className="flex gap-2 text-[20px] font-bold text-greyDark">
													<Clock
														size={30}
														className="text-greyDark"
														weight="bold"
													/>
													{data.acf.endzeit} Uhr
												</p>
											)}
										</div>
									</div>
								</div>
								<div className=" bg-white p-8 z-50 shadow-2xl rounded-[12px]">
									<a
										title="Anmelden"
										className="btn w-[100%] lg:w-fit"
										onClick={toggleEmailForm}
									>
										Anmelden
									</a>
								</div>
							</div>
						</div>

						<section>
							<p>{data.acf.fur_wen}</p>
							<p
								className=""
								dangerouslySetInnerHTML={{ __html: data.acf.text }}
							></p>

							{data.acf.enthaltene_leistungen && (
								<p className="flex">
									<UsersThree
										size={25}
										className="text-greyDark"
										weight="bold"
									/>
									{data.acf.enthaltene_leistungen}
								</p>
							)}
							{data.acf.kosten && (
								<p className="flex">
									<CurrencyEur
										size={25}
										className="text-greyDark"
										weight="bold"
									/>
									{data.acf.kosten}
								</p>
							)}
							{data.acf.voraussetzung && (
								<p className="flex">
									<ClipboardText
										size={25}
										className="text-greyDark"
										weight="bold"
									/>
									{data.acf.voraussetzung}
								</p>
							)}
							{data.acf.treffpunkt && (
								<p className="flex">
									<MapTrifold
										size={25}
										className="text-greyDark"
										weight="bold"
									/>
									{data.acf.treffpunkt}
								</p>
							)}
							{data.acf.ort && (
								<p className="flex">
									<MapPin size={25} className="text-greyDark" weight="bold" />
									{data.acf.ort}
								</p>
							)}
							{data.acf.startzeit && (
								<p className="flex">
									<Clock size={25} className="text-greyDark" weight="bold" />
									{data.acf.startzeit} Uhr
								</p>
							)}
							{data.acf.endzeit && (
								<p className="flex">
									<Clock size={25} className="text-greyDark" weight="bold" />
									{data.acf.endzeit} Uhr
								</p>
							)}
						</section>
					</>
				)}
			</main>
			{!loading && (
				<div
					className={`${
						emailForm ? "z-50 opacity-100" : "-z-50 opacity-0"
					} flex fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-10 min-w-[60%] transition-all ease-in shadow-xl`}
				>
					<X
						size={32}
						className="text-blueMidnight absolute top-5 right-10 cursor-pointer"
						weight="bold"
						onClick={toggleEmailForm}
					/>
					{isSendForm ? (
						<div className="py-5">
							<h4 className="mb-4 mt-4">Danke für deine Anmeldung :)</h4>
							<h5>
								Du wirst in den nächsten Minuten eine Bestätigungsmail bekommen.
							</h5>
						</div>
					) : (
						<form ref={form} onSubmit={sendEmail} className="w-full">
							<label className="text-lg">Name</label>
							<input type="text" name="from_name" required />
							<label className="text-lg mt-4">Email</label>
							<input type="email" name="from_email" required />
							<label className="text-lg mt-4">Message</label>
							<textarea name="message" />
							<input
								type="email"
								hidden
								name="to_email"
								readOnly
								value={data.acf.anmeldung}
							/>
							<input
								type="text"
								hidden
								name="event"
								readOnly
								value={data.title.rendered}
							/>
							<input
								type="text"
								hidden
								name="to_name"
								readOnly
								value={data.acf.leitung}
							/>
							<input type="submit" value="Anmelden" className="btn mt-4" />
						</form>
					)}
				</div>
			)}
		</>
	);
}
