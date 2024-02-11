import PhotoBar from "@/app/ui/Sections/photobar";
import Mediacontent from "@/app/ui/components/post/mediacontent";

export default function Page() {
    const mainContent = [
        {
            id: 1,
            type: "title-m",
            title: "Technikum"
        },
        {
            id: 2,
            type: "file",
            files: [
                {
                    value: "Harmonogram praktyk dla techników",
                    url: "/praktyki-zawodowe/"
                },
                {
                    value: "dzienniczek praktyk pdf",
                    url: ""
                },
                {
                    value: "dzienniczek praktyk doc",
                    url: ""
                },

            ]
        },
        {
            id: 3,
            type: "title-m",
            title: "Program praktyk"
        },
        {
            id: 4,
            type: "file",
            files: [
                {
                    value: "technik informatyk",
                    url: ""
                },
                {
                    value: "technik handlowiec",
                    url: ""
                },
                {
                    value: "technik hotelarstwa",
                    url: ""
                },
                {
                    value: "technik mechatroni",
                    url: ""
                },
                {
                    value: "technik budownictwa",
                    url: ""
                },
                {
                    value: "technik pojazdów samochodowych",
                    url: ""
                },
                {
                    value: "technik żywienia i usług gastronomicznych",
                    url: ""
                },
                {
                    value: "Skierowanie na praktyki należy dostarczyć do Kierownika Praktycznej Nauki Zawodu-miesiąc przed terminem rozpoczęcia praktyk: dokument do pobrania",
                    url: ""
                },
            ]
        },
        {
            id: 5,
            type: "title-m",
            title: "Branżowa Szkoła I stopnia"
        },
        {
            id: 6,
            type: "file",
            files: [
                {
                    value: "Informacja o dniach zajęć praktycznych dla klas zawodowych",
                    url: ""
                },
                {
                    value: "Informacje dla pracodawców zatrudniających młodocianych pracowników",
                    url: ""
                },
                {
                    value: "Terminy turnusów dokształcania teoretycznego młodocianych pracowników",
                    url: ""
                },

            ]
        },
        {
            id: 7,
            type: "title-m",
            title: "Program praktyk"
        },
        {
            id: 8,
            type: "file",
            files: [
                {
                    value: "fryzjer",
                    url: ""
                },
                {
                    value: "stolarz",
                    url: ""
                },
                {
                    value: "kucharz",
                    url: ""
                },
                {
                    value: "elektryk",
                    url: ""
                },
                {
                    value: "cukiernik",
                    url: ""
                },
                {
                    value: "sprzedawca",
                    url: ""
                },
                {
                    value: "elektromechanik",
                    url: ""
                },
                {
                    value: "blacharz samochodowy",
                    url: ""
                },
                {
                    value: "mechanik pojazdów samochodowych",
                    url: ""
                },
                {
                    value: "elektromechanik pojazdow samochodowych",
                    url: ""
                },
                {
                    value: "monter_sieci_instalacji_urzadzen_sanitarnych",
                    url: ""
                },
                {
                    value: "operator maszyn i urzadzeń przemysłu spożywczego",
                    url: ""
                },
                {
                    value: "Zaświadczenie dla uczniów/ kandydatów do szkoły odbywających praktyki zawodowe w zakładach pracy (klasa wielozawodowa)",
                    url: ""
                },
            ]
        }
    ]
    const path = [
        {
            name: "główna",
            url: "/",
        },
        {
            name: "praktyki zawodowe",
        }
    ]
    return (
        <div>
            <PhotoBar path={path}/>
            <div className="max-w-4xl mx-auto mt-2">
                {mainContent.map(content => <Mediacontent key={content.id} type={content.type} data={content}/>)}
            </div>
        </div>
    )
}