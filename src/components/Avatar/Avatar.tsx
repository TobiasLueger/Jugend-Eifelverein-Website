import { User } from "phosphor-react";

export default function Button({ name }: { name?: string }) {
	return (
		<div className="flex flex-row">
			<div className="p-2 bg-white w-fit rounded-full shadow-lg mr-2">
				<User size={30} color="#272f30" weight="bold" />
			</div>
			<p className="m-0 font-medium items-center flex">
				{name ? name : "Veranstalter"}
			</p>
		</div>
	);
}
