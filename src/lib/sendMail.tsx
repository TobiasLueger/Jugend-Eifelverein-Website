import sgMail from "@sendgrid/mail";
/* sgMail.setApiKey(process.env.SENDGRID_API_KEY); */
sgMail.setApiKey(
	"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"
);

const msg = {
	to: "news-eifeljugend@web.de", // Change to your recipient
	from: "news-eifeljugend@web.de", // Change to your verified sender
	subject: "Sending with SendGrid is Fun",
	text: "and easy to do anywhere, even with Node.js",
	html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

const sendMail = () => {
	sgMail
		.send(msg)
		.then((response) => {
			console.log(response[0].statusCode);
			console.log(response[0].headers);
		})
		.catch((error: any) => {
			console.error(error);
		});
};

export default sendMail;
