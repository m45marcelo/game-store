import { SectionTitle } from "@/components/ui/Text/SectionTitle"
import coverGame from "../../../../public/assets/images/Games Store/capas jogos/battlefield_5.svg"
import Image from "next/image"
import { GameTitlePrice } from "@/components/ui/Text/GameTitlePrice"
import { SelectedAmount } from "./SelectAmount"
import { IoTrash } from "react-icons/io5";

export const Cart = () => {
    return(
        <div className="w-screen h-screen bg-gray/30 justify-end flex fixed top-0 left-0 z-1000">
            <div className="w-[27.125rem] p-5 h-full bg-background">
                <SectionTitle titleSection="Carrinho"/>
                <div className="flex justify-between items-center mt-5 pb-4 border-b border-b-border">
                    <div className="flex gap-2.5">
                        <Image alt="cover game" src={coverGame} height={102}/>
                        <div className="flex flex-col gap-1.5">
                            <GameTitlePrice nameGame="Battlefield" size="medium"/>
                            <div className="flex flex-col b">
                                <GameTitlePrice price={199.99} size="big"/>
                                <SelectedAmount/>
                            </div>
                        </div>
                    </div>
                    <IoTrash size={24} className="text-gray-light hover:text-red cursor-pointer"/>
                </div>
                <div className="flex justify-between items-center mt-5 pb-4 border-b border-b-border">
                    <span className="text-[14px] font-medium text-white">Subtotal</span>
                    <span className="text-[14px] font-medium text-white">R$ 299,99</span>
                </div>
                <div className="flex justify-between items-center mt-5 pb-4 border-b border-b-border">
                    <span className="text-[14px] font-medium text-white">Descontos</span>
                    <span className="text-[14px] font-medium text-white">R$ 299,99</span>
                </div>
                <div className="flex justify-between items-center mt-5 pb-4 border-b border-b-border">
                    <span className="text-[18px] font-bold text-white">Total</span>
                    <span className="text-[14px] font-medium text-white">R$ 299,99</span>
                </div>
            </div>
        </div>
    )
}