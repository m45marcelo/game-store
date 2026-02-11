interface SectionTitleProps {
    titleSection: string;
}

export const SectionTitle = ({titleSection}: SectionTitleProps) => {
    return(
        <h2 className="text-[1.25rem] text-white font-semibold">{titleSection}</h2>
    )
}