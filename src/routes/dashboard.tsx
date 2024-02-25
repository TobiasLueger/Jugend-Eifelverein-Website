import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
	const { user, isAuthenticated, logout } = useKindeAuth();
	const navigate = useNavigate();
	if (isAuthenticated) {
		return (
			<main className="pt-[116px]">
				<h2>Dashboard</h2>
				<p className="mt-2 lg:pl-2">Hallo {user?.given_name}</p>
				<p className="mt-2 lg:pl-2">Email: {user?.email}</p>

				<button onClick={logout} type="button" className="block px-4 py-2 text-sm  btn" role="menuitem">
					Log Out
				</button>
			</main>
		);
	} else {
		navigate("/");
	}
}
