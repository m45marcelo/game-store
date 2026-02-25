import { Hero } from "@/components/layout/Hero/Hero";
import { SectionArrivingSoon } from "@/components/layout/Sections/SectionArrivingSoon";
import { SectionOfferGames } from "@/components/layout/Sections/SectionOfferGames";
import { SectionPopularGames } from "@/components/layout/Sections/SectionPopularGames";
import { SectionUpdates } from "@/components/layout/Sections/SectionUpdates";
import { Footer } from "@/components/layout/Footer/Footer";
const Store = () => {
	return (
		<div className="w-full max-w-279 pr-5 flex flex-col bg-background pt-20">
			<Hero/>
			<SectionOfferGames/>
			<SectionArrivingSoon/>
			<SectionUpdates/>
			<SectionPopularGames/>
			<Footer/>
		</div>
	);
}

export default Store