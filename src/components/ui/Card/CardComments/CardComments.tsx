import { SectionTitle } from "../../Text/SectionTitle"
import { CardCommentsItem } from "./CardCommentsItem"

export const CardComments = () => {
    return(
        <div className="flex flex-col gap-3">
            <SectionTitle titleSection="Comentarios"/>
            <ul className="flex flex-col gap-1.5">
                <CardCommentsItem/>
                <CardCommentsItem/>
                <CardCommentsItem/>
                <CardCommentsItem/>
                <CardCommentsItem/>
            </ul>
        </div>
    )
}