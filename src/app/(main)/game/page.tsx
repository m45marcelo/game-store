import Image from "next/image"
import coverGame from "../../../../public/assets/images/Games Store/capas jogos/battlefield_5.svg"
import { GameTitlePrice } from "@/components/ui/Text/GameTitlePrice"
import { ReviewIcon } from "@/components/ui/ReviewIcon/ReviewIcon";
import iconCategory from "../../../../public/assets/images/Games Store/icons/icon-category.svg";
import { GameCategoryDeveloper } from "@/components/ui/Text/GameCategory";
import { ButtonAddCart } from "@/components/ui/Button/ButtonAddCart";
import { CardComments } from "@/components/ui/Card/CardComments/CardComments";
import { CardReview } from "@/components/ui/Card/CardReview/CardReview";
import { SectionPopularGames } from "@/components/layout/Sections/SectionPopularGames";
import { Footer } from "@/components/layout/Footer/Footer";

const Game = () => {
    return(
       <div className="flex flex-col bg-background pt-20 pr-5">
         <section className="w-full max-w-279 ">
            <div className="w-full flex gap-2.5">
                <div className="flex gap-2.5">
                    <div className="h-109.5 overflow-hidden object-center object-cover rounded-lg">
                        <Image alt="cover game" src={coverGame} height={438} />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <Image alt="cover game" src={coverGame} height={102}/>
                        <Image alt="cover game" src={coverGame} height={102}/>
                        <Image alt="cover game" src={coverGame} height={102}/>
                        <Image alt="cover game" src={coverGame} height={102}/>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col">
                        <GameTitlePrice nameGame="Batlefield V" size="extra large"/>
                        <span className="flex gap-1 mt-0.5 mb-0.5">
                            <ReviewIcon height={14} review={4.8}/>
                            <span className="text-[14px] font-medium text-gray-light">Reviews</span>
                        </span>
                        <GameTitlePrice price={199.99} size="big"/>
                        <span className="flex gap-1.5 mt-2">
						    <Image alt="icon category" src={iconCategory} height={14}/>
						    <GameCategoryDeveloper nameCategory="FPS" size="small" />
					    </span>
                    </div>
                    <div className="flex flex-col mt-6 mb-6">
                        <span className="text-base font-bold text-white text-[0.875rem]">
                            Sobre o jogo
                        </span>
                        <div className="flex flex-col gap-4">
                            <p className="flex text-[14px] text-gray-light font-normal w-full max-w-137.5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </p>
                            <p className="flex text-[14px] text-gray-light font-normal w-full max-w-137.5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            </p>
                        </div>
                    </div>
                    <ButtonAddCart/>
                </div>
            </div>
            <section className="flex gap-11 mt-8">
                <CardComments/>
                <CardReview/>
            </section>
            <SectionPopularGames/>
        </section>
        <Footer/>
        </div>
    )
}

export default Game