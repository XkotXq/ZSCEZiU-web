import PhotoBar from "@/app/ui/Sections/photobar";
import Mediacontent from "@/app/ui/components/post/mediacontent";

export default function page() {
    const mainContent = [
        {
            id: 1,
            type: "text",
            title: "Sprzedawca",
            parts: [
                "Zawód sprzedawcy należy do grupy zawodów usługowych. Absolwenci 2-letniej Zasadniczej Szkoły Zawodowej przygotowywani są głównie do pracy na stanowisku sprzedawcy. Realizowane przedmioty zawodowe w toku nauki to:"
            ]
        },
        {
            id: 2,
            type: "list",
            parts: [
                "Organizacja sprzedaży",
                "Sprzedaż towarów",
                "Towaroznawstwo"
            ]
        },
        {
            id: 3,
            type: "desc",
            parts: [
                "Oprócz tego kształcimy w zakresie podstawowych zagadnień ekonomicznych i prawnych, tak aby przedsiębiorczy absolwent mógł w przyszłości prowadzić własną działalność handlową lub usługową. W związku z tym młodzież bierze udział w spotkaniach OHP, lokalnymi przedsiębiorcami, czy podczas praktyk doskonali umiejętności zawodowe."
            ]
        },
        {
            id: 4,
            type: "title-m",
            title: "Wymagane kwalifikacje psychofizyczne dla zawodu to:"
        },
        {
            id: 5,
            type: "list",
            parts: [
                "uczciwość",
                "spostrzegawczość",
                "komunikatywność",
                "obowiązkowość",
                "poczucie estetyki",
                "kultura osobista",
                "zrównoważenie emocjonalne",
                "dobra sprawność ruchowa i wytrzymałość fizyczna",
                "umiejętność pracy w zespole",
            ]
        },
        {
            id: 6,
            type: "title-m",
            title: "Po ukończeniu szkoły będziesz potrafił/a:"
        },
        {
            id: 7,
            type: "list",
            parts: [
                "organizować, zaopatrywać i przyjmować dostawy towarów",
                "sprawdzać towary pod względem jakościowym i ilościowym",
                "organizować wystawę sklepową",
                "przygotowywać produkty do sprzedaży i wyeksponować je w punkcie sprzedaży",
                "informować nabywcę o walorach towaru",
                "przeprowadzać rozmowę sprzedażową zgodnie z formą obsługi klienta",
                "sprawnie realizować zamówienia i rozpatrywać reklamacje",
                "szybko i bezbłędnie dokonywać obliczeń sklepowych",
                "przygotowywać promocyjne oferty sprzedaży",
                "sporządzać faktury za towar i realizować inne formy płatności",
            ]
        },
        {
            id: 8,
            type: "title-m",
            title: "Absolwenci mogą znaleźć interesującą pracę:"
        },
        {
            id: 9,
            type: "list",
            parts: [
                "jako sprzedawcy, akwizytorzy, kierownicy sklepów",
                "w punktach sprzedaży drobnodetalicznej (kioski, targowiska)",
                "w punktach sprzedaży detalicznej (sklepy, hipermarkety)",
                "w punktach sprzedaży hurtowej (hurtownie)",
            ]
        },
        {
            id: 10,
            type: "desc",
            parts: [
                "Po ukończeniu szkoły uczeń będzie mógł podnosić swoje kwalifikacje kontynuując naukę w technikum."
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
            name: "sprzedawca",
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