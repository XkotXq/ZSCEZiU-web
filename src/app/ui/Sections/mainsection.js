import Informationdemo from "@/app/ui/Sections/informationdemo";
import Photodemo from "@/app/ui/Sections/photodemo";
export default function Mainsection() {
    return (
        <section className="mt-2">
            <div className="flex gap-2 md:flex-row flex-col">
                <Informationdemo/>
                <Photodemo/>
            </div>
        </section>
    )
}