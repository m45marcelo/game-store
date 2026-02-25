import { HeaderInput } from "./HeaderInput";
import iconCart from "../../../../public/assets/images/Games Store/icons/icon-cart.svg"
import iconAlert from "../../../../public/assets/images/Games Store/icons/icon-alert.svg"
import iconLogin from "../../../../public/assets/images/Games Store/icons/icon-login.svg"
import { ButtonHeader } from "@/components/layout/Header/ButtonHeader";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { changeStateCart } from "@/store/slices/cartStateSlice";
export const Header = () => {
	const cartState = useAppSelector(state => state.cartState.displayCart)
	   const dispatch = useAppDispatch();
	
		function handleOpenCard(){
			dispatch(changeStateCart("flex"))
		}
	return (
		<header className="h-18 w-full pl-55.25 z-10 fixed flex items-center pr-4 justify-center bg-background">
			<div className="flex w-full max-w-279 justify-between">
				<HeaderInput/>
				<nav className="flex gap-4">
					<ButtonHeader  onClick={handleOpenCard} icon={iconCart}/>
					<ButtonHeader icon={iconAlert}/>
					<ButtonHeader icon={iconLogin} text="Login"/>
				</nav>
			</div>
		</header>
	);
};
