"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AsideItemProps {
	href: string;
	name: string;
	icon: string;
}
export const AsideItem = ({ href, name, icon }: AsideItemProps) => {
	const pathName = usePathname();
	return (
		<li
			className={clsx(
				"flex w-full h-8.5 rounded-lg max-w-47 items-center cursor-pointer ",
				{
					"border border-border bg-gray": href === pathName,
				},
			)}
		>
			<Image
				alt="image icon"
				src={icon}
				width={20}
				className="mx-2.5 text-amber-300"
			/>
			<Link href={href}>
				<span
					className={clsx(
						"text-base items-center font-medium text-gray-light",
						{
							"text-light": href === pathName,
						},
					)}
				>
					{name}
				</span>
			</Link>
		</li>
	);
};
