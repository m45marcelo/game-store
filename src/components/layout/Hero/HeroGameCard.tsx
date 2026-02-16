import Image from "next/image";
import { DiscountPercent } from "@/components/ui/Discount/DiscountPercent";
import { DiscountThrough } from "@/components/ui/Discount/DiscountThrough";
import { GameTitlePrice } from "@/components/ui/Text/GameTitlePrice";

interface HeroGameCardProps {
	coverGame: string;
	nameGame: string;
	initialPrice: number;
	endPrice: number;
	percentDiscount: number;
}

export const HeroGameCard = ({
	coverGame,
	nameGame,
	initialPrice,
	endPrice,
	percentDiscount,
}: HeroGameCardProps) => {
	return (
		<div className="h-24 w-full flex rounded-lg bg-gray border gap-2 items-center cursor-pointer border-border">
			<Image alt="cover game" src={coverGame} width={170} height={94} />
			<div className="flex flex-col gap-1">
				<GameTitlePrice nameGame={nameGame} size="small"/>
				<div className="flex gap-2 items-center">
					<DiscountPercent totalDiscount={percentDiscount} size="small" />
					<DiscountThrough oldPrice={initialPrice} size="medium" />
				</div>
				<div className="flex gap-1.5">
					<span className="text-[0.875rem] font-normal text-white">
						Por apenas
					</span>
					<GameTitlePrice price={endPrice} size="small"/>
				</div>
			</div>
		</div>
	);
};
