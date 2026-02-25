"use client";
import { usePathname } from "next/navigation";
import iconCategorias from "../../../../public/assets/images/Games Store/icons/icon-categories.svg";
import iconCategoriasAtivo from "../../../../public/assets/images/Games Store/icons/icon-categories-active.svg";
import iconConfiguraçãoesAtivo from "../../../../public/assets/images/Games Store/icons/icon-categories-active.svg";
import iconFavoritos from "../../../../public/assets/images/Games Store/icons/icon-favorites.svg";
import iconFavoritosAtivo from "../../../../public/assets/images/Games Store/icons/icon-favorites-active.svg";
import iconLoja from "../../../../public/assets/images/Games Store/icons/icon-home.svg";
import iconLojaAtivo from "../../../../public/assets/images/Games Store/icons/icon-home-active.svg";
import iconMeusJogosAtivo from "../../../../public/assets/images/Games Store/icons/icon-may-games-active.svg";
import iconMeusjogos from "../../../../public/assets/images/Games Store/icons/icon-my-games.svg";
import iconNoticias from "../../../../public/assets/images/Games Store/icons/icon-news.svg";
import iconNoticiasAtivo from "../../../../public/assets/images/Games Store/icons/icon-news-active.svg";
import iconConfiguraçãoes from "../../../../public/assets/images/Games Store/icons/icon-settings.svg";
import iconSuporte from "../../../../public/assets/images/Games Store/icons/icon-support.svg";
import iconSuporteAtivo from "../../../../public/assets/images/Games Store/icons/icon-support-active.svg";
import imageLogoWhite from "../../../../public/assets/images/Games Store/icons/white-logo.svg"
import Image from "next/image";
import { IoArrowUp } from "react-icons/io5";

export const Footer = () => {
    const pathName = usePathname();
	const links = [
		{
			href: "/",
			name: "Loja",
			icon: iconLoja,
			iconActive: iconLojaAtivo,
		},
		{
			href: "/categorias",
			name: "Categorias",
			icon: iconCategorias,
			iconActive: iconCategoriasAtivo,
		},
		{
			href: "/meusjogos",
			name: "Meus Jogos",
			icon: iconMeusjogos,
			iconActive: iconMeusJogosAtivo,
		},
		{
			href: "/favoritos",
			name: "Favoritos",
			icon: iconFavoritos,
			iconActive: iconFavoritosAtivo,
		},
		{
			href: "/noticias",
			name: "Noticias",
			icon: iconNoticias,
			iconActive: iconNoticiasAtivo,
		},
	];

    return(
        <footer className="h-27 px-5 pt-3.5 w-full mt-9.5 bg-gray">
            <div className="flex w-full items-center justify-between h-12 mb-2">
                <div className="flex gap-12 items-center">
                    <Image alt="image logo" src={imageLogoWhite}/>
                    <span className="flex gap-9.5">
                        {
                            links.map((item) => <span className="text-[0.875rem] text-gray-light font-semibold cursor-pointer hover:text-text-gray" key={item.name}>{item.name}</span>)
                        }
                    </span>
                </div>
                <button type="button" className="h-8 w-8 flex cursor-pointer items-center justify-center bg-blue rounded-full">
                    <IoArrowUp size={24} color="#ffff"/>
                </button>
            </div>
            <div className="w-full border-t border-t-border flex items-center">
                <p className="text-[0.625rem] text-gray-light font-medium my-2 ">Todos os direitos reservados</p>
            </div>
        </footer>
    )
}