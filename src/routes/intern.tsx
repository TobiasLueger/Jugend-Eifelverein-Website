import { useContext, useEffect } from "react";
import { AuthContext, useAuth } from "../lib/auth-context";
import { useNavigate } from "react-router-dom";

function Intern() {
	const navigate = useNavigate();
	const { state } = useContext(AuthContext);

	/* useEffect(() => {
		if (!state.token || !state.isAuthenticated) {
			console.log("state:", state);
			navigate("/login");
		}
	}, [navigate]); */

	return (
		<main className="pt-[116px]">
			<h1>Dies ist eine geschützte Seite</h1>
		</main>
	);
}

export default Intern;
