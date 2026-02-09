import { formatterPrice } from "@/utils/formatterPrice";

interface TextPriceProps{
    price: number;
    size: "small" | "medium";
}

export const TextPrice = ({ price, size }: TextPriceProps) => {
    return(
        <span className={size === "small" ? "text-[1.125rem] font-extrabold text-text-light" : "text-[1.75rem] font-extrabold text-text-light"}>
            {formatterPrice.format(price)}
        </span>
    )
}