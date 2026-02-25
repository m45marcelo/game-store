import clsx from "clsx";
import Image from "next/image";

interface ButtonHeaderProps {
    icon: string;
    text?: string;
    onClick?: () => void;
}
export const ButtonHeader = ({icon, text, onClick}: ButtonHeaderProps) => {
    return(
        <button onClick={onClick} type="button" className={clsx("bg-gray gap-1.5 border cursor-pointer h-9 min-w-9 border-border rounded-full flex items-center justify-center",
            {
                "h-auto px-2.5" : text
            }
        )}>
            <Image alt="icone button" src={icon} width={18} />
            {
                text && <span className="text-base font-semibold text-light">{text}</span>
            }
        </button>
    )
}