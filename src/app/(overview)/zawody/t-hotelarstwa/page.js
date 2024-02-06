import PhotoBar from "@/app/ui/Sections/photobar";
import Mediacontent from "@/app/ui/components/post/mediacontent";

export default function page() {
    const mainContent = [
        {
            id: 1,
            type: "text",
            title: "Technik hotelarstwa",
            parts: [
                "Zawód technik  hotelarstwa jest  bardzo ciekawym i atrakcyjnym kierunkiem kształcenia związanym z prężnie rozwijającą się branżą turystyczną.",
                "Trendy rozwojowe i doświadczenia wielu krajów na całym świecie wskazują, że jest to zawód rozwojowy i wymagający coraz wyższych kwalifikacji, ponieważ wymagania gości hotelowych ciągle rosną i aby im sprostać należy cały czas podnosić ogólny standard usług. Praca w hotelu może być pasją i przynosić wiele satysfakcji, ale wymaga od pracowników pełnego profesjonalizmu, wiedzy oraz wysokiej kultury osobistej.",
            ]
        },
        {
            id: 2,
            type: "video",
            videos: [
                "https://youtube.com/embed/P3-vzz-VF1c"
            ]
        },
        {
            id: 3,
            type: "text",
            title: "W hotelarstwie dominuje relacja człowiek – człowiek i najważniejszym podmiotem jest „Gość”.",
            parts: [
                " Technik hotelarstwa to przede wszystkim planowanie, oferowanie, koordynowanie oraz wykonywanie usług hotelarskich.  Hotelarz zajmuje się kompleksową obsługą gości hotelowych oraz organizuje usługi turystyczne, rekreacyjno-sportowe  i gastronomiczne." +
                "Do zadań hotelarza należy obsługa kongresów, targów, zjazdów, bankietów i innych imprez. Hotelarz obsługuje gości o specjalnym znaczeniu (VIP-ów, biznesmenów), informuje gości hotelowych i potencjalnych klientów o dodatkowych usługach, zapewnia gościom obsługę kasową,   obsługuje nowoczesny sprzęt biurowy."
            ]
        },
        {
            id: 4,
            type: "title-m",
            title: "W trakcie zajęć lekcyjnych i praktycznych nauczysz się:"
        },
        {
            id: 5,
            type: "list",
            parts: [
                "przygotowania jednostek mieszkalnych dla gości hotelowych",
                "przygotowania śniadań hotelowych i usługi room service",
                "przygotowania ofert hotelowych zgodnie z potrzebami gości",
                "obsługi gości w recepcji",
                "sporządzania dokumentacji związanej z rezerwacją i z rozliczeniem kosztów pobytu gościa\n",
            ]
        },
        {
            id: 6,
            type: "slider",
            photos: [
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z020.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z001.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z007.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z017.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z019.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z015.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z018.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z016.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z021.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z022.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z024.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z023.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z025.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z026.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z028.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z027.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z030.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z029.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z031.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z032.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z034.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z033.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z036.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z037.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z038.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z039.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z041.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z042.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z043.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z040.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z044.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z045.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z046.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z047.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z049.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z048.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z050.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z051.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z053.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z054.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z052.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z002.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z003.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z010.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z011.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z013.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-hotelarstwa/z012.png"
                },

            ]
        },
        {
            id: 7,
            type: "title-m",
            title: "Nauka w naszej szkole umożliwia"
        },
        {
            id: 8,
            type: "list",
            parts: [
                "zdobycie tytułu technika hotelarstwa",
                "uzyskanie świadectw potwierdzających kwalifikacje"
            ]
        },
        {
            id: 9,
            type: "title-m",
            title: "HGT.03. Obsługa gości w obiekcie świadczącym usługi hotelarskie"
        },
        {
            id: 10,
            type: "title-m",
            title: "HGT.06. Realizacja usług w recepcji"
        },
        {
            id: 11,
            type: "desc",
            parts: [
                "Posiadacz dyplomu potwierdzającego kwalifikacje zawodowe w zawodzie technik hotelarstwa"
            ]
        },
        {
            id: 12,
            type: "title-m",
            title: "ZNAJDZIE PRACĘ W POLSCE I NA OBSZARZE UNII EUROPEJSKIEJ JAKO:"
        },
        {
            id: 13,
            type: "list",
            parts: [
                "technik hotelarstwa",
                "organizator usług cateringowych",
                "pracownik biurowy",
                "pracownik biura podróży",
                "pracownik informacji turystycznej",
                "recepcjonista",
                "steward, stewardessa",
                "pilot wycieczek",
                "przewodnik turystyczny",
                "inspektor piętra hotelowego",
                "bufetowy – barman",
            ]
        },
        {
            id: 14,
            type: "video",
            videos: [
                "https://youtube.com/embed/1HwKE-pDTiM"
            ]
        }
    ]

    return (
        <div>
            <PhotoBar name="technik hotelarstwa"/>
            <div className="max-w-4xl mx-auto">
                {mainContent.map(content => <Mediacontent key={content.id} type={content.type} data={content}/>)}
            </div>
        </div>
    )
    
}