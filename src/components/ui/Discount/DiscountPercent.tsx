import clsx from "clsx";

interface DiscountPercent{
    totalDiscount: number;
    size: "small" | "medium";
}

export const DiscountPercent = ({ totalDiscount, size }: DiscountPercent) => {
    return(
        <div className={clsx("bg-blue flex items-center justify-center rounded-sm",
            {
                "h-5.5 w-11 ": size === "medium"
            },
            {
                "h-4.5 w-8.5": size === "small"
            }
        )}>
            <span className={clsx("text-white font-medium",
                {
                    "text-[0.875rem]": size === "medium"
                },
                {
                    "text-[11px]": size === "small"
                }
            )}>
                {`-${totalDiscount}%`}
            </span>
        </div>
    )
}