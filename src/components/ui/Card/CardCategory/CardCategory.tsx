import Image from "next/image"
import imageBackground from "../../../../../public/assets/images/Games Store/icons/image-background.svg"

interface CardCategoryProps {
    categoryName: string;
}

export const CardCategory = ({categoryName}: CardCategoryProps) => {
    return(
        <div className="w-full max-w-89 rounded-lg flex justify-center items-center relative hover: ">
            <Image alt="image background" src={imageBackground} height={182} width={356}/>
            <h2 className="text-[1.25rem] absolute text-white font-bold">{categoryName}</h2>
        </div>
    )
}