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
	BagSimple,
	UserCircle,
} from "phosphor-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import {
	EMAILJS_SERVICE_ID,
	EMAILJS_TEMPLATE_ID,
	EMAILJS_PUBLIC_KEY,
} from "../lib/Env";
import Pill from "../components/Pill/Pill";
import defaultImg from "../../src/images/default.jpg";

// TODO: MAKE EVENT DETAIL PAGE
export default function Event() {
	const params = useParams();

	const { slugData, loading, error } = useSlugData(
		`events?slug=${params.id}`,
		true
	);

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
			<main className="mt-24">
				{!loading && (
					<>
						<div className="mb-5 lg:mb-10">
							<h1 className="leading-snug tracking-normal overflow-hidden overflow-ellipsis box">
								{data.title.rendered}
							</h1>
						</div>
						<div className="flex flex-wrap flex-col-reverse lg:flex-row">
							<div className="w-full max-w-[100%] basis-[100%] lg:max-w-[50%] lg:basis-[50%] grow-0 shrink-0 lg:pr-8 mb-8 lg:mb-0">
								<div className="w-full h-fit mb-8 flex flex-row justify-between mt-5">
									<div className="w-full flex flex-wrap lg:gap-0 rounded-[12px]">
										<div className="flex flex-col w-1/2 justify-between">
											<div>
												<p className="font-bold text-greyDark mb-2">Vom:</p>
											</div>
											<div className="mb-0 ">
												{data.acf.datum && (
													<p className="flex gap-2 font-bold text-greyDark">
														<Calendar
															size={22}
															className="text-greyDark"
															weight="bold"
														/>
														{new Date(data.acf.datum).toLocaleString("de-DE", {
															day: "numeric",
															month: "short",
															year: "numeric",
														})}
													</p>
												)}
											</div>
											<div className="mb-5 lg:mb-0 flex">
												{data.acf.startzeit && (
													<p className="flex gap-2 font-bold text-greyDark">
														<Clock
															size={22}
															className="text-greyDark"
															weight="bold"
														/>
														{data.acf.startzeit} Uhr
													</p>
												)}
											</div>
										</div>
										<div className="flex flex-col w-1/2 justify-between">
											<div>
												<p className="font-bold text-greyDark mb-2">
													{(data.acf.enddatum || data.acf.endzeit) && "Bis:"}
												</p>
											</div>
											<div className="mb-0">
												{data.acf.enddatum && (
													<p className="flex gap-2 font-bold text-greyDark">
														<Calendar
															size={22}
															className="text-greyDark"
															weight="bold"
														/>
														{new Date(data.acf.enddatum).toLocaleString(
															"de-DE",
															{
																day: "numeric",
																month: "short",
																year: "numeric",
															}
														)}
													</p>
												)}
											</div>
											<div className="mb-5 lg:mb-0">
												{data.acf.endzeit && (
													<p className="flex gap-2 font-bold text-greyDark">
														<Clock
															size={22}
															className="text-greyDark"
															weight="bold"
														/>
														{data.acf.endzeit} Uhr
													</p>
												)}
											</div>
										</div>
									</div>
								</div>
								<p className="mt-3">{data.acf.fur_wen}</p>
								<p
									className="mt-3"
									dangerouslySetInnerHTML={{ __html: data.acf.text }}
								></p>
								<button
									title="Anmelden"
									className="btn w-[100%] lg:w-fit mt-6"
									onClick={toggleEmailForm}
									disabled={data.acf.ausgebucht ? true : false}
								>
									Anmelden
								</button>
							</div>
							<div className="w-full max-w-[100%] basis-[100%] lg:max-w-[50%] lg:basis-[50%] grow-0 shrink-0">
								<div className="overflow-hidden rounded-[12px] shadow-xl w-full flex relative">
									<img
										src={data.acf.bild ? data.acf.bild : defaultImg}
										className="w-full object-cover h-full max-h-[500px]"
										alt=""
									/>
									{(data.acf.ausgebucht || data.acf.freie_plaetze) && (
										<div className="absolute top-[10px] lg:top-[15px] right-[10px] lg:right-[15px]">
											<Pill
												bookedUp={data.acf.ausgebucht}
												freePlaces={data.acf.freie_plaetze}
												customeClass="text-[16px]"
											/>
										</div>
									)}
								</div>
							</div>
						</div>

						<section className="mt-5 lg:mt-10">
							<h2 className="h3 mb-6">Weitere Informationen</h2>
							<div className="lg:flex lg:flex-wrap">
								{data.acf.enthaltene_leistungen && (
									<div className="mb-5 lg:w-1/2">
										<p className="mb-2">
											<b>Enthaltene Leistungen:</b>
										</p>
										<p className="flex">
											<UsersThree
												size={25}
												className="text-greyDark mr-2"
												weight="bold"
											/>
											{data.acf.enthaltene_leistungen}
										</p>
									</div>
								)}
								{data.acf.kosten && (
									<div className="mb-5 lg:w-1/2">
										<p className="mb-2">
											<b>Kosten:</b>
										</p>
										<p className="flex">
											<CurrencyEur
												size={25}
												className="text-greyDark mr-2"
												weight="bold"
											/>
											{data.acf.kosten}
										</p>
									</div>
								)}
								{data.acf.voraussetzung && (
									<div className="mb-5 lg:w-1/2">
										<p className="mb-2">
											<b>Voraussetzung:</b>
										</p>
										<p className="flex">
											<ClipboardText
												size={25}
												className="text-greyDark mr-2"
												weight="bold"
											/>
											{data.acf.voraussetzung}
										</p>
									</div>
								)}
								{data.acf.treffpunkt && (
									<div className="mb-5 lg:w-1/2">
										<p className="mb-2">
											<b>Treffpunkt:</b>
										</p>
										<p className="flex">
											<MapTrifold
												size={25}
												className="text-greyDark mr-2"
												weight="bold"
											/>
											{data.acf.treffpunkt}
										</p>
									</div>
								)}
								{data.acf.ort && (
									<div className="mb-5 lg:w-1/2">
										<p className="mb-2">
											<b>Ort:</b>
										</p>
										<p className="flex">
											<MapPin
												size={25}
												className="text-greyDark mr-2"
												weight="bold"
											/>
											{data.acf.ort}
										</p>
									</div>
								)}
								{data.acf.mitbringen && (
									<div className="mb-5 lg:w-1/2">
										<p className="mb-2">
											<b>Mitbringen:</b>
										</p>
										<p className="flex">
											<BagSimple
												size={25}
												className="text-greyDark mr-2"
												weight="bold"
											/>
											{data.acf.mitbringen}
										</p>
									</div>
								)}
								{data.acf.leitung && (
									<div className="mb-5 lg:w-1/2">
										<p className="mb-2">
											<b>Leitung:</b>
										</p>
										<p className="flex">
											<UserCircle
												size={25}
												className="text-greyDark mr-2"
												weight="bold"
											/>
											{data.acf.leitung}
										</p>
									</div>
								)}
							</div>
						</section>
					</>
				)}
			</main>
			{!loading && (
				<>
					{emailForm && (
						<div className="fixed w-full h-full bg-black z-[100] opacity-30"></div>
					)}
					<div
						className={`${
							emailForm ? "z-[100] opacity-100" : "-z-50 opacity-0"
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
									Du wirst in den nächsten Minuten eine Bestätigungsmail
									bekommen.
								</h5>
							</div>
						) : (
							<form ref={form} onSubmit={sendEmail} className="w-full">
								<label className="text-lg">Name*</label>
								<input type="text" name="from_name" required />
								<label className="text-lg mt-4">Email*</label>
								<input type="email" name="from_email" required />
								<label className="text-lg mt-4">
									Name des Kindes / der Kinder*
								</label>
								<input type="text" name="from_child" required />
								<label className="text-lg mt-4">
									Was soll noch mitgeteilt werden?
								</label>
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
				</>
			)}
		</>
	);
}
