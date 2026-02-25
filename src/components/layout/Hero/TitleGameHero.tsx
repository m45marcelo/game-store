interface TitleGameHeroProps{
    title: string;
}
export const TitleGameHero = ({title}: TitleGameHeroProps) => {
    return(
        <h1 className="text-[1.25rem] text-white font-bold leading-6">{title}</h1>
    )
}