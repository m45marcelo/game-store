"use client"
import type { ReactNode } from "react";
import { Aside } from "@/components/layout/Aside/Aside";
import { Header } from "@/components/layout/Header/Header";
import { Cart } from "@/components/layout/Cart/Cart";
import { useAppSelector } from "@/hooks";

const Layout = ({ children }: { children: ReactNode }) => {
	const cartState = useAppSelector(state => state.cartState.displayCart)
	return (
		<div className={
			cartState === "hidden" ? "w-full h-full flex flex-col items-end bg-background" : "w-full h-screen overflow-y-hidden flex flex-col items-end  bg-background"
		}>
			<Header />
			<div className="flex w-full ">
				<Aside/>
				<main className={
					cartState === "hidden" ? "flex w-full pl-55.25 justify-center" : "flex w-full pl-55.25 justify-center pr-3"
				}>
					{children}
				</main>
			</div>
			<Cart/>
		</div>
	);
};

export default Layout;
