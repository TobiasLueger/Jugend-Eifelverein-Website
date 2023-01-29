import { useState, createContext } from "react";

interface AuthState {
	token: string | null;
	isAuthenticated: boolean;
}

interface AuthContext {
	state: AuthState;
	login: (token: string) => void;
	logout: () => void;
}

export const AuthContext = createContext<AuthContext>({
	state: { token: null, isAuthenticated: false },
	login: () => {},
	logout: () => {},
});

export function useAuth(): AuthContext {
	const [state, setState] = useState<AuthState>({
		token: null,
		isAuthenticated: false,
	});

	function login(token: string) {
		setState({ token, isAuthenticated: true });
	}

	function logout() {
		setState({ token: null, isAuthenticated: false });
	}

	return { state, login, logout };
}
