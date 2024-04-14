import PhotoBar from "../../../ui/Sections/photobar";
import Mediacontent from "../../..//ui/components/post/mediacontent";

export default function page() {
    const mainContent = [
        {
            id: 1,
            type: "text",
            title: "Technik mechatronik",
            parts: []
        },
        {
            id: 2,
            type: "title-m",
            title: "Cele kształcenia w zawodzie technik mechatronik:"
        },
        {
            id: 3,
            type: "list",
            parts: [
                "montowania urządzeń i systemów mechatronicznych",
                "eksploatowania urządzeń i systemów mechatronicznych",
                "projektowania urządzeń i systemów mechatronicznych",
                "programowania urządzeń i systemów mechatronicznych",
            ]
        },
        {
            id: 4,
            type: "video",
            videos: [
                "https://youtube.com/embed/3xCpvvtOTgo"
            ]
        },
        {
            id: 5,
            type: "title-m",
            title: "Kwalifikacja ELM.03. Montaż, uruchamianie i konserwacja urządzeń i systemów mechatronicznych"
        },
        {
            id: 6,
            type: "list",
            parts: [
                "Rozruch urządzeń mechatronicznych",
                "Konserwacja urządzeń mechatronicznych",
                "Montaż zespołów mechanicznych",
                "Montaż -pneumatyka i hydraulika",
                "Montaż elementów elektrycznych i elektronicznych",
            ]
        },
        {
            id: 7,
            type: "title-m",
            title: "Kwalifikacja ELM.06. Eksploatacja i programowanie urządzeń i systemów mechatronicznych"
        },
        {
            id: 8,
            type: "list",
            parts: [
                "Przedmioty w kształceniu zawodowym teoretycznym",
                "Obsługa urządzeń mechatronicznych",
                "Programowanie urządzeń mechatronicznych",
                "Zdobyte umiejętności",
            ]
        },
        {
            id: 9,
            type: "title-m",
            title: "Umiejętność eksploatacji, konserwacji, montażu i konfiguracji elementów automatyki, układów pneumatycznych i elektropneumatycznych"
        },
        {
            id: 10,
            type: "list",
            parts: [
                "Umiejętność tworzenia układów urządzeń elektrycznych i pneumatycznych",
                "Wykonywanie pomiarów wielkości elektrycznych i nieelektrycznych",
                "Umiejętność zbierania i przetwarzania danych",
                "Uruchamianie sterowników mikroprocesorowych i ich programowanie",
            ]
        },
        {
            id: 11,
            type: "slider",
            photos: [
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-mechatronik/z005.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-mechatronik/z002.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-mechatronik/z003.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-mechatronik/z004.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-mechatronik/z007.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-mechatronik/z006.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-mechatronik/z008.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-mechatronik/z010.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-mechatronik/z009.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-mechatronik/z011.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-mechatronik/z012.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-mechatronik/z013.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-mechatronik/z014.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-mechatronik/z015.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-mechatronik/z016.png"
                }
            ]
        },
        {
            id: 12,
            type: "title-m",
            title: "Możliwości zatrudnienia:"
        },
        {
            id: 13,
            type: "list",
            parts: [
                "Posiadane umiejętności stwarzają absolwentowi możliwości podejmowania pracy w praktycznie wszystkich rodzajach przemysłu oraz jednostkach administracyjnych.",
                "Absolwenci najczęściej znajdują zatrudnienie w pionie głównego mechanika lub automatyka przedsiębiorstw, firmach przemysłu elektromaszynowego.",
                "W zapleczu naukowo – badawczym i projektowym."
            ]
        },
        {
            id: 14,
            type: "title-m",
            title: "Turnieje"
        },
        {
            id: 15,
            type: "list",
            parts: [
                "Mistrzostwa Polski Programistów PLC",
                "Mistrz Adrian Grzyb IVTM –kategoria  master"
            ]
        },
        {
            id: 16,
            type: "video",
            videos: [
                "https://youtube.com/embed/erPCu2c4Zgo",
                "https://youtube.com/embed/Sgew9BNlzVw",
                "https://youtube.com/embed/8Fji29ltbpc",
                "https://youtube.com/embed/LiY3LATL-lk",
                "https://youtube.com/embed/LRGuPLMKdHg",
                "https://youtube.com/embed/UnoUqLW9qks",
                "https://youtube.com/embed/IFt_KxXndzs",
                "https://youtube.com/embed/RQbgF5cdIYQ",
                "https://youtube.com/embed/kg_6fg5KXvE",
                "https://youtube.com/embed/a8KkaOvsprY",
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
            name: "technik mechatronik",
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