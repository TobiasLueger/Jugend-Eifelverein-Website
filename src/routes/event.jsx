import useEventData from "../lib/getData";
import { useParams } from "react-router";
import Button from "../components/Button/Button";
import sendMail from "../lib/sendMail";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

// TODO: MAKE EVENT DETAIL PAGE
/* export default function Event(props: any) { */
export default function Event(props) {
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
							<Button
								title="Anmelden"
								className="w-[100%] lg:w-fit"
								onClick={sendMail}
							/>
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

							<form ref={form} onSubmit={sendEmail}>
								<label>Name</label>
								<input type="text" name="from_name" />
								<label>Email</label>
								<input type="email" name="from_email" />
								<input
									type="email"
									hidden
									name="to_email"
									value={data.acf.anmeldung}
								/>
								<input
									type="text"
									hidden
									name="event"
									value={data.title.rendered}
								/>
								<input
									type="text"
									hidden
									name="to_name"
									value={data.acf.leitung}
								/>
								<label>Message</label>
								<textarea name="message" />
								<input type="submit" value="Send" />
							</form>
						</section>
					</>
				)}
			</main>
		</>
	);
}
