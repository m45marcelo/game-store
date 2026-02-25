import { ReviewIcon } from "../../ReviewIcon/ReviewIcon";
import { SectionTitle } from "../../Text/SectionTitle";
import { CardReviewItem } from "./CardReviewItem";

export const CardReview = () => {
	return (
		<section className="flex flex-col gap-3">
			<SectionTitle titleSection="Avaliações" />
			<div className="flex pb-4 border-b border-b-border">
				<ReviewIcon height={40} review={4.7} />
			</div>
			<ul className="flex flex-col gap-2">
				<CardReviewItem/>
                <CardReviewItem/>
                <CardReviewItem/>
                <CardReviewItem/>
                <CardReviewItem/>
			</ul>
		</section>
	);
};
