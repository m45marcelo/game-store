interface TitleGameHeroProps{
    title: string;
}
export const TitleGameHero = ({title}: TitleGameHeroProps) => {
    return(
        <h1 className="text-[2.5rem] leading-tight text-text-light font-extrabold">{title}</h1>
    )
}