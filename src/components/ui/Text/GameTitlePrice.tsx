import { formatterPrice } from "@/utils/formatterPrice";
import clsx from "clsx";

interface GameTitlePrice{
    nameGame?: string;
    price?: number;
    size: "small" | "medium" | "big" | "extra large"
}

export const GameTitlePrice = ({ nameGame, price, size }: GameTitlePrice) => {
    return(
        <span className={clsx("font-bold text-white max-h-12 flex items-center",
            {
                "text-[0.875rem] overflow-hidden whitespace-nowrap text-ellipsis": size === "small"
            },
            {
                "text-base": size === "medium"
            },
            {
                "text-[1.25rem]": size === "big"
            },
            {
                "text-[2.5rem]": size === "extra large"
            }
        )}>
            {
                nameGame && nameGame
            }
            {
                price && formatterPrice.format(price)
            }
        </span>
    )
}