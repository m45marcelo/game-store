import { SectionTitle } from "@/components/ui/Text/SectionTitle"
import Image from "next/image"
import coverGame from "../../../../public/assets/images/Games Store/capas jogos/gta_6.svg"
import coverGame1 from "../../../../public/assets/images/Games Store/capas jogos/metal_gear_solid.svg"
import coverGame2 from "../../../../public/assets/images/Games Store/capas jogos/doom_the_dark_ages.svg"
import { FavoriteGameIcon } from "@/components/ui/FavoriteGameIcon/FavoriteGameIcon"
import { ButtonSeeGame } from "@/components/ui/Button/ButtonSeeGame"
export const SectionArrivingSoon = () => {
    return(
        <section className="w-full flex flex-col gap-4 mt-8">
            <SectionTitle titleSection="Chegando em breve"/>
            <div className="flex gap-4">
                <div className="h-[35.625rem] w-[33.875rem] relative rounded-[0.5rem] border border-border">
                    <Image alt="cover game" src={coverGame} height={570} width={542}/>
                    <div className="h-full w-full rounded-[0.5rem] border border-border bg-gray-light/30 absolute top-0">
                        <div className="h-full w-full rounded-[0.5rem] relative">
                            <div className="absolute top-[16.5625rem] left-[12.8125rem]">
                                <ButtonSeeGame size="medium" textButton="Compre Já"/>
                            </div>
                            <span className="absolute top-2 left-120">
                                <FavoriteGameIcon size="medium" isFavorite={false}/>
                            </span>
                        </div>
                    </div>
                    
                </div>
                <div className="flex flex-col gap-4.5">
                    <div>
                        <Image alt="cover game" src={coverGame1} height={276} width={542}/>
                    </div>
                    <div>
                        <Image alt="cover game" src={coverGame2} height={276} width={542}/>
                    </div>
                </div>
            </div>
        </section>
    )
}