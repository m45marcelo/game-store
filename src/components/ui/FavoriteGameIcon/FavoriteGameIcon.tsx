"use client"
import { IoHeartCircleSharp, IoHeartSharp } from "react-icons/io5";

interface FavoriteGameIconProps {
	isFavorite: boolean;
	size: "small" | "medium"
}

export const FavoriteGameIcon = ({ isFavorite, size }: FavoriteGameIconProps) => {
	
	const sizeConfig = {
		small: {
			height: "h-5.5",
			width: "w-5.5",
			sizeHeartActive: 16,
			sizeHeartNoActive: 28
		},
		medium: {
			height: "h-7.5",
			width: "w-7.5",
			sizeHeartActive: 22,
			sizeHeartNoActive: 38
		}
	}

	const currentSize = sizeConfig[size];

	return isFavorite ? (
		<span className={`bg-gray-light/80 ${currentSize.height} ${currentSize.width} flex cursor-pointer items-center justify-center rounded-full`}>
			<IoHeartSharp size={currentSize.sizeHeartActive} className="text-red" />
		</span>
	) : (
		<IoHeartCircleSharp size={currentSize.sizeHeartNoActive} className="text-gray-light/80 cursor-pointer" />
	);
};
