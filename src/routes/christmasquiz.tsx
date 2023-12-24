import React, { useState, useEffect, useRef } from "react";
import muetze1 from "../images/muetze1.png";
import muetze2 from "../images/muetze2.png";
import { Envelope, InstagramLogo, X } from "phosphor-react";
import { Email } from "../lib/smtp";

interface Snowflake {
	x: number;
	y: number;
	speed: number;
	image: HTMLImageElement;
	animated: boolean;
}

const ChristmasQuiz: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [allAnimationsFinished, setAllAnimationsFinished] = useState(false);
	const [animationRunning, setAnimationRunning] = useState(false);
	const buttonClickedRef = useRef(false);

	const [inputName, setInputName] = useState("");
	const [inputLastName, setInputLastName] = useState("");
	const [inputEmail, setInputEmail] = useState("");
	const [inputEntry, setInputEntry] = useState("");

	const handleInputName = (event) => {
		setInputName(event.target.value);
	};

	const handleInputLastName = (event) => {
		setInputLastName(event.target.value);
	};

	const handleInputEmail = (event) => {
		setInputEmail(event.target.value);
	};

	const handleInputEntry = (event) => {
		setInputEntry(event.target.value);
	};

	const sendEmail = (event) => {
		console.log(event);
		Email.send({
			Host: "smtp.elasticemail.com",
			Username: "tobias-lueger@web.de",
			Password: "E69AD8FBA84F5B6C9A678289749C33C01C3F",
			To: "stefan-lueger@web.de",
			From: "tobias-lueger@web.de",
			Subject: `Weihnachtsrätsel Ergebnis von ${inputName} ${inputLastName}`,
			Body: `${inputName} ${inputLastName} hat teilgenommen und sein Ergebnis ist:<br/>${inputEntry}<br/><br/> Er hat mit der Email ${inputEmail} teilgenommen. <br/><br/><br/>`,
		}).then((message) => console.log("sended"));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		sendEmail(event);
	};

	const calculateCanvasSize = () => {
		const canvas = canvasRef.current;
		if (canvas) {
			const parent = canvas.parentElement;
			if (parent) {
				canvas.width = parent.clientWidth;
				canvas.height = parent.clientHeight;
			}
		}
	};

	useEffect(() => {
		calculateCanvasSize();
		window.addEventListener("resize", calculateCanvasSize);

		return () => {
			window.removeEventListener("resize", calculateCanvasSize);
		};
	}, []);

	const restartAnimations = () => {
		buttonClickedRef.current = true;
		setAllAnimationsFinished(false);
	};

	// Generate images dynamically on each render
	const imageObjects: Snowflake[] = [];
	for (let i = 0; i < 10; i++) {
		const image = new Image();
		image.src = muetze1;
		imageObjects.push({
			x: Math.random() * (window.innerWidth - 300),
			y: Math.random() * -400,
			speed: 0.5 + Math.random() * 1.5,
			image,
			animated: false,
		});
	}

	for (let i = 0; i < 10; i++) {
		const image = new Image();
		image.src = muetze2;
		imageObjects.push({
			x: Math.random() * (window.innerWidth - 150),
			y: Math.random() * -400,
			speed: 0.5 + Math.random() * 1.5,
			image,
			animated: false,
		});
	}

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) {
			return; // Skip the animation if canvas is null
		}

		const ctx = canvas.getContext("2d");

		if (!ctx) {
			return; // Skip the animation if context is null
		}

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			let animationsDone = true;

			imageObjects.forEach((snowflake) => {
				if (!snowflake.animated) {
					ctx.drawImage(snowflake.image, snowflake.x, snowflake.y, 100, 100);
					snowflake.y += snowflake.speed;

					if (snowflake.y > canvas.height) {
						snowflake.animated = true;
					} else {
						animationsDone = false;
					}
				}
			});

			if (animationsDone && buttonClickedRef.current) {
				setAllAnimationsFinished(true);
				buttonClickedRef.current = false;
			} else {
				requestAnimationFrame(animate);
			}

			if (animationsDone) {
				setAnimationRunning(true);
			} else {
				setAnimationRunning(false);
			}
		};

		animate();
	}, [canvasRef.current?.width, canvasRef.current?.height, buttonClickedRef.current]);

	const [emailForm, setEmailForm] = useState(false);
	const [isSendWaitlistForm, setIsSendWaitlistForm] = useState(false);

	const toggleEmailForm = () => {
		setEmailForm(!emailForm);
	};

	const gameFormSended = () => {
		setIsSendWaitlistForm(!isSendWaitlistForm);
	};

	return (
		<main className="pt-[116px] pb-96">
			<h2>Weihnachtsquiz</h2>
			<h5 className="mt-6">Herzlich willkommen zum Weihnachtsquiz mit einer extra Portion festlichem Flair! Deine Mission: Zähle die Mützen mit unserem Logo, die sich unter all den normalen Mützen verstecken. Denke daran, deine Antworten rechtzeitig bis zum 07.01.2024 um 23.59 Uhr einzureichen, um die Chance auf großartige Weihnachtspreise zu wahren. Frohes Rätseln und eine besinnliche Weihnachtszeit! 🎅🧣🔍</h5>
			<div className="my-8 max-h-96 h-96">
				<div className="h-16 flex gap-4 mb-6">
					<button className="btn" onClick={restartAnimations}>
						Nochmal abspielen
					</button>
				</div>
				<canvas ref={canvasRef} id="canvas" className="w-full h-full border-2 border-solid border-gray-400 rounded-xl"></canvas>

				<h5 className="mt-10">Schicke uns die Lösung per Mail oder als Instagram Direkt Nachricht:</h5>
				<div className="flex flex-wrap gap-4 mt-4">
					<button className="btn w-fit !p-4" onClick={toggleEmailForm}>
						<Envelope size={40} weight="bold" />
					</button>
					<a href="https://www.instagram.com/eifeljugendrheinbach/" target="__blank" className="btn w-fit !p-4">
						<InstagramLogo size={40} weight="bold" />
					</a>
				</div>
			</div>

			<div className={`${emailForm ? "z-[100] opacity-100" : "-z-50 opacity-0"} flex fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-10 min-w-[100%] md:min-w-[60%] transition-all ease-in shadow-xl`}>
				<X size={32} className="text-blueMidnight absolute top-5 right-10 cursor-pointer" weight="bold" onClick={toggleEmailForm} />

				{isSendWaitlistForm ? (
					<div className="py-5">
						<h4 className="mb-4 mt-4">Danke für deine Teilnahme :)</h4>
						<h5>Du wirst von uns kontaktiert falls du gewonnen hast.</h5>
					</div>
				) : (
					<form onSubmit={handleSubmit} className="w-full">
						<label className="text-lg">Vorname*</label>
						<input type="text" name="from_name" onChange={handleInputName} required />
						<label className="text-lg mt-4">Nachname*</label>
						<input type="text" name="from_name" onChange={handleInputLastName} required />
						<label className="text-lg mt-4">Email*</label>
						<input type="email" name="from_email" onChange={handleInputEmail} required />
						<label className="text-lg mt-4">Lösung*</label>
						<input type="number" placeholder="7 oder 10 oder 12?" name="from_child" onChange={handleInputEntry} required />
						<div className="flex gap-2 items-center mt-4">
							<input type="checkbox" id="checkbox_id" required />
							<label htmlFor="checkbox_id" className="p-0 m-0">
								{" "}
								Ich akzeptiere die{" "}
								<a href="/datenschutz#weihnachtsraetsel" className="text-greenDefault underline">
									Teilnahmebedingungen
								</a>{" "}
								des Weihnachtsrätsels.
							</label>
						</div>
						<input type="submit" value="Anmelden" className="btn !text-white mt-4 mb-4" onClick={gameFormSended} />
						<span>* Pflichtfelder</span>
					</form>
				)}
			</div>
		</main>
	);
};

export default ChristmasQuiz;
