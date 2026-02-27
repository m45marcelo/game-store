"use client"
import Image from "next/image"
import iconCart from "../../../../public/assets/images/Games Store/icons/icon-cart.svg"
import { useAppDispatch} from "@/hooks"
import { changeStateCart } from "@/store/slices/cartStateSlice"
export const ButtonAddCart = () => {
    const dispatch = useAppDispatch();

    function handleOpenCard(){
        dispatch(changeStateCart("flex"))
    }
    return(
        <button onClick={handleOpenCard} type="button" className="h-11 w-58.75 flex gap-2 items-center cursor-pointer justify-center rounded-3xl font-semibold text-white bg-gray border border-border">
            <Image alt="icon cart" src={iconCart}/>
            <span>Adicionar ao carrinho</span>
        </button>
    )
}