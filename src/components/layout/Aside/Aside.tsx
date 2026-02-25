import Image from "next/image"
import logo from "../../../../public/assets/images/Games Store/logo.svg"
import { AsideItems } from "./AsideItems"
export const Aside = () => {
    return (
        <aside className="w-full fixed z-20 h-screen max-w-55.25 bg-background flex flex-col ">
            <Image alt="imagem logo" src={logo} height={36} width={130} className="pt-4 ml-5 pb-5"/>
            <AsideItems/>
        </aside>
    )
}