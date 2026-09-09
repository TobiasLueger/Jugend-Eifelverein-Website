import useSlugData from "../lib/getData";
import { useParams } from "react-router";
import { X, CurrencyEur, Clock, MapPin, MapTrifold, UsersThree, ClipboardText, Calendar, BagSimple, UserCircle } from "phosphor-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_REPLY_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "../lib/Env";
import Pill from "../components/Pill/Pill";
import defaultImg from "../../src/images/default.jpg";

export default function Event() {
	const params = useParams();

	const { slugData, loading, error } = useSlugData(`events?slug=${params.id}`, true);

	let data;

	!loading ? (data = slugData[0]) : "";

	const form = useRef();
	const waitlistFormRef = useRef();

	let serviceId, templateId, replyTemplateId, publicKey;

	if (process.env.NODE_ENV === "production") {
		// For production
		serviceId = process.env.VERCEL_EMAILJS_SERVICE_ID;
		templateId = process.env.VERCEL_EMAILJS_TEMPLATE_ID;
		replyTemplateId = process.env.VERCEL_EMAILJS_REPLY_TEMPLATE_ID;
		publicKey = process.env.VERCEL_EMAILJS_PUBLIC_KEY;
	} else {
		// For development
		serviceId = EMAILJS_SERVICE_ID;
		templateId = EMAILJS_TEMPLATE_ID;
		replyTemplateId = EMAILJS_REPLY_TEMPLATE_ID;
		publicKey = EMAILJS_PUBLIC_KEY;
	}

	const [isSendForm, setIsSendForm] = useState(false);
	const [isSubmittingForm, setIsSubmittingForm] = useState(false);

	const stripHtml = (value) =>
		String(value || "")
			.replace(/<[^>]*>/g, "")
			.replace(/&nbsp;/g, " ")
			.replace(/&amp;/g, "&")
			.replace(/&quot;/g, '"')
			.replace(/&#0?39;/g, "'")
			.replace(/&lt;/g, "<")
			.replace(/&gt;/g, ">")
			.trim();

	const eventTitle = !loading && data ? stripHtml(data.title.rendered) : "";
	const organizerName = !loading && data ? stripHtml(data.acf.leitung) : "";
	const organizerEmail = !loading && data ? data.acf.anmeldung : "";

	const getFormParams = (formElement, type) => {
		if (!formElement) {
			throw new Error("Formular nicht gefunden");
		}

		const fd = new FormData(formElement);
		const from_name = String(fd.get("from_name") || "").trim();
		const from_email = String(fd.get("from_email") || "").trim();
		const from_child = String(fd.get("from_child") || "").trim();
		const message = String(fd.get("message") || "").trim() || "—";
		const to_email = String(fd.get("to_email") || organizerEmail || "").trim();
		const to_name = stripHtml(fd.get("to_name") || organizerName || "Team");
		const event = stripHtml(fd.get("event") || eventTitle);
		const isWaitlist = type === "waitlist";

		return {
			from_name,
			from_email,
			from_child,
			message,
			to_email,
			to_name,
			event,
			email_subject: isWaitlist
				? `Anmeldung zur Warteliste der Veranstaltung: ${event}`
				: `Anmeldung zur Veranstaltung: ${event}`,
			reply_subject: isWaitlist
				? `Anmeldung zur Warteliste der Veranstaltung: ${event}`
				: `Anmeldung zur Veranstaltung: ${event}`,
			organizer_intro: isWaitlist
				? `du hast eine neue Anmeldung zur Warteliste von ${from_name} zur Veranstaltung ${event} bekommen.`
				: `du hast eine neue Anmeldung von ${from_name} zur Veranstaltung ${event} bekommen.`,
			organizer_cta: isWaitlist
				? `Sobald wieder ein Platz oder mehrere frei sind kannst du ${from_name} eine Mail an ${from_email} schreiben.`
				: `Schreibe ${from_name} eine Bestätigungsmail an ${from_email}`,
			reply_intro: isWaitlist
				? `Danke für deine Eintragung auf die Warteliste für die Veranstaltung: ${event}.`
				: `Danke für die Anmeldung zur Veranstaltung: ${event}.`,
			reply_followup: isWaitlist
				? "Sobald wieder ein Platz frei wird, melden wir uns bei dir."
				: "Wir melden uns rechtzeitig vor dem Termin der Veranstaltung mit weiteren Informationen wieder bei dir.",
		};
	};

	// Linked Auto-Reply + Strato liefert die Veranstalter-Mail manchmal leer aus.
	// Deshalb bewusst zwei getrennte Sends ohne Template-Verknüpfung.
	const sendMails = (templateParams, onSuccess) => {
		emailjs
			.send(serviceId, templateId, templateParams, publicKey)
			.then(() => emailjs.send(serviceId, replyTemplateId, templateParams, publicKey))
			.then(() => onSuccess())
			.catch((error) => {
				console.log(error?.text || error);
				setIsSubmittingForm(false);
				setIsSubmittingWaitlistForm(false);
			});
	};

	const sendEmail = (e) => {
		e.preventDefault();
		setIsSubmittingForm(true);
		sendMails(getFormParams(e.target, "registration"), () => {
			setIsSubmittingForm(false);
			setIsSendForm(true);
		});
	};

	const [emailForm, setEmailForm] = useState(false);

	const toggleEmailForm = () => {
		setEmailForm(!emailForm);

		setTimeout(() => {
			setIsSendForm(false);
			setIsSubmittingForm(false);
		}, 500);
	};

	const [isSendWaitlistForm, setIsSendWaitlistForm] = useState(false);
	const [isSubmittingWaitlistForm, setIsSubmittingWaitlistForm] = useState(false);

	const sendWaitlist = (e) => {
		e.preventDefault();
		setIsSubmittingWaitlistForm(true);
		sendMails(getFormParams(e.target, "waitlist"), () => {
			setIsSubmittingWaitlistForm(false);
			setIsSendWaitlistForm(true);
		});
	};

	const [waitlistForm, setWaitlistForm] = useState(false);

	const toggleWaitlistForm = () => {
		setWaitlistForm(!waitlistForm);

		setTimeout(() => {
			setIsSendWaitlistForm(false);
			setIsSubmittingWaitlistForm(false);
		}, 500);
	};

	return (
		<>
			<main className="mt-24">
				{!loading && (
					<>
						<div className="mb-5 lg:mb-10">
							<h1 className="leading-snug tracking-normal overflow-hidden overflow-ellipsis box">{data.title.rendered}</h1>
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
														<Calendar size={22} className="text-greyDark" weight="bold" />
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
														<Clock size={22} className="text-greyDark" weight="bold" />
														{data.acf.startzeit} Uhr
													</p>
												)}
											</div>
										</div>
										<div className="flex flex-col w-1/2 justify-between">
											<div>
												<p className="font-bold text-greyDark mb-2">{(data.acf.enddatum || data.acf.endzeit) && "Bis:"}</p>
											</div>
											<div className="mb-0">
												{data.acf.enddatum && (
													<p className="flex gap-2 font-bold text-greyDark">
														<Calendar size={22} className="text-greyDark" weight="bold" />
														{new Date(data.acf.enddatum).toLocaleString("de-DE", {
															day: "numeric",
															month: "short",
															year: "numeric",
														})}
													</p>
												)}
											</div>
											<div className="mb-5 lg:mb-0">
												{data.acf.endzeit && (
													<p className="flex gap-2 font-bold text-greyDark">
														<Clock size={22} className="text-greyDark" weight="bold" />
														{data.acf.endzeit} Uhr
													</p>
												)}
											</div>
										</div>
									</div>
								</div>
								<p className="mt-3">{data.acf.fur_wen}</p>
								<p className="mt-3 generatedText" dangerouslySetInnerHTML={{ __html: data.acf.text }}></p>
								<p className={`text-red ${data.acf.ausgebucht ? "mt-5 before:content-['❗'] flex" : "!hidden"}`}>Leider ist diese Veranstaltung derzeit ausgebucht. Trage Dich gerne auf unserer Warteliste ein. Wir informieren Dich, sobald ein Platz frei wird.</p>
								<div className="flex gap-5 flex-wrap">
									{data.acf.ausgebucht ? (
										<button title="Warteliste" className="btn !w-[100%] lg:!w-fit mt-6" onClick={toggleWaitlistForm}>
											Zur Warteliste
										</button>
									) : data.acf.externe_anmeldung ? (
										<a title="Anmelden" className="btn !w-[100%] lg:!w-fit mt-6" href={data.acf.externe_anmeldung}>
											Anmelden
										</a>
									) : (
										data.acf.anmeldung && (
											<button title="Anmelden" className="btn !w-[100%] lg:!w-fit mt-6" onClick={toggleEmailForm}>
												Anmelden
											</button>
										)
									)}
								</div>
							</div>
							<div className="w-full max-w-[100%] basis-[100%] lg:max-w-[50%] lg:basis-[50%] grow-0 shrink-0">
								<div className="overflow-hidden rounded-[12px] shadow-xl w-full flex relative">
									<img src={data.acf.bild ? data.acf.bild : defaultImg} className="w-full object-cover h-full max-h-[500px]" alt="" />
									{(data.acf.ausgebucht || data.acf.freie_plaetze) && (
										<div className="absolute top-[10px] lg:top-[15px] right-[10px] lg:right-[15px]">
											<Pill bookedUp={data.acf.ausgebucht} freePlaces={data.acf.ausgebucht ? undefined : data.acf.freie_plaetze} customeClass="text-[16px]" />
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
											<UsersThree size={25} className="text-greyDark mr-2" weight="bold" />
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
											<CurrencyEur size={25} className="text-greyDark mr-2" weight="bold" />
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
											<ClipboardText size={25} className="text-greyDark mr-2" weight="bold" />
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
											<MapTrifold size={25} className="text-greyDark mr-2" weight="bold" />
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
											<MapPin size={25} className="text-greyDark mr-2" weight="bold" />
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
											<BagSimple size={25} className="text-greyDark mr-2" weight="bold" />
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
											<UserCircle size={25} className="text-greyDark mr-2" weight="bold" />
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
					{emailForm && <div className="fixed w-full h-full bg-black z-[100] opacity-30"></div>}
					<div className={`${emailForm ? "z-[100] opacity-100" : "-z-50 opacity-0"} flex fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-10 min-w-[60%] transition-all ease-in shadow-xl`}>
						<X size={32} className="text-blueMidnight absolute top-5 right-10 cursor-pointer" weight="bold" onClick={toggleEmailForm} />
						{isSendForm ? (
							<div className="py-5">
								<h4 className="mb-4 mt-4">Danke für deine Anmeldung :)</h4>
								<h5>Du wirst in den nächsten Minuten eine Bestätigungsmail bekommen.</h5>
							</div>
						) : (
							<form ref={form} onSubmit={sendEmail} className="w-full">
								<label className="text-lg">Name*</label>
								<input type="text" name="from_name" required />
								<label className="text-lg mt-4">Email*</label>
								<input type="email" name="from_email" required />
								<label className="text-lg mt-4">Name des Kindes (Alter) / der Kinder (Alter)*</label>
								<input type="text" name="from_child" required />
								<label className="text-lg mt-4">Was soll noch mitgeteilt werden?</label>
								<textarea name="message" />
								<input type="email" hidden name="to_email" readOnly value={organizerEmail} />
								<input type="text" hidden name="event" readOnly value={eventTitle} />
								<input type="text" hidden name="to_name" readOnly value={organizerName} />
								<button type="submit" className="btn !w-[100%] mt-6 !flex items-center justify-center gap-3" disabled={isSubmittingForm}>
									{isSubmittingForm ? (
										<>
											<span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent mr-1" aria-hidden="true"></span>
											<span>Anmeldung wird gesendet...</span>
										</>
									) : (
										"Anmelden"
									)}
								</button>
								{isSubmittingForm && <p className="mt-3 text-sm text-greyDark">Bitte kurz warten. Deine Anmeldung wird gerade verschickt.</p>}
							</form>
						)}
					</div>

					{waitlistForm && <div className="fixed w-full h-full bg-black z-[100] opacity-30"></div>}
					{waitlistForm && (
						<div className={`${waitlistForm ? "z-[100] opacity-100" : "-z-50 opacity-0"} flex fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-10 min-w-[60%] transition-all ease-in shadow-xl`}>
							<X size={32} className="text-blueMidnight absolute top-5 right-10 cursor-pointer" weight="bold" onClick={toggleWaitlistForm} />
							{isSendWaitlistForm ? (
								<div className="py-5">
									<h4 className="mb-4 mt-4">Danke für deine Anmeldung zur Warteliste :)</h4>
									<h5>Du wirst in den nächsten Minuten eine Bestätigungsmail bekommen.</h5>
								</div>
							) : (
								<form ref={waitlistFormRef} onSubmit={sendWaitlist} className="w-full">
									<h5 className="mb-5">Zur Warteliste anmelden:</h5>
									<label className="text-lg">Name*</label>
									<input type="text" name="from_name" required />
									<label className="text-lg mt-4">Email*</label>
									<input type="email" name="from_email" required />
									<label className="text-lg mt-4">Name des Kindes (Alter) / der Kinder (Alter)*</label>
									<input type="text" name="from_child" required />
									<label className="text-lg mt-4">Was soll noch mitgeteilt werden?</label>
									<textarea name="message" />
									<input type="email" hidden name="to_email" readOnly value={organizerEmail} />
									<input type="text" hidden name="event" readOnly value={eventTitle} />
									<input type="text" hidden name="to_name" readOnly value={organizerName} />
									<button type="submit" className="btn !w-[100%] mt-6 !flex items-center justify-center gap-3" disabled={isSubmittingWaitlistForm}>
										{isSubmittingForm ? (
											<>
												<span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent mr-1" aria-hidden="true"></span>
												<span>Anmeldung wird gesendet...</span>
											</>
										) : (
											"Anmelden"
										)}
									</button>
									{isSubmittingWaitlistForm && <p className="mt-3 text-sm text-greyDark">Bitte kurz warten. Deine Anmeldung zur Warteliste wird gerade verschickt.</p>}
								</form>
							)}
						</div>
					)}
				</>
			)}
		</>
	);
}
