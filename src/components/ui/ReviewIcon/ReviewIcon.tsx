import Image from "next/image";
import iconReview1_5 from "../../../../public/assets/images/Games Store/icons/review-1,5.svg";
import iconReview1 from "../../../../public/assets/images/Games Store/icons/review-1.svg";
import iconReview2_5 from "../../../../public/assets/images/Games Store/icons/review-2,5.svg";
import iconReview2 from "../../../../public/assets/images/Games Store/icons/review-2.svg";
import iconReview3_5 from "../../../../public/assets/images/Games Store/icons/review-3,5.svg";
import iconReview3 from "../../../../public/assets/images/Games Store/icons/review-3.svg";
import iconReview4_5 from "../../../../public/assets/images/Games Store/icons/review-4,5.svg";
import iconReview4 from "../../../../public/assets/images/Games Store/icons/review-4.svg";
import iconReview5 from "../../../../public/assets/images/Games Store/icons/review-5.svg";

interface ReviewIconProps{
    review: number;
	height: number;
}

export const ReviewIcon = ({review, height}: ReviewIconProps) => {
    let reviewGame = iconReview1;

	if (review > 1 && review <= 1.8) reviewGame = iconReview1;
	if (review > 1.3 && review <= 1.8) reviewGame = iconReview1_5;
	if (review > 1.8 && review <= 2.3) reviewGame = iconReview2;
	if (review > 2.3 && review <= 2.8) reviewGame = iconReview2_5;
	if (review > 2.8 && review <= 3.2) reviewGame = iconReview3;
	if (review > 3.2 && review <= 3.8) reviewGame = iconReview3_5;
	if (review > 3.8 && review <= 4.2) reviewGame = iconReview4;
	if (review > 4.2 && review <= 4.7) reviewGame = iconReview4_5;
	if (review > 4.7 && review <= 5) reviewGame = iconReview5;

    return(
        <span className="flex gap-1.5 items-center">
            <Image alt="image review" src={reviewGame} height={height}/>
            <span className={`font-medium text-gray-light`}
			style={{ fontSize: `${height}px` }}
			>{review}</span>
        </span>
    )
}