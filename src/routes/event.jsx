import useEventData from "../lib/getData";
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

	const { eventData, loading, error } = useEventData(
		`events?slug=${params.id}`
	);

	let data;

	!loading ? (data = eventData[0]) : "";

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log(form.current);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const [emailForm, setEmailForm] = useState(false);

	const toggleEmailForm = () => {
		setEmailForm(!emailForm);
	};

	return (
		<>
			<main className="mt-48">
				{!loading && (
					<>
						<div className="flex relative gap-4">
							<div className="w-2/3 max-h-60">
								<h2 className=" leading-snug tracking-normal">
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
							<div className="absolute bg-white w-2/3 h-full max-h-32 bottom-8 shadow-2xl rounded-[12px] flex flex-row justify-between p-4">
								<div className="mb-5 lg:mb-0">
									<p className="flex text-[25px] font-bold text-greyDark">
										<Calendar
											size={35}
											className="text-greyDark"
											weight="bold"
										/>{" "}
										Datum
									</p>
									{data.acf.startdatum} - {data.acf.enddatum}
								</div>
								<div>
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
								dangerouslySetInnerHTML={{ __html: data.content.rendered }}
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
				</div>
			)}
		</>
	);
}
