import Image from "next/image";
import iconCategory from "../../../../../public/assets/images/Games Store/icons/icon-category.svg";
import { FavoriteGameIcon } from "../../FavoriteGameIcon/FavoriteGameIcon";
import { GameCategoryDeveloper } from "../../Text/GameCategory";
import { GameTitlePrice } from "../../Text/GameTitlePrice";

interface CardUpdatesProps {
	coverGame: string;
	nameGame: string;
	priceGame: number;
	categoryGame: string;
	developerGame: string;
}
export const CardUpdates = ({
	categoryGame,
	nameGame,
	priceGame,
	coverGame,
	developerGame,
}: CardUpdatesProps) => {
	return (
		<div className="w-full max-w-[33.875rem] h-[7.75rem] flex gap-3 rounded-lg border border-border bg-gray-black">
			<div className="relative h-full w-[16rem]">
				<span className="absolute top-1.5 right-2.5">
					<FavoriteGameIcon size="small" isFavorite />
				</span>
				<Image
					alt="cover game"
					src={coverGame}
					height={124}
					width={256}
					className="object-cover object-center"
				/>
			</div>
			<div className="flex flex-col justify-center">
				<GameTitlePrice nameGame={nameGame} size="medium" />
				<div className="flex flex-col gap-1 mt-1">
					<GameCategoryDeveloper nameDeveloper={developerGame} size="medium" />
					<span className="flex gap-1.5">
						<Image alt="icon category" src={iconCategory} />
						<GameCategoryDeveloper nameCategory={categoryGame} size="medium" />
					</span>
					<GameTitlePrice price={priceGame} size="medium" />
				</div>
			</div>
		</div>
	);
};
