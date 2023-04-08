import { useNavigate } from "react-router-dom";
import UserContext from "../User/UserContext";
import { useContext, useEffect } from "react";

const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();
	const { user } = localStorage.getItem("login") || useContext(UserContext);
	useEffect(() => {
		if (localStorage.getItem("login")) {
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
