import PhotoBar from "../../../ui/Sections/photobar";
import Mediacontent from "../../../ui/components/post/mediacontent";

export default function page() {
    const mainContent = [
        {
            id: 1,
            type: "text",
            title: "Kucharz",
            parts: [
                "Kucharz to zawód dla ludzi z pasją i z sercem! W dzisiejszym czasach praca kucharza nie polega już tylko na gotowaniu, ale na eksperymentowaniu, łączeniu ze sobą coraz to nowych smaków i nadawaniu nowego wymiaru klasycznym przepisom.",
                "KUCHARZ to kreator smaku, kreator restauracji, bo tam gdzie jest dobre jedzenie, są i goście. Kucharze biorą udział w konkursach, telewizyjnych show, piszą książki, prowadzą blogi, stają się osobami medialnymi. Wychodzą poza cztery Ściany kuchni, do ludzi."
            ]
        },
        {
            id: 2,
            type: "video",
            videos: [
                "https://youtube.com/embed/DWlRddW7wno"
            ]
        },
        {
            id: 3,
            type: "desc",
            parts: [
                "Kucharz jest osobą zawodowo zajmującą się przygotowywaniem potraw pochodzących z różnych stron świata, jak również dań dostosowanych do indywidualnych okoliczności i wymagań klientów. Posiada wiedzę odnośnie różnych kultur kulinarnych, właściwego stosowania produktów spożywczych, odpowiedniego łączenia składników, jak również stosownego serwowania potraw, deserów, napojów i dodatków.",
                "Poza samym przygotowywaniem dań, do kucharza należy podanie ich w jak najbardziej atrakcyjnej i wyszukanej formie. Niejednokrotnie do niego należy również udekorowanie stołu. Do obowiązków kucharza należy także dbanie o wybór składników najlepszej jakości, właściwe przechowywanie produktów, dbanie o należytą konserwację wszelkich urządzeń kuchennych. W gestii kucharza znajduje się również układanie menu oraz zarządzanie wydatkami na produkty spożywcze."
            ]
        },
        {
            id: 4,
            type: "slider",
            photos: [
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/kucharz/z003.jpg"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/kucharz/z004.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/kucharz/z005.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/kucharz/z006.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/kucharz/z007.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/kucharz/z001.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/kucharz/z008.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/kucharz/z010.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/kucharz/z011.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/kucharz/z009.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/kucharz/z012.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/kucharz/z002.JPG"
                },
            ]
        },
        {
            id: 5,
            type: "text",
            title: "Możliwości zatrudnienia",
            parts: [
                "Kucharz to kreator smaku, kreator restauracji, bo tam gdzie jest dobre jedzenie, są i goście. Kucharze biorą udział w konkursach, telewizyjnych show, piszą książki, prowadzą blogi, stają się osobami medialnymi. Wychodzą poza cztery Ściany kuchni, do ludzi.",
                "Możliwości uzyskiwania dodatkowych kwalfikacji",
                "Absolwent szkoły kształcącej w zawodzie kucharz po potwierdzeniu kwalifikacji TG.07. Sporządzanie potraw i napojów może uzyskać dyplom potwierdzający kwalifikacje w zawodzie technik żywienia i usług gastronomicznych po potwierdzeniu dodatkowo kwalifikacji TG.I6. Organizacja żywienia i usług gastronomicznych oraz uzyskaniu wykształcenia średniego."
            ]
        },
        {
            id: 6,
            type: "video",
            videos: [
                "https://youtube.com/embed/ISQMANgpuvc"
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
            name: "kucharz",
        }
    ]
    return (
        <div>
            <PhotoBar path={path}/>
            <div className="max-w-4xl mx-auto">
                {mainContent.map(content => <Mediacontent key={content.id} type={content.type} data={content}/>)}
            </div>
        </div>
    )
}