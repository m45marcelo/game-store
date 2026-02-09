interface TextDiscountProps {
    size: "small" | "medium";
    price: number;
}
export const TextDiscount = ({size, price}: TextDiscountProps) => {
    return(
        <span className={size === "small" ? "text-text-gray text-[0.875rem] font-semibold line-through" : "text-text-gray text-[1.125rem] font-semibold line-through" }>
            R${price.toFixed(2)}
        </span>
    )
}