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
		if (localStorage.getItem("0fdaf5dd-d91b-4f8c-be18-fb1e89a5adc0")) {
			setUser({ id: "1", name: "robin" });
		}
	}, []);

	const handleLogin = (pass) => {
		if (pass == internPassword) {
			setUser({ id: "1", name: "robin" });
			localStorage.setItem("0fdaf5dd-d91b-4f8c-be18-fb1e89a5adc0", "true");
			navigate("/intern");
		}
	};
	const handleLogout = () => {
		setUser(null);
		localStorage.removeItem("0fdaf5dd-d91b-4f8c-be18-fb1e89a5adc0");
	};

	return <UserContext.Provider value={{ user, handleLogin, handleLogout }}>{children}</UserContext.Provider>;
};

export default UserProvider;
