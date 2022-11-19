import useEventData from "../lib/getData";
import { useParams } from "react-router";
import Button from "../components/Button/Button";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { CircleNotch, X } from "phosphor-react";

// TODO: MAKE EVENT DETAIL PAGE AND CLEAN UP

export default function Event(props: any) {
	const params = useParams();

	const {
		eventData,
		loading,
		error,
	}: { eventData: any; loading: boolean; error: boolean } = useEventData(
		`events?slug=${params.id}`
	);

	let data;

	!loading ? (data = eventData[0]) : "";

	const form: any = useRef();

	const [mailConfirm, setMailConfirm] = useState(false);
	const [mailFormOpen, setMailFormOpen] = useState(false);
	const [emailLoading, setEmailLoading] = useState(false);

	function onClose() {
		setMailFormOpen(!mailFormOpen);
		setMailConfirm(false);
	}

	function onChange(value: any) {
		console.log("Captcha value:", value);
	}

	const sendEmail = (e: any) => {
		e.preventDefault();

		console.log("form", form);

		setEmailLoading(true);

		emailjs
			.sendForm(
				"service_0eip2u7",
				"template_to0r83j",
				form.current,
				"cFxR8Hw-2ziVbOuxS"
			)
			.then(
				(result: any) => {
					console.log(result.text);
					setMailConfirm(true);
					setEmailLoading(false);
				},
				(error: any) => {
					console.log(error.text);
				}
			);
	};

	return (
		<>
			<main>
				{!loading && (
					<>
						<div

							className={`bg-[center_center] bg-no-repeat bg-cover overflow-hidden relative -mt-8 w-screen left-2/4 -translate-x-1/2`}

							style={{
								backgroundImage: `url("${data.acf.bild}")`,
							}}
						>
							<div className="min-h-[300px] lg:min-h-[507px] relative left-0"></div>
						</div>
						<div className="bg-[#133a4a] relative w-screen left-2/4 -translate-x-1/2 text-white flex flex-col lg:flex-row justify-between items-center py-[31px] px-[15px] lg:px-[50px] text-[20px] lg:text-[22px]">
							<div className="mb-5 lg:mb-0">{data.acf.startdatum}</div>
							<a
								href={`mailto:${data.acf.anmeldung}?subject=Anmeldung zu: ${data.title.rendered}&body=Name:</br>Vorname:</br>`}
							>
								<Button title="Anmelden" className="w-[100%] lg:w-fit" />
							</a>
						</div>

						<section>
							<h2>{data.title.rendered}</h2>
							<p>{data.acf.fur_wen}</p>
							<p
								className=""
								dangerouslySetInnerHTML={{ __html: data.content.rendered }}
							></p>

							{data.acf.enthaltene_leistungen && (
								<p>{data.acf.enthaltene_leistungen}</p>
							)}
							{data.acf.kosten && <p>{data.acf.kosten}</p>}
							{data.acf.voraussetzung && <p>{data.acf.voraussetzung}</p>}
							{data.acf.treffpunkt && <p>{data.acf.treffpunkt}</p>}
							{data.acf.ort && <p>{data.acf.ort}</p>}
						</section>
					</>
				)}
			</main>
			{!loading && (
				<div
					className={`${
						mailFormOpen ? "" : "hidden"
					} fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 p-5 rounded-[6px] border-[#133849] border-[1px] min-h-[300px] min-w-[300px] flex justify-center items-center`}
				>
					{!mailConfirm && !emailLoading && (
						<form ref={form} onSubmit={sendEmail} className="flex flex-col">
							<label>Vor/Nachname</label>
							<input type="text" name="from_name" required />
							<label>Email</label>
							<input type="email" name="from_email" required />
							<label>Willst du noch mehr wissen?</label>
							<textarea name="message" />

							<input
								className="hidden"
								type="text"
								name="event"
								value={`${data.title.rendered}`}
							/>
							<input
								className="hidden"
								type="text"
								name="to_name"
								value={`${data.acf.leitung}`}
							/>
							<input
								className="hidden"
								type="text"
								name="send_to"
								value={`${data.acf.anmeldung}`}
							/>

							<ReCAPTCHA
								sitekey="6LftDBghAAAAAA1OJ-nX7Ny_Y74Hzw3V-joqce2K"
								onChange={onChange}
							/>

							<input type="submit" value="Send" className="btn" />
						</form>
					)}
					{emailLoading && (
						<>
							<span>Anmeldung wird versendet: </span>
							<CircleNotch
								size={40}
								className="animate-spin"
								color="#133849"
								weight="bold"
							/>
						</>
					)}
					{mailConfirm && (
						<div className="w-full text-center">
							Danke für deine Anmeldung. Wir melden uns bei dir mit weiteren
							Infos.
						</div>
					)}
					<X
						size={20}
						color="#67B31F"
						weight="bold"
						className="absolute top-3 right-3 cursor-pointer"
						onClick={onClose}
					/>
				</div>
			)}
		</>
	);
}
