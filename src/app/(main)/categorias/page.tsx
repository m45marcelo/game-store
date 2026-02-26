import { SectionTitle } from "@/components/ui/Text/SectionTitle"
import { CardCategory } from "@/components/ui/Card/CardCategory/CardCategory"
import { Footer } from "@/components/layout/Footer/Footer"
const Categorias = () => {
    return(
        <div className="w-full max-w-279 flex flex-col bg-background pt-20">
            <SectionTitle titleSection="Categorias"/>
            <section className="w-full grid grid-cols-3 grid-rows-2 gap-4 mt-4 pr-5">
                <CardCategory categoryName="Aventura"/>
                <CardCategory categoryName="RPG"/>
                <CardCategory categoryName="Luta"/>
                <CardCategory categoryName="Terror"/>
                <CardCategory categoryName="Esporte"/>
                <CardCategory categoryName="FPS"/>
            </section>
            <Footer/>
        </div>
    )
}

export default Categorias