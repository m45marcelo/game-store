"use client"
import { CardPopularGames } from "@/components/ui/Card/CardPopularGames/CardPopularGames"
import { SectionTitle } from "@/components/ui/Text/SectionTitle"
import coverGame from "../../../../public/assets/images/Games Store/capas jogos/sniper_elite_resistance.svg";
import coverGame2 from "../../../../public/assets/images/Games Store/capas jogos/gta5.svg";
import coverGame3 from "../../../../public/assets/images/Games Store/capas jogos/watch_dogs_legion.svg";
import coverGame4 from "../../../../public/assets/images/Games Store/capas jogos/batman.svg";
import coverGame5 from "../../../../public/assets/images/Games Store/capas jogos/gears_of_war_4.svg";
import coverGame6 from "../../../../public/assets/images/Games Store/capas jogos/assassins_creed_shadows.svg";
import { CardOfferGames } from "@/components/ui/Card/CardOfferGames/CardOfferGames";
import { useState } from "react";
export const SectionPopularGames = () => {
    const gamesInOffer = [
		{
			name: "Sniper Elite Resistance",
			cover: coverGame,
			developer: "Rebelion",
			percentDiscount: 30,
			oldPrice: 156,
			newPrice: 130,
			review: 4.2
		},
		{
			name: "GTA V",
			cover: coverGame2,
			developer: "Rockstar Games",
			percentDiscount: 30,
			oldPrice: 99,
			newPrice: 70,
			review: 4.8
		},
		{
			name: "Watch Dogs Legion",
			cover: coverGame3,
			developer: "Ubisoft",
			percentDiscount: 30,
			oldPrice: 128,
			newPrice: 99,
			review: 4.1
		},
		{
			name: "Batman: Arkham knight",
			cover: coverGame4,
			developer: "Rebelion",
			percentDiscount: 30,
			oldPrice: 156,
			newPrice: 130,
			review: 4.7
		},
		{
			name: "Gears of War",
			cover: coverGame5,
			developer: "The Coalition ",
			percentDiscount: 30,
			oldPrice: 156,
			newPrice: 130,
			review: 4.7
		},
		{
			name: "Assassins Creed Shadows",
			cover: coverGame6,
			developer: "Ubsoft",
			percentDiscount: 30,
			oldPrice: 156,
			newPrice: 130,
			review: 4.2
		},]
        const [gameFavorite, setGameFavorite] = useState(false);
        function handleFavoriteGame() {
            setGameFavorite((prev) => (prev === false ? true : false));
        }
    return(
        <section className="flex flex-col gap-4 mt-8">
            <SectionTitle titleSection="Jogos Populares"/>
            {/* <div className="flex gap-4">
                <CardPopularGames coverGame={coverGame}  nameGame="Crashlands 2" categoryGame="Corrida" developerGame="Butterscotch Shenanigans" priceGame={299.99} size="medium"/>
                <CardPopularGames coverGame={coverGame} nameGame="Crashlands 2" categoryGame="Corrida" developerGame="Butterscotch Shenanigans" priceGame={299.99} size="medium"/>
            </div>
            <div className="flex gap-4">
                <CardPopularGames coverGame={coverGame} nameGame="Crashlands 2" categoryGame="Corrida" developerGame="Butterscotch Shenanigans" priceGame={299.99} size="small"/>
                <CardPopularGames coverGame={coverGame} nameGame="Crashlands 2" categoryGame="Corrida" developerGame="Butterscotch Shenanigans" priceGame={299.99} size="small"/>
                <CardPopularGames coverGame={coverGame} nameGame="Crashlands 2" categoryGame="Corrida" developerGame="Butterscotch Shenanigans" priceGame={299.99} size="small"/>
            </div> */}
            <div className="grid grid-cols-6 grid-rows-1 gap-x-4">
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
                                    inOffer={false}
									review={item.review}
                                />
                            ))}
                        </div>
        </section>
    )
}