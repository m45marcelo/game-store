"use client";

import { useState } from "react";
import { CardOfferGames } from "@/components/ui/Card/CardOfferGames/CardOfferGames";
import { SectionTitle } from "@/components/ui/Text/SectionTitle";
import coverGame6 from "../../../../public/assets/images/Games Store/capas jogos/assassins_creed_shadows.svg";
import coverGame4 from "../../../../public/assets/images/Games Store/capas jogos/batman.svg";
import coverGame7 from "../../../../public/assets/images/Games Store/capas jogos/battlefield_5.svg";
import coverGame11 from "../../../../public/assets/images/Games Store/capas jogos/call_of_duty_6.svg";
import coverGame8 from "../../../../public/assets/images/Games Store/capas jogos/dying_light_2.svg";
import coverGame9 from "../../../../public/assets/images/Games Store/capas jogos/ea_sports_fc_25.svg";
import coverGame12 from "../../../../public/assets/images/Games Store/capas jogos/farcry_6.svg";
import coverGame5 from "../../../../public/assets/images/Games Store/capas jogos/gears_of_war_4.svg";
import coverGame2 from "../../../../public/assets/images/Games Store/capas jogos/gta5.svg";
import coverGame10 from "../../../../public/assets/images/Games Store/capas jogos/indiana_jones.svg";
import coverGame from "../../../../public/assets/images/Games Store/capas jogos/sniper_elite_resistance.svg";
import coverGame3 from "../../../../public/assets/images/Games Store/capas jogos/watch_dogs_legion.svg";

export const SectionOfferGames = () => {
	const gamesInOffer = [
		{
			name: "Sniper Elite Resistance",
			cover: coverGame,
			developer: "Rebelion",
			percentDiscount: 30,
			oldPrice: 156,
			newPrice: 130,
			review: 4.2,
		},
		{
			name: "GTA V",
			cover: coverGame2,
			developer: "Rockstar Games",
			percentDiscount: 30,
			oldPrice: 99,
			newPrice: 70,
			review: 4.8,
		},
		{
			name: "Watch Dogs Legion",
			cover: coverGame3,
			developer: "Ubisoft",
			percentDiscount: 30,
			oldPrice: 128,
			newPrice: 99,
			review: 4.1,
		},
		{
			name: "Batman: Arkham knight",
			cover: coverGame4,
			developer: "Rebelion",
			percentDiscount: 30,
			oldPrice: 156,
			newPrice: 130,
			review: 4.7,
		},
		{
			name: "Gears of War",
			cover: coverGame5,
			developer: "The Coalition ",
			percentDiscount: 30,
			oldPrice: 156,
			newPrice: 130,
			review: 4.7,
		},
		{
			name: "Assassins Creed Shadows",
			cover: coverGame6,
			developer: "Ubsoft",
			percentDiscount: 30,
			oldPrice: 156,
			newPrice: 130,
			review: 4.2,
		},
		{
			name: "Battlefield V",
			cover: coverGame7,
			developer: "Rebelion",
			percentDiscount: 30,
			oldPrice: 156,
			newPrice: 130,
			review: 4.4,
		},
		{
			name: "Dying Light 2",
			cover: coverGame8,
			developer: "Techland",
			percentDiscount: 30,
			oldPrice: 156,
			newPrice: 130,
			review: 4.2,
		},
		{
			name: "EA Sports FC Standard Edition",
			cover: coverGame9,
			developer: "EA",
			percentDiscount: 30,
			oldPrice: 156,
			newPrice: 130,
			review: 4.2,
		},
		{
			name: "Indiana Jone E o Grande Circulo",
			cover: coverGame10,
			developer: "MachineGame",
			percentDiscount: 30,
			oldPrice: 156,
			newPrice: 130,
			review: 4.4,
		},
		{
			name: "Call of Duty Black Ops 6",
			cover: coverGame11,
			developer: "Activision",
			percentDiscount: 30,
			oldPrice: 156,
			newPrice: 130,
			review: 4.5,
		},
		{
			name: "Far Cry 6",
			cover: coverGame12,
			developer: "Ubsoft",
			percentDiscount: 30,
			oldPrice: 156,
			newPrice: 130,
			review: 4.1,
		},
	];
	const [gameFavorite, setGameFavorite] = useState(false);
	function handleFavoriteGame() {
		setGameFavorite((prev) => (prev === false ? true : false));
	}

	return (
		<section className="flex w-full flex-col gap-4">
			<SectionTitle titleSection="Mega ofertas em jogos" />
			<div className="grid grid-cols-6 grid-rows-2 gap-x-4 gap-y-7">
				{gamesInOffer.map((item) => (
					<CardOfferGames
						key={item.name}
						onClick={handleFavoriteGame}
						gameIsFavorite={gameFavorite}
						nameGame={item.name}
						coverGame={item.cover}
						developer={item.developer}
						percentDiscount={item.percentDiscount}
						oldPrice={item.oldPrice}
						price={item.newPrice}
						inOffer
						review={item.review}
					/>
				))}
			</div>
		</section>
	);
};
