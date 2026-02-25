import Image from "next/image";
import userIcon from "../../../../../public/assets/images/Games Store/icons/icon-user.svg";
import { ReviewIcon } from "../../ReviewIcon/ReviewIcon";
export const CardCommentsItem = () => {
    return(
        <li className="h-16 flex justify-between border-b border-b-border w-128.75">
            <div className="flex gap-2.5">
            <Image alt="user image" src={userIcon} height={36} width={36} className="pb-4"/>
            <div className=" flex flex-col ">
                <span className="flex text-[12px] font-medium text-white">
                    Negueba Oliveira
                </span>
                <ReviewIcon height={14} review={4.3} />
                <span className="text-[12px] font-medium text-gray-light">
                    Exellent Game demais otimo bom
                </span>
            </div>
            </div>
            <span className="text-[10px] h-full flex font-medium text-gray-light">Hoje</span>
        </li>
    )
}