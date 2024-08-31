import { useContext, useState } from "react";
import UserContext from "../components/User/UserContext";
import { INTERN_PASSWORD } from "../lib/Env";

export default function Login() {
	let internPassword: any;

	if (process.env.NODE_ENV === "production") {
		// For production
		internPassword = process.env.VERCEL_INTERN_PASSWORD;
	} else {
		// For development
		internPassword = INTERN_PASSWORD;
	}

	const [pass, setPass] = useState("");
	const [error, setError] = useState(false);

	const { user, handleLogout, handleLogin } = useContext(UserContext);

	const checkPass = () => {
		if (pass !== internPassword) {
			setError(true);
		}
	};

	return (
		<main className="pt-[116px]">
			{user ? (
				<>
					<h2>Logout</h2>
					<button title="Logout" className="btn w-[100%] lg:w-fit mt-6" onClick={handleLogout}>
						Logout
					</button>
				</>
			) : (
				<>
					<h2>Login</h2>
					<p className="mt-10 mb-5">Bitte logge dich ein um in den internen Bereich zu kommen:</p>
					<input className="lg:w-1/4" type="password" onChange={(e) => setPass(e.target.value)} />
					{error && <p className="text-red">Falsches Password! Bitte probiere es nochmal.</p>}
					<button
						title="Login"
						onClick={() => {
							checkPass();
							handleLogin(pass);
						}}
						className="btn w-[100%] lg:w-fit mt-6"
					>
						Login
					</button>
				</>
			)}
		</main>
	);
}
