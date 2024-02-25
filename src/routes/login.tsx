import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function Login() {
	const { login, logout, register, user, isAuthenticated, isLoading } = useKindeAuth();
	const testK = useKindeAuth();
	console.log(testK, user);
	if (isLoading) {
		return <p>Loading</p>;
	}
	return (
		<main className="w-full h-screen flex items-center justify-center">
			<div className="flex items-center justify-center flex-col">
				<h1 className="font-lato text-[50px] font-bold relative -top-16">Login</h1>
				<button onClick={login} className="btn" type="button">
					Log In
				</button>
				<button onClick={logout} className="btn" type="button">
					Log Out
				</button>
				<button onClick={register} className="btn" type="button">
					Register
				</button>
				{isAuthenticated ? (
					<div>
						<p>User:{user?.given_name}</p>
						<p>Email:{user?.email}</p>
					</div>
				) : (
					<p>Please sign in or register!</p>
				)}
			</div>
		</main>
	);
}
