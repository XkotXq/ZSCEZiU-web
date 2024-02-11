import PhotoBar from "@/app/ui/Sections/photobar";
import Mediacontent from "@/app/ui/components/post/mediacontent";

export default function page() {
    const mainContent = [
        {
            id: 1,
            type: "text",
            title: "Technik żywienia i usług gastronomicznych",
            parts: [
                "Zawód, który pozwala rozwijać zainteresowania kulinarne i nie tylko!. Łączy możliwości menadżera gastronomii, kucharza i kelnera!",
                "Absolwent kierunku technik żywienia i usług gastronomicznych jest przygotowany do wykonywania następujących zadań zawodowych:"
            ]
        },
        {
            id: 2,
            type: "list",
            parts: [
                "oceniania jakości żywności oraz jej przechowywania",
                "sporządzania i ekspedycji potraw i napojów",
                "planowania i oceny żywienia",
                "organizowania produkcji gastronomicznej",
                "planowania i realizacji usług gastronomicznych",
            ]
        },
        {
            id: 3,
            type: "desc",
            parts: [
                "Uczeń kształcący się w zawodzie technik żywienia i usług gastronomicznych potrafi zorganizować kompleksowo obsługę imprez gastronomicznych. Zajmuje się także przygotowywaniem pełnych posiłków, zarówno codziennych jak i okolicznościowych. Przygotowuje potrawy i napoje czerpiąc pomysły z kuchni polskiej i kuchni innych narodów."
            ]
        },
        {
            id: 4,
            type: "video",
            videos: [
                "https://youtube.com/embed/9eXq3yJaXmE"
            ]
        },
        {
            id: 5,
            type: "desc",
            parts: [
                "Zajęcia odbywają się w pracowniach gastronomicznych wyposażonych w profesjonalny sprzęt gastronomiczny umożliwiający rozwijanie umiejętności w naturalnych warunkach zawodowych. Kształcenie praktyczne odbywa się w kilkugodzinnych blokach lekcyjnych podczas, których młodzież przygotowuje potrawy, dokonuje ich oceny, a następnie konsumuje.",
                "Wykonując zadania zawodowe uczeń dba o właściwe bezpieczeństwo zdrowotne sporządzanych potraw i napojów, przestrzegając procedur obowiązujących w gastronomii. Przestrzega także zasad racjonalnego żywienia. Stale aktualizuje swoją wiedzę i doskonali umiejętności zawodowe szczególnie w zakresie towaroznawstwa żywności i nowych technologii stosowanych w gastronomii. Obsługuje programy komputerowe do prowadzenia gospodarki magazynowej i do rejestrowania zamówień kelnerskich. Sporządza potrawy dietetyczne oraz regionalne.",
                "Do zadań zawodowych wykonywanych przez technika żywienia i usług gastronomicznych należą również czynności związane z organizacją, kompleksową obsługą przyjęć oraz imprez organizowanych w zakładach świadczących usługi gastronomiczne.",
                "Młodzież kształcąca się w tym zawodzie musi posiadać badania do celów sanitarnoepidemiologicznych, a na zajęcia przychodzi w odpowiednich strojach zgodnie z wymogami HACCP.",
            ]
        },
        {
            id: 6,
            type: "slider",
            photos: [
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/6650-wegetarianskie-wesele.jpg"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/DSC07678.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_2050.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_1645-Konrad-przyprawy.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_0184.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_0161.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_2406.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_2385.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_2126.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_2055.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_2070.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_2407-deser.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_2433-krewetki.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_2446.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_2447.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_2453.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_3154.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_2626-stol-zastawiony.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_3131-Konrad.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_3189.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_3186.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_3162.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_3163.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_3168.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_3174.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_3200.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_3220.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_3193.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_3262.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/koktail.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/IMG_3212.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/lalki.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/lalki.JPG"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-zywienia-i-uslug-gastronomicznych/Szymon-za-barem.JPG"
                }
            ]
        },
        {
            id: 7,
            type: "title-m",
            title: "Po ukończeniu szkoły absolwent uzyska wykształcenie średnie oraz zdobędzie dwie kwalifikacje zawodowe:"
        },
        {
            id: 8,
            type: "desc",
            parts: [
                "TG.07 Sporządzanie potraw i napojów"
            ]
        },
        {
            id: 9,
            type: "list",
            parts: [
                "Przechowywanie żywności",
                "Sporządzanie i ekspedycja potraw i napojów"
            ]
        },
        {
            id: 10,
            type: "desc",
            parts: [
                "TG.16 Organizacja żywienia i usług gastronomicznych"
            ]
        },
        {
            id: 11,
            type: "list",
            parts: [
                "Planowanie i ocena żywienia",
                "Organizowanie produkcji gastronomicznej",
                "Planowanie i wykonywanie usług",
                "gastronomicznych"
            ]
        },
        {
            id: 12,
            type: "desc",
            parts: [
                "Miejsca pracy technika żywienia i usług gastronomicznych: zakłady gastronomiczne (restauracje, bary, bufety) i placówki żywienia zbiorowego usytuowanych w hotelach, sanatoriach, domach wczasowych, szpitalach, szkołach, również na promach, statkach lub w innych środkach transportu oraz w firmach cateringowych."
            ]
        },
        {
            id: 13,
            type: "video",
            videos: [
                "https://youtube.com/embed/w2UKypCrdiE"
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
            name: "technik żywienia i usług gastronomicznych",
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