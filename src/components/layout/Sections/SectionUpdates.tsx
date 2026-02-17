import { CardUpdates } from "@/components/ui/CardUpdates/CardUpdates"
import { SectionTitle } from "@/components/ui/Text/SectionTitle"
import coverGame from "../../../../public/assets/images/Games Store/capas jogos/crashlands_2.svg"
export const SectionUpdates = () => {
    return(
        <section className="flex w-full flex-col gap-4 mt-8">
            <SectionTitle titleSection="Novidades" />
            <div className="grid grid-cols-2 grid-rows-4 gap-4">
                <CardUpdates coverGame={coverGame} nameGame="Crashlands 2" categoryGame="RPG" developerGame="Butterscotch Shenanigans" priceGame={132.98}/>
                <CardUpdates coverGame={coverGame} nameGame="Crashlands 2" categoryGame="RPG" developerGame="Butterscotch Shenanigans" priceGame={132.98}/>
                <CardUpdates coverGame={coverGame} nameGame="Crashlands 2" categoryGame="RPG" developerGame="Butterscotch Shenanigans" priceGame={132.98}/>
                <CardUpdates coverGame={coverGame} nameGame="Crashlands 2" categoryGame="RPG" developerGame="Butterscotch Shenanigans" priceGame={132.98}/>
                <CardUpdates coverGame={coverGame} nameGame="Crashlands 2" categoryGame="RPG" developerGame="Butterscotch Shenanigans" priceGame={132.98}/>
                <CardUpdates coverGame={coverGame} nameGame="Crashlands 2" categoryGame="RPG" developerGame="Butterscotch Shenanigans" priceGame={132.98}/>
                <CardUpdates coverGame={coverGame} nameGame="Crashlands 2" categoryGame="RPG" developerGame="Butterscotch Shenanigans" priceGame={132.98}/>
                <CardUpdates coverGame={coverGame} nameGame="Crashlands 2" categoryGame="RPG" developerGame="Butterscotch Shenanigans" priceGame={132.98}/>
            </div>
        </section>
    )
}