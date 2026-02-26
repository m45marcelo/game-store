import Image from "next/image";
import iconReview1_5 from "../../../../../public/assets/images/Games Store/icons/review-1,5.svg";
import iconReview1 from "../../../../../public/assets/images/Games Store/icons/review-1.svg";
import iconReview2_5 from "../../../../../public/assets/images/Games Store/icons/review-2,5.svg";
import iconReview2 from "../../../../../public/assets/images/Games Store/icons/review-2.svg";
import iconReview3_5 from "../../../../../public/assets/images/Games Store/icons/review-3,5.svg";
import iconReview3 from "../../../../../public/assets/images/Games Store/icons/review-3.svg";
import iconReview4_5 from "../../../../../public/assets/images/Games Store/icons/review-4,5.svg";
import iconReview4 from "../../../../../public/assets/images/Games Store/icons/review-4.svg";
import iconReview5 from "../../../../../public/assets/images/Games Store/icons/review-5.svg";
import { DiscountPercent } from "../../Discount/DiscountPercent";
import { DiscountThrough } from "../../Discount/DiscountThrough";
import { FavoriteGameIcon } from "../../FavoriteGameIcon/FavoriteGameIcon";
import { GameCategoryDeveloper } from "../../Text/GameCategory";
import { GameTitlePrice } from "../../Text/GameTitlePrice";
import Link from "next/link";

interface CardOfferGamesProps {
	coverGame: string;
	nameGame: string;
	developer: string;
	percentDiscount: number;
	oldPrice: number;
	price: number;
	gameIsFavorite: boolean;
	inOffer: boolean;
	review: number;
	onClick: () => void;
}
export const CardOfferGames = ({
	coverGame,
	nameGame,
	developer,
	percentDiscount,
	oldPrice,
	price,
	gameIsFavorite,
	inOffer,
	review,
	onClick,
}: CardOfferGamesProps) => {
	let reviewGame = iconReview1;

	if (review > 1 && review <= 1.8) reviewGame = iconReview1;
	if (review > 1.3 && review <= 1.8) reviewGame = iconReview1_5;
	if (review > 1.8 && review <= 2.3) reviewGame = iconReview2;
	if (review > 2.3 && review <= 2.8) reviewGame = iconReview2_5;
	if (review > 2.8 && review <= 3.2) reviewGame = iconReview3;
	if (review > 3.2 && review <= 3.8) reviewGame = iconReview3_5;
	if (review > 3.8 && review <= 4.2) reviewGame = iconReview4;
	if (review > 4.2 && review <= 4.7) reviewGame = iconReview4_5;
	if (review > 4.7 && review <= 5) reviewGame = iconReview5;

	return (
		<Link href={"/game"}>
			<div className="h-68.5 w-full max-w-42.5 flex flex-col cursor-pointer">
			<div className="relative">
				<Image
					alt="cover game"
					src={coverGame}
					height={206}
					width={170}
					className="rounded-md mb-1.5 border border-border/50"
				/>
				<button
					onClick={onClick}
					type="button"
					className="absolute h-7 w-7 top-1.5 right-2.5 flex items-center justify-center cursor-pointer"
				>
					<FavoriteGameIcon size="small" isFavorite={gameIsFavorite} />
				</button>
			</div>
			<div className="w-full flex flex-col">
				<GameTitlePrice nameGame={nameGame} size="small" />
				<span className="text-[0.75rem] font-semibold text-gray-light mb-2">
					{developer}
				</span>
				<div className="flex items-center gap-1">
					{inOffer && (
						<>
							<DiscountPercent size="small" totalDiscount={percentDiscount} />
							<DiscountThrough oldPrice={oldPrice} size="small" />
						</>
					)}
					<div className="flex justify-between w-full">
						<GameTitlePrice size="small" price={price} />
						{!inOffer && (
							<span className="flex items-center gap-1">
								<Image alt="nota game" src={reviewGame} />
								<GameCategoryDeveloper
									size="small"
									nameCategory={review.toString().replace(".", ",")}
								/>
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
		</Link>
	);
};
