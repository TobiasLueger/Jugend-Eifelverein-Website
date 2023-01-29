/* {
    username: 'admin',
    password: 'password'
  } */

import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../lib/auth-context";
import { useNavigate } from "react-router-dom";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = { username, password };
		axios
			.post(
				"https://jugend.eifel-53359.de/api/wp-json/jwt-auth/v1/token",
				data,
				{
					withCredentials: true,
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then((response) => {
				// Handle successful login
				const token = response.data.token;
				// Save token in application state or local storage
				localStorage.setItem("token", token);
				console.log(token, response.data);
				// Navigate to protected page
				navigate("/intern");
			})
			.catch((error) => {
				// Handle failed login
				console.log("fail");
			});
	};

	return (
		<main className="pt-[116px]">
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Benutzername:
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</label>
				<br />
				<label>
					Passwort:
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<br />
				<button type="submit">Anmelden</button>
			</form>
		</main>
	);
}

export default Login;
