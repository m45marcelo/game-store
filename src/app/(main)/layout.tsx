import type { ReactNode } from "react";
import { Aside } from "@/components/layout/Aside/Aside";
import { Header } from "@/components/layout/Header/Header";

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="w-full flex flex-col items-end  bg-amber-950">
			<Header />
			<div className="flex w-full">
				<Aside/>
				<main className="flex w-full justify-end">
					{children}
				</main>
			</div>
		</div>
	);
};

export default Layout;
