import clsx from "clsx";
import Image from "next/image";
import iconCategory from "../../../../public/assets/images/Games Store/icons/icon-category.svg";
import { FavoriteGameIcon } from "../../FavoriteGameIcon/FavoriteGameIcon";
import { GameCategoryDeveloper } from "../../Text/GameCategory";
import { GameTitlePrice } from "../../Text/GameTitlePrice";

interface CardPopularGamesProps {
	size: "small" | "medium";
	nameGame: string;
	coverGame: string;
	priceGame: number;
	developerGame: string;
	categoryGame: string;
}

export const CardPopularGames = ({
	size,
	nameGame,
	coverGame,
	priceGame,
	developerGame,
	categoryGame,
}: CardPopularGamesProps) => {
	const sizeSelection = {
		small: {
			height: 166,
			width: 354,
		},
		medium: {
			height: 252,
			width: 540,
		},
	};

	const currentHeight = sizeSelection[size].height;
	const currentWidth = sizeSelection[size].width;
	return (
		<div className="flex flex-col bg-gray-black rounded-lg overflow-hidden gap-1.5 cursor-pointer border border-border">
			<div className="relative flex">
				<Image
					alt="cover game"
					src={coverGame}
					height={currentHeight}
					width={currentWidth}
				/>
				<span className="absolute top-2 right-2.5">
					<FavoriteGameIcon isFavorite size={size} />
				</span>
			</div>
			<div
				className={clsx(
					"flex flex-col w-full gap-2 px-3",
					{
						"h-14": size === "small",
					},
					{
						"h-16": size === "medium",
					},
				)}
			>
				<span className="flex justify-between">
					<GameTitlePrice size={size} nameGame={nameGame} />
					<GameTitlePrice size={size} price={priceGame} />
				</span>
				<span className="flex justify-between">
					<span className="flex gap-1.5">
						<Image
							alt="image icon"
							src={iconCategory}
							height={size === "medium" ? 18 : 16}
							width={size === "medium" ? 18 : 16}
						/>
						<GameCategoryDeveloper size={size} nameCategory={categoryGame} />
					</span>
					<GameCategoryDeveloper size={size} nameDeveloper={developerGame} />
				</span>
			</div>
		</div>
	);
};
