import PhotoBar from "@/app/ui/Sections/photobar";
import Mediacontent from "@/app/ui/components/post/mediacontent";

export default function page() {
    const mainContent = [
        {
            id: 1,
            type: "text",
            title: "Technik budownictwa",
            parts: [
                "Czy wiesz, że..."
            ]
        },
        {
            id: 2,
            type: "list",
            parts: [
                "Ucząc się w technikum, po 5-latach masz zawód, który jest bardzo potrzebny na rynku pracy.",
                "Mając tytuł technika budownictwa możesz podjąć pracę w Polsce i w Unii Europejskiej – gdzie chętnie są zatrudniani nasi absolwenci.",
                "Ukończenie technikum budowlanego daje gwarancję zatrudnienia.",
                "Pensje w budownictwie wzrosły w ostatnim okresie o 50%. Obecnie technik na budowach zarabia od 3000 – 5000 zł.",
                "Jeśli czytasz prasę, słuchasz radia lub oglądasz TV – to wiesz, że bardzo brakuje fachowców w tej dziedzinie gospodarki.",
            ]
        },
        {
            id: 3,
            type: "video",
            videos: [
                "https://youtube.com/embed/uWnGJFaaBSA"
            ]
        },
        {
            id: 4,
            type: "title-m",
            title: "Dlaczego warto uczyć się w technikum budowlanym?"
        },
        {
            id: 5,
            type: "list",
            parts: [
                "zdobywasz dobry zawód technika budownictwa",
                "bierzesz udział w szkoleniach, wycieczkach, spotkaniach z ludźmi pracującymi w branży budowlanej",
                "uczysz się w dobrze wyposażonych pracowniach internetowych -szkoła posiada program do projektowania SOLID EDGE oraz program do kosztorysowania NORMA PRO",
                "nabywasz praktyczne umiejętności budowlane",
                "udział w Olimpiadzie Wiedzy i Umiejętności Budowlanych",
                "opiekuje się Tobą życzliwa i wyspecjalizowana kadra nauczycielska",
            ]
        },
        {
            id: 6,
            type: "slider",
            photos: [
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-budownictwa/technik-budownictwa_17.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-budownictwa/technik-budownictwa_10.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-budownictwa/technik-budownictwa_09.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-budownictwa/technik-budownictwa_05.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-budownictwa/technik-budownictwa_04.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-budownictwa/technik-budownictwa_06.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-budownictwa/technik-budownictwa_01.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-budownictwa/technik-budownictwa_03.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-budownictwa/technik-budownictwa_02.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-budownictwa/technik-budownictwa_07.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-budownictwa/technik-budownictwa_08.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-budownictwa/technik-budownictwa_11.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-budownictwa/technik-budownictwa_12.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-budownictwa/technik-budownictwa_13.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-budownictwa/technik-budownictwa_14.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-budownictwa/technik-budownictwa_15.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-budownictwa/technik-budownictwa_16.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-budownictwa/technik-budownictwa_18.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-budownictwa/technik-budownictwa_19.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-budownictwa/technik-budownictwa_20.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-budownictwa/technik-budownictwa_21.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-budownictwa/technik-budownictwa_22.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-budownictwa/technik-budownictwa_24.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-budownictwa/technik-budownictwa_23.png"
                }
            ]
        },
        {
            id: 7,
            type: "title-m",
            title: "Absolwent Technikum Budowlanego może być:"
        },
        {
            id: 8,
            type: "list",
            parts: [
                "pracownikiem firmy budowlanej",
                "pracownikiem biur projektowo – budowlanych",
                "pracownikiem przedsiębiorstw zajmujących się produkcją i dystrybucją materiałów budowlanych",
                "pracownikiem organów administracji państwowej w zakresie budownictwa",
                "może również prowadzić własną działalność gospodarczą w zakresie świadczenia usług budowlanych",
            ]
        },
        {
            id: 9,
            type: "quote",
            quotes: [
                {
                    quote: "Budowanie to bardzo piękna i ważna umiejętność,\n" +
                        "zarówno w sensie dosłownym jak i przenośnym.\n" +
                        "Oby jak najwięcej ludzi potrafiło budować,\n" +
                        "i własne życie, i własny dom, i Polskę.",
                    author: "Anna Radziwiłł"
                }
            ]
        },
        {
            id: 10,
            type: "video",
            videos: [
                "https://youtube.com/embed/awCbI9V5Slk"
            ]
        }
    ]
    const path = [
        {
            name: "główna",
            url: "/",
        },
        {
            name: "zawody",
            url: "/#zawody",
        },
        {
            name: "technik budownictwa",
        }
    ]
    return(
        <div>
            <PhotoBar path={path}/>
            <div className="max-w-4xl mx-auto">
                {mainContent.map(content => <Mediacontent key={content.id} type={content.type} data={content}/>)}
            </div>
        </div>
    )
}