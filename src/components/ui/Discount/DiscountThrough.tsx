import clsx from "clsx";
import { formatterPrice } from "@/utils/formatterPrice";

interface DiscountThroughProps {
	oldPrice: number;
	size: "small" | "medium" | "big";
}

export const DiscountThrough = ({ oldPrice, size }: DiscountThroughProps) => {
	return (
		<span
			className={clsx(
				"text-gray-light",
				{
					"font-medium text-[0.75rem]": size === "small",
				},
				{
					"font-normal text-[0.875rem]": size === "medium",
				},
				{
					"font-medium text-base": size === "big",
				},
			)}
		>
			{
                size !== "small" && size !== "big" && <span className="mr-1">De</span>
            }
			<span className="line-through">{formatterPrice.format(oldPrice)}</span>
		</span>
	);
};
