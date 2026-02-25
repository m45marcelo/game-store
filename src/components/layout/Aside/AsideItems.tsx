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
import { AsideItem } from "./AsideItem";

export const AsideItems = () => {
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

	const linksUser = [
		{
			href: "/support",
			name: "Suporte",
			icon: iconSuporte,
			iconActive: iconSuporteAtivo,
		},
        {
			href: "/configuracoes",
			name: "Configurações",
			icon: iconConfiguraçãoes,
			iconActive: iconCategoriasAtivo,
		},
	];
	return (
		<div className="flex flex-col justify-between h-full w-full pl-5">
			<ul className="flex flex-col gap-1.5 w-full max-w-47">
				{links.map((item) => {
					const currentIcon =
						item.href === pathName ? item.iconActive : item.icon;

					return (
						<AsideItem
							key={item.name}
							href={item.href}
							name={item.name}
							icon={currentIcon}
						/>
					);
				})}
			</ul>
			<ul className="flex flex-col gap-1.5 w-full max-w-47  pb-2 pt-4 border-t border-t-gray">
				{linksUser.map((item) => {
					const currentIcon =
						item.href === pathName ? item.iconActive : item.icon;

					return (
						<AsideItem
							key={item.name}
							href={item.href}
							name={item.name}
							icon={currentIcon}
						/>
					);
				})}
			</ul>
		</div>
	);
};
