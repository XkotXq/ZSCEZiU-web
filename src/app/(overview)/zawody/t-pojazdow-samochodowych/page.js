import PhotoBar from "@/app/ui/Sections/photobar";
import Mediacontent from "@/app/ui/components/post/mediacontent";

export default function page() {
    const mainContent = [
        {
            id: 1,
            type: "text",
            title: "Technik pojazdów samochodowych",
            parts: [
                "uzyskane umiejętności",
            ]
        },
        {
            id: 2,
            type: "list",
            parts: [
                "znajomość budowy i zasad działania pojazdów",
                "znajomość procesów technologicznych ich wytwarzania",
                "obsługiwanie, naprawianie i eksploatacja pojazdów",
                "możliwość uzyskania prawa jazdy kat. B",
            ]
        },
        {
            id: 3,
            type: "video",
            videos: [
                "https://youtube.com/embed/RWsJS_lDFV8"
            ]
        },
        {
            id: 4,
            type: "desc",
            parts: [
                "Pomagamy zdobyć interesujący zawód, który da Ci możliwość szybkiego odnalezienia się na rynku pracy, usamodzielnienia się, a może urzeczywistnienia pomysłów i rozwoju własnych zainteresowań. Jeżeli motoryzacja to Twoja pasja, to pomożemy Ci tę pasję rozwijać.",
                "Technikum samochodowe to nie tylko zawód „mechanik”, Jesteśmy jedyną placówką oświatową w Rawie Mazowieckiej, która kształci młodzież w zawodzie mechanik na poziomie szkoły ponadgimnazjalnej. Jest to ciekawy i poszukiwany zawód na rynku pracy, w którym bardzo dobrze będą czuli się chłopcy jak i dziewczęta. Klasy mechaniczne są ukierunkowane, zgodnie z profilem szkoły, na diagnostykę samochodową.",
                "U nas dostaniesz do dyspozycji:"
            ]
        },
        {
            id: 5,
            type: "list",
            parts: [
                "doskonale wyposażone sale przedmiotowe",
                "warsztaty szkolne",
                "bogate zaplecze sportowe (sala gimnastyczna, boiska, siłownia)",
            ]
        },
        {
            id: 6,
            type: "desc",
            parts: [
                "Będziesz mógł się realizować biorąc udział w licznych kołach zainteresowań, konkursach i olimpiadach przedmiotowych. Dbamy o twoją karierę, dlatego Szkolny Ośrodek Kariery pomoże ci w określeniu drogi życiowej, znalezieniu dobrej pracy. Nasza szkoła ma liczne osiągnięcia w dziedzinie sportu.",
                "Zajęcia praktyczne odbywają się na warsztatach szkolnych oraz w zakładach rzemieślniczych zgodnie z programem nauczania i planem przejścia. Nauka jazdy zgodnie z wymaganiami na prawo jazdy kat. B. Szkołą organizuje kursy spawania w osłonach gazów.",
            ]
        },
        {
            id: 7,
            type: "title-m",
            title: "Zawód technik pojazdów samochodowych m.in. obejmuje takie efekty kształcenia jak:"
        },
        {
            id: 8,
            type: "list",
            parts: [
                "Diagnozowanie mechatronicznych systemów pojazdów samochodowych",
                "Naprawa mechatronicznych systemów pojazdów samochodowych",
                "Organizowanie obsługi pojazdów samochodowych",
                "Nadzorowanie obsługi pojazdów samochodowych",
            ]
        },
        {
            id: 9,
            type: "title-m",
            title: "Warunki, które trzeba spełnić, aby uzyskać tytuł technik pojazdów samochodowych."
        },
        {
            id: 10,
            type: "list",
            parts: [
                "Uzyskać kwalifikację MOT.02. „Obsługa, diagnozowanie oraz naprawa mechatronicznych systemów pojazdów samochodowych”"
            ]
        },
        {
            id: 11,
            type: "desc",
            parts: [
                "Kształcąc się w zawodzie technik pojazdów samochodowych będziesz przygotowany do wykonywania następujących zadań zawodowych:"
            ]
        },
        {
            id: 12,
            type: "list",
            parts: [
                "przeprowadzania obsługi instalacji i konserwacji mechatronicznych systemów pojazdów samochodowych",
                "diagnozowania stanu technicznego mechatronicznych systemów pojazdów samochodowych",
                "wykonywania napraw elektrycznych i elektronicznych układów pojazdów samochodowych",
                "Uzyskać kwalifikacje MOT.06. „Organizacja i prowadzenie procesu obsługi pojazdów samochodowych”",
                "diagnozowania stanu technicznego pojazdów samochodowych",
                "obsługiwania i naprawiania pojazdów samochodowych",
                "organizowanie i nadzorowanie procesu obsługi pojazdów samochodowych",
                "przeprowadzanie badań technicznych pojazdów samochodowych"
            ]
        },
        {
            id: 13,
            type: "desc",
            parts: [
                "Głównym celem pracy technika pojazdów samochodowych jest planowanie a następnie wykonywanie diagnostyki, naprawy i obsługi pojazdów samochodowych, a także uczestniczenie w ich procesie wytwarzania i użytkowania z użyciem określonych maszyn i urządzeń.",
                "Zdobywając zawód technika pojazdów samochodowych możesz podjąć pracę w:"
            ]
        },
        {
            id: 14,
            type: "list",
            parts: [
                "zakładach produkujących pojazdy oraz ich części zamienne,",
                "zakładach produkcyjnych naprawczych pojazdów samochodowych",
                "punktach serwisowych i stacjach kontroli pojazdów",
                "przedsiębiorstwach transportu samochodowego",
                "instytucjach zajmujących się obrotem pojazdami samochodowymi i ich częściami",
                "instytucjach zajmujących się ewidencją pojazdów samochodowych oraz ubezpieczeniem komunikacyjnym czy przedsiębiorstwach doradztwa technicznego dotyczącego motoryzacji",
                "stacjach obsługi pojazdów samochodowych i zakładach mechaniki pojazdowej",
                "możesz także założyć własną firmę i prowadzić działalność gospodarczą",
            ]
        },
        {
            id: 15,
            type: "title-m",
            title: "Najważniejsze cechy, predyspozycje jakie powinien posiadać kandydat:"

        },
        {
            id: 16,
            type: "list",
            parts: [
                "posiadanie zamiłowań i uzdolnień technicznych i manualnych",
                "zainteresowanie techniczne",
                "koordynacja zmysłowo-ruchowa",
                "wyobraźnia przestrzenna",
                "podzielność uwagi",
                "szybka orientacja i spostrzegawczość",
                "zdolność koncentrowania uwagi",
                "odporność na warunki środowiska pracy",
                "poprawność językowa w komunikowaniu się",
                "umiejętność korzystania z dokumentacji technicznej",
                "precyzja",
                "dobra kondycja fizyczna",
                "umiejętność pracy w grupie",
                "znajomość języków obcych",
            ]
        },
        {
            id: 17,
            type: "title-m",
            title: "Filmy z zajęć"

        },
        {
            id: 18,
            type: "video",
            videos: [
                "https://youtube.com/embed/cxnbAD0dr_M",
                "https://youtube.com/embed/vwXNCppYT9k",
                "https://youtube.com/embed/AjzyuFlLlyU",
            ]
        },
    ]
    return (
        <div>
            <PhotoBar name="technik pojazdów samochodowych"/>
            <div className="max-w-4xl mx-auto">
                {mainContent.map(content => <Mediacontent key={content.id} type={content.type} data={content}/>)}
            </div>
        </div>
    )
}