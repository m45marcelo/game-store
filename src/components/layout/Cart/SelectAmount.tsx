import { IoChevronBack, IoChevronForward } from "react-icons/io5";
export const SelectedAmount = () => {
	return (
		<div className="flex gap-3 items-center">
			<button
				type="button"
				className="h-9 w-9 bg-gray border cursor-pointer border-border rounded-md flex items-center justify-center"
			>
				<IoChevronBack size={18} color="#ffff" />
			</button>

			<span className="text-base font-medium text-white">1</span>

			<button
				type="button"
				className="h-9 w-9 bg-gray border cursor-pointer border-border rounded-md flex items-center justify-center"
			>
				<IoChevronForward size={18} color="#ffff" />
			</button>
		</div>
	);
};
