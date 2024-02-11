import PhotoBar from "@/app/ui/Sections/photobar";
import Mediacontent from "@/app/ui/components/post/mediacontent";

export default function page() {
    const mainContent = [
        {
            id: 1,
            type: "text",
            title: "Technik handlowiec",
            parts: [
                "Technik Handlowiec to jeden z najbardziej poszukiwanych zawodów na rynku pracy…",
                "Podstawowym zadaniem handlowca jest sprzedaż – towarów i usług. Proces ten jest możliwy dzięki nawiązywaniu kontaktu z potencjalnymi klientami, budowanie odpowiednich relacji oraz podtrzymywanie współpracy. Jednak kluczem do sukcesu są przede wszystkim umiejętności przedstawiciela handlowego. Chodzi głównie o kompetencje miękkie. Liczy się więc:"
            ]
        },
        {
            id: 2,
            type: "list",
            parts: [
                "komunikatywność",
                "odporność na stres",
                "umiejętności negocjacyjne",
                "orientacja na cel",
                "autoprezentacja",
                "umiejętność zarządzania czasem"
            ]
        },
        {
            id: 3,
            type: "desc",
            parts: [
                "Przedstawiciel handlowy, jak sprzedawać wie. Jednak sama aktywna sprzedaż to nie wszystko, gdyż handlowiec musi:"
            ]
        },
        {
            id: 4,
            type: "list",
            parts: [
                "reagować na oczekiwania klienta",
                "wykazywać się empatią",
                "umiejętnie słuchać",
                "mieć szeroką wiedzę zarówno na temat produktu czy usługi, jak i firmy, z którą się kontaktuje",
                "znać dobrze swojego klienta, motywy jakie nim kierują i dać mu satysfakcje"
            ]
        },
        {
            id: 5,
            type: "video",
            videos: [
                "https://www.youtube.com/embed/OGzdexeRMOs?si=K4M0miMMLiSts8gd"
            ]
        },
        {
            id: 6,
            type: "desc",
            parts: [
                "Technicy handlowcy znają języki obce. W naszej szkole uczniowie mają do wyboru naukę w języku angielskim, niemieckim i rosyjskim zawodowym, co umożliwi kontakt w późniejszej pracy z klientami oraz firmami na rynku europejskim.",
                "Szkoła zapewnia 4 – tygodniowe praktyki zawodowe, które realizowane są w ramach działania administracyjno – biurowego w handlu (hurtowym i detalicznym). Dzięki temu uczniowie poznają: proces sprzedaży, zaopatrzenie firm handlowych, promocję i reklamę towaru, badania marketingowe, rozliczenia finansowo-księgowe.",
                "Zajęcia z symulacyjnej firmy handlowej realizowane są przy wykorzystaniu programów wspomagających zarządzanie firmy Insert https://www.insert.com.pl w nowoczesnej pracowni informatycznej przygotowanej dla tego zawodu."
            ]
        },
        {
            id: 7,
            type: "slider",
            width: 400,
            photos: [
                {
                    desc: "1",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-handlowiec/z3.jpg"
                },
                {
                    desc: "2",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-handlowiec/z1.jpg"
                },
                {
                    desc: "3",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/technik-handlowiec/z2.jpg"
                },
            ]
        },
        {
            id: 8,
            type: "desc",
            parts: [
                "Co w przyszłości …. STANOWISKA PRACY"
            ]
        },
        {
            id: 9,
            type: "list",
            parts: [
                "Merchandiser",
                "Menedżer produktu",
                "Przedstawiciel handlowy",
                "Pracownik działu marketingu",
                "Pracownik agencji reklamowej",
                "Pracownik działu obsługi klienta",
                "Sprzedawca usług finansowych"
            ]
        },
        {
            id: 10,
            type: "desc",
            parts: [
                "MIEJSCA PRACY"
            ]
        },
        {
            id: 11,
            type: "list",
            parts: [
                "punkty sprzedaży detalicznej",
                "hurtownie i magazyny",
                "agencje reklamowe lub marketingowe",
                "działy handlu i marketingu",
                "własna działalność gospodarcza ponieważ ten kierunek kształcenia przygotowuje też absolwenta do prowadzenia własnej działalności gospodarczej handlowo-usługowo-produkcyjnej."
            ]
        },
        {
            id: 12,
            type: "desc",
            parts: [
                "KIERUNKI STUDIÓW ZWIĄZANE Z HANDLEM:"
            ]
        },
        {
            id: 13,
            type: "list",
            parts: [
                "Handel zagraniczny",
                "Marketing",
                "Ekonomia",
                "Transport i spedycja",
                "Zarządzanie",
                "Finanse i rachunkowość",
                "Reklama multimedialna",
                "Handel i zarządzanie sprzedażą",
            ]
        },
        {
            id: 14,
            type: "quote",
            quotes: [
                {
                    quote: "Jakość pamięta się o wiele dłużej niż cenę",
                    author: "motto życiowe rodziny GUCCI"
                },
                {
                    quote: "Twoi najbardziej niezadowoleni klienci są najlepszym źródłem do nauki.",
                    author: "Bill Gates, Microsoft"
                }
            ]
        },
        {
            id: 15,
            type: "video",
            videos: [
                "https://youtube.com/embed/wlVs4v-5leI"
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
            name: "technik handlowiec",
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