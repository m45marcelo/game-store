import Image from "next/image"
import logo from "../../../../public/assets/images/Games Store/logo.svg"
import { AsideItems } from "./AsideItems"
export const Aside = () => {
    return (
        <aside className="w-full fixed z-10 h-screen max-w-[221px] pt-20 bg-background flex flex-col ">
            <AsideItems/>
        </aside>
    )
}