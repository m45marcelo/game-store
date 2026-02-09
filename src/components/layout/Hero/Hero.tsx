import Image from "next/image";
import bgImage from "../../../../public/assets/images/cyberpunk.png";
import imageGame from "../../../../public/assets/images/Games Store/banner jogos/the last of us 2.svg"
export const Hero = () => {
	return (
		<section
			className="h-[324px] w-full flex bg-background mt-20 mb-8"
		>
			<div className="h-[20.25rem] w-[728px] rounded-lg border border-border/15 overflow-hidden">
				<Image src={imageGame} alt="cover game" height={324} width={726} className="object-cover object-center"/>
			</div>
		</section>
	);
};
