import clsx from "clsx";

interface GameCategoryDeveloperProps{
    nameCategory?: string;
    nameDeveloper?: string;
    size: "small" | "medium"
}
export const GameCategoryDeveloper = ({ nameCategory, nameDeveloper, size }: GameCategoryDeveloperProps) => {
    return(
        <span className={clsx("text-gray-light font-semibold", 
            {
            "text-[0.75rem]": size === "small"
            },
            {
                "text-[0.875rem]": size === "medium"
            }
        )}>
            {
                nameCategory && nameCategory
            }
            {
                nameDeveloper && nameDeveloper
            }
        </span>
    )
}