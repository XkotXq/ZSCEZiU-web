import PhotoBar from "../../../ui/Sections/photobar";
import Mediacontent from "../../../ui/components/post/mediacontent";

export default function page() {
    const mainContent = [
        {
            id: 1,
            type: "text",
            title: "Operator obrabiarek skrawających",
            parts: [
                "Jest to zawód dla Ciebie jeżeli:"
            ]
        },
        {
            id: 2,
            type: "list",
            parts: [
                "masz dobre oceny z informatyki",
                "jesteś ambitny i chcesz podjąć wyzwanie nauki nowoczesnych technologii",
                "umiesz pracować w grupie",
                "interesuje Cię projektowanie części maszyn oraz ich wykoanie poprzez obróbkę materiałów za pomocą komputerowo sterowanych urządzeń",
                "chcesz zdobyć atrakcyjny zawód, a w przyszłości dobrze płatną pracę",
            ]
        },
        {
            id: 3,
            type: "slider",
            photos: [
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/operator-obrabiarek-skrawajacych/z002.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/operator-obrabiarek-skrawajacych/z003.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/operator-obrabiarek-skrawajacych/z001.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/operator-obrabiarek-skrawajacych/z005.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/operator-obrabiarek-skrawajacych/z004.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/operator-obrabiarek-skrawajacych/z006.png"
                },
            ]
        },
        {
            id: 4,
            type: "desc",
            parts: [
                "Wybierz kierunek Szkoły Branżowej I stopnia.",
                "Zadania zawodowe:",
            ]
        },
        {
            id: 5,
            type: "list",
            parts: [
                "obsługa różnego rodzaju obrabiarek skrawających",
                "kontrolowanie pracy obrabiarek",
                "programowanie obrabiarek",
                "kontrola, serwis i konserwacja obrabiarek skrawających"
            ]
        },
        {
            id: 6,
            type: "video",
            videos: [
                "https://youtube.com/embed/A5l-xTH19Ds"
            ]
        },
        {
            id: 7,
            type: "text",
            title: "Możliwości zatrudnienia:",
            parts: [
                "Wykonując ten zawód, można pracować w takich miejscach jak: firmy budowlane, warsztaty, firmy produkujące podzespoły do maszyn i urządzeń, huty, firmy produkujące samochody, ciągniki, zakłady, w których wytwarza się wyposażenie taboru kolejowego.",
                "Predyspozycje jakie powinien posiadać:",
                "Operator powinien umieć pracować w sytuacjach stresowych i w trudnych warunkach."
            ]
        },
        {
            id: 8,
            type: "text",
            title: "Zarobki",
            parts: [
                "Pracownik w branży zależnie od doświadczenia i posiadanych umiejętności i miejsca zatrudnienia może zarabiać nawet ponad  5000 zł miesięcznie.",
                "Zawód ten jest ceniony i poszukiwany na całym świecie"
            ]
        },
        {
            id: 9,
            type: "video",
            videos: [
                "https://youtube.com/embed/ybFEmYZZzgg",
                "https://youtube.com/embed/Xke_tdiR5h4",
                "https://youtube.com/embed/GJc_XS7r2Bg",
                "https://youtube.com/embed/0kXpffIoilg",
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
            name: "operator obrabiarek skrawających",
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