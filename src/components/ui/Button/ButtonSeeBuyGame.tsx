import clsx from "clsx";

interface ButtonSeeGameProps{
    textButton: string;
    size: "small" | "medium" | "big"
}
export const ButtonSeeBuyGame = ({ textButton, size }: ButtonSeeGameProps) => {
    return(
        <button type="button" className={clsx("bg-white cursor-pointer text-background  flex items-center justify-center rounded-md px-2 hover:bg-white/90",
            {
                "w-22.5 h-7 text-[0.875rem] font-medium": size === "small"
            },
            {
                "w-33 h-10 text-[1.125rem] font-medium": size === "medium"
            },
            {
                "w-full h-10 text-base font-bold": size === "big"
            }
        )}>
            {textButton}
        </button>
    )
}