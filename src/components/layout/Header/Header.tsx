import { IoGameController, IoHeartSharp, IoHomeSharp } from "react-icons/io5";
import { ItemMenuHeader } from "./ItemMenuHeader";

export const Header = () => {
	const Links = [
		{
			href: "/",
			name: "Home",
			icon: IoHomeSharp,
		},
		{
			href: "/my-library",
			name: "My Library",
			icon: IoGameController,
		},
		{
			href: "/favorites",
			name: "Favorites",
			icon: IoHeartSharp,
		},
	];
	return (
		<header className="h-21.25 z-10 w-full fixed flex items-center justify-center bg-black/20 backdrop-blur-xl bg-amber-900">
			<div className="flex justify-between w-full max-w-277.5">
				<div className="flex items-center gap-6.5">
					<form className="flex">
						<input
							type="text"
							className="h-13 w-79.5 px-6 flex items-center justify-center outline-0 text-base font-medium text-text-gray rounded-3xl border-4 border-black bg-input"
							placeholder="Search"
						/>
					</form>
					<nav className="flex">
						<ul className="flex gap-13">
							{Links.map((item) => (
								<ItemMenuHeader
									key={item.name}
									nameItem={item.name}
									iconItem={item.icon}
								/>
							))}
						</ul>
					</nav>
				</div>

				<button
					type="button"
					className="h-11.5 w-32 rounded-[0.5rem] font-medium bg-text-light text-black"
				>
					Sign Up
				</button>
			</div>
		</header>
	);
};
