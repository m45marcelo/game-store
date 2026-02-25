/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
"use client";
import Image from "next/image";
import { IoCloseSharp, IoTrash } from "react-icons/io5";
import { ButtonSeeBuyGame } from "@/components/ui/Button/ButtonSeeBuyGame";
import { GameTitlePrice } from "@/components/ui/Text/GameTitlePrice";
import { SectionTitle } from "@/components/ui/Text/SectionTitle";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { changeStateCart } from "@/store/slices/cartStateSlice";
import coverGame from "../../../../public/assets/images/Games Store/capas jogos/battlefield_5.svg";
import { SelectedAmount } from "./SelectAmount";

export const Cart = () => {
	const dispatch = useAppDispatch();
	const stateCart = useAppSelector((state) => state.cartState.displayCart);

	function handleCloseCart() {
		dispatch(changeStateCart("hidden"));
	}
	return (
		// biome-ignore lint/a11y/useSemanticElements: <explanation>
		<div
			onClick={handleCloseCart}
			role="button"
			tabIndex={0}
			onKeyDown={(e) => {
				if (e.key === "Enter") handleCloseCart();
			}}
			className={`w-screen h-screen bg-gray/30 justify-end ${stateCart} fixed top-0 left-0 z-1000`}
		>
			{/** biome-ignore lint/a11y/useSemanticElements: <explanation> */}
			<div
				onClick={(e) => e.stopPropagation()}
				role="button"
				tabIndex={0}
				onKeyDown={(e) => {
					if (e.key === "Enter") handleCloseCart();
				}}
				className="w-108.5 p-5 h-full bg-background"
			>
				<div className="flex w-full justify-between">
					<SectionTitle titleSection="Carrinho" />
					<IoCloseSharp
						onClick={() => handleCloseCart()}
						size={20}
						className="text-gray-light cursor-pointer hover:text-gray-light/80"
					/>
				</div>
				<div className="flex justify-between items-center mt-5 pb-4 border-b border-b-border">
					<div className="flex gap-2.5">
						<Image alt="cover game" src={coverGame} height={102} />
						<div className="flex flex-col gap-1.5">
							<GameTitlePrice nameGame="Battlefield" size="medium" />
							<div className="flex flex-col b">
								<GameTitlePrice price={199.99} size="big" />
								<SelectedAmount />
							</div>
						</div>
					</div>
					<IoTrash
						size={24}
						className="text-gray-light hover:text-red cursor-pointer"
					/>
				</div>
				<div className="flex flex-col justify-between h-110">
					<div className="flex flex-col">
						<div className="flex justify-between items-center mt-5 pb-4 border-b border-b-border">
							<span className="text-[0.875rem] font-medium text-white">
								Subtotal
							</span>
							<span className="text-[0.875rem] font-medium text-white">
								R$ 299,99
							</span>
						</div>
						<div className="flex justify-between items-center mt-5 pb-4 border-b border-b-border">
							<span className="text-[0.875rem] font-medium text-white">
								Descontos
							</span>
							<span className="text-[0.875rem] font-medium text-white">
								R$ 299,99
							</span>
						</div>
						<div className="flex justify-between items-center mt-5 pb-4 border-b border-b-border">
							<span className="text-[1.125rem] font-bold text-white">
								Total
							</span>
							<span className="text-[0.875rem] font-medium text-white">
								R$ 299,99
							</span>
						</div>
					</div>
					<ButtonSeeBuyGame textButton="Finalizar Compra" size="big" />
				</div>
			</div>
		</div>
	);
};
