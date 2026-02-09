import { HeaderInput } from "./HeaderInput";
import Image from "next/image"
import logo from "../../../../public/assets/images/Games Store/logo.svg"
import iconCart from "../../../../public/assets/images/Games Store/icons/icon-cart.svg"
import iconAlert from "../../../../public/assets/images/Games Store/icons/icon-alert.svg"
import iconLogin from "../../../../public/assets/images/Games Store/icons/icon-login.svg"
import { ButtonHeader } from "@/components/layout/Header/ButtonHeader";
export const Header = () => {
	return (
		<header className="h-18 z-20 w-full  fixed flex items-center justify-between bg-background">
			<Image alt="imagem logo" src={logo} height={36} width={130} className="pt-4 ml-5 pb-5"/>
			<div className="flex w-full max-w-275 justify-between pr-5">
				<HeaderInput/>
				<nav className="flex gap-4">
					<ButtonHeader icon={iconCart}/>
					<ButtonHeader icon={iconAlert}/>
					<ButtonHeader icon={iconLogin} text="Login"/>
				</nav>
			</div>
		</header>
	);
};
