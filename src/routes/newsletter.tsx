import axios from 'axios';
import React, { useState } from 'react';

export default function Newsletter() {
	// return (
	// 	<main className="pt-[116px]">
	// 		<h2>Newsletter</h2>
	// 		<section>
	// 			<iframe
	// 				src="https://jugend.eifel-53359.de/anmeldung_newsletter.html"
	// 				className="w-full h-[720px] overflow-hidden border-none inline-block"
	// 				scrolling="no"
	// 			></iframe>
	// 		</section>
	// 	</main>
	// );

	const [email, setEmail] = useState('');

	/** 
	 * TODO: implement cleverreach API
	 * RESOURCES:
	 * - https://rest.cleverreach.com/howto/index.php
	 * - https://eu2.cleverreach.com/admin/account_rest.php
	 * - https://eu2.cleverreach.com/admin/oauth_demo.php?code=e56b8bddd395c564eb06db7729112e7a0b9c0bc4&test=NDh0cU9qQUQ1TGM5dW5qUUk3YzFLODl3WFJQNUEwandLNC8vcEdNS2VHST0=
	 * - https://rest.cleverreach.com/howto/#examples
	 * * https://rest.cleverreach.com/v3/groups.json/519468/receivers
	 * 
	*/ 


  	const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Perform the CleverReach API call to add the user to the mailing list here.
		// Use the Axios library to make the POST request to the CleverReach API.

		try {
		// Make an HTTP POST request to the CleverReach API using the API key.
		// Replace 'YOUR_API_KEY' with your actual API key.
		const response = await axios.post(
			'https://rest.cleverreach.com/v3/groups.json/519468/receivers',
			{
			email,
			/* Other user data fields if needed */
			},
			{
			headers: {
				Authorization: 'Bearer {API-TOKEN}',
				'Content-Type': 'application/json',
			},
			}
		);

		// Check the response and handle success or errors accordingly.
		if (response.status === 201) {
			// User added successfully.
			console.log('User added to the mailing list.');
		} else {
			console.error('Failed to add user to the mailing list.');
		}
		} catch (error) {
			console.error('An error occurred:', error);
		}
	};

	return (

		<main className="pt-[116px]">
			<h2>Newsletter</h2>
			<section>
				<form onSubmit={handleSubmit}>
					<label>Email Address:</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<button type="submit">Subscribe</button>
				</form>
			</section>
		</main>
	);
}
