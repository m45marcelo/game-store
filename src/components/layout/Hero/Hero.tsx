import Image from "next/image";
import { ButtonSeeBuyGame } from "@/components/ui/Button/ButtonSeeBuyGame";
import { DiscountPercent } from "@/components/ui/Discount/DiscountPercent";
import { DiscountThrough } from "@/components/ui/Discount/DiscountThrough";
import { GameTitlePrice } from "@/components/ui/Text/GameTitlePrice";
import imageGame4 from "../../../../public/assets/images/Games Store/banner jogos/read dead.svg";
import imageGame2 from "../../../../public/assets/images/Games Store/banner jogos/resident-evil.svg";
import imageGame3 from "../../../../public/assets/images/Games Store/banner jogos/stalker-2.svg";
import imageGame from "../../../../public/assets/images/Games Store/banner jogos/the last of us 2.svg";
import { HeroGameCard } from "./HeroGameCard";
import { TitleGameHero } from "./TitleGameHero";

export const Hero = () => {
	return (
		<section className="h-[20.25rem] w-full max-w-[69.75rem] gap-4 flex bg-background mb-8">
			<div className="h-[20.25rem] w-[45.5rem] relative rounded-lg border border-border/50 overflow-hidden flex">
				<Image
					src={imageGame}
					alt="cover game"
					height={324}
					width={726}
					className="object-cover object-center"
				/>
				<div className="w-full max-w-[16.75rem] flex flex-col absolute bottom-5 left-4">
					<TitleGameHero title="The Last Of Us Part II Remastered" />
					<div className="flex gap-2.5 items-center mt-1 mb-3.5">
						<DiscountPercent totalDiscount={60} size="medium" />
						<DiscountThrough oldPrice={124.99} size="big" />
						<GameTitlePrice size="medium" price={40} />
					</div>
					<ButtonSeeBuyGame size="small" textButton="Compre Já" />
				</div>
			</div>
			<div className="flex flex-col justify-between w-full max-w-[22.25rem]">
				<HeroGameCard
					coverGame={imageGame2}
					nameGame="Resident Evil 4"
					initialPrice={200}
					endPrice={100}
					percentDiscount={50}
				/>
				<HeroGameCard
					coverGame={imageGame3}
					nameGame="S.T.A.L.K.E.R.2"
					initialPrice={200}
					endPrice={100}
					percentDiscount={50}
				/>
				<HeroGameCard
					coverGame={imageGame4}
					nameGame="The Last Of Us"
					initialPrice={200}
					endPrice={100}
					percentDiscount={50}
				/>
			</div>
		</section>
	);
};
