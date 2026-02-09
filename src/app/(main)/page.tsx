import { Hero } from "@/components/layout/Hero/Hero";

export default function Home() {
	return (
		<div className="w-full max-w-[68.75rem]  pr-5 flex flex-col bg-background">
			<Hero/>
			<Hero/>
		</div>
	);
}
