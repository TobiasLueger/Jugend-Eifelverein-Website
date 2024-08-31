import { useNavigate } from "react-router-dom";
import UserContext from "../User/UserContext";
import { useContext, useEffect } from "react";

const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();
	const { user } = localStorage.getItem("0fdaf5dd-d91b-4f8c-be18-fb1e89a5adc0") || useContext(UserContext);
	useEffect(() => {
		if (localStorage.getItem("0fdaf5dd-d91b-4f8c-be18-fb1e89a5adc0")) {
			return;
		} else if (user) {
			return;
		} else {
			navigate("/login");
		}
	}, []);
	return children;
};

export default ProtectedRoute;
