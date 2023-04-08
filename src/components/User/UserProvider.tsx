import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";
import { INTERN_PASSWORD } from "../../lib/Env";

const UserProvider = ({ children }) => {
	let internPassword: any;

	if (process.env.NODE_ENV === "production") {
		// For production
		internPassword = process.env.VERCEL_INTERN_PASSWORD;
	} else {
		// For development
		internPassword = INTERN_PASSWORD;
	}

	const navigate = useNavigate();
	const [user, setUser] = useState(null);

	useEffect(() => {
		if (localStorage.getItem("login")) {
			setUser({ id: "1", name: "robin" });
		}
	}, []);

	const handleLogin = (pass) => {
		if (pass == internPassword) {
			setUser({ id: "1", name: "robin" });
			localStorage.setItem("login", "true");
			console.log(pass);
			navigate("/intern");
		}
	};
	const handleLogout = () => {
		setUser(null);
		localStorage.removeItem("login");
	};

	return <UserContext.Provider value={{ user, handleLogin, handleLogout }}>{children}</UserContext.Provider>;
};

export default UserProvider;
