import PhotoBar from "@/app/ui/Sections/photobar";
import Mediacontent from "@/app/ui/components/post/mediacontent";

export default function page() {
    const mainContent = [
        {
            id: 1,
            type: "text",
            title: "Klasa wielozawodoawa",
            parts: [
                "Szkoła stwarza młodzieży szansę zdobywania również innych zawodów usługowych typu: fryzjer, krawiec, elektryk, lakiernik, blacharz samochodowy, stolarz, rzeźnik wędliniarz, fotograf, i inne.",
                "Umiejętności praktyczne uczniowie doskonalą w rzemieślniczych zakładach pracy, zaś wiedzę teoretyczną z przedmiotów zawodowych zdobywają na kursach organizowanych przez różne Ośrodki Dokształcania Zawodowego w kraju. Nauka trwa 3 lata, w czasie których młodzież pogłębia swoje umiejętności zawodowe.",
                "Podstawą organizacji nauki zawodu w klasie wielozawodowej jest umowa o pracę w celu przygotowania zawodowego podpisana pomiędzy pracodawcą – rzemieślnikiem, a uczniem jako młodocianym pracownikiem. Podpisanie umowy odbywa się pod kontrolą kierownika praktycznej nauki zawodu – pracownika szkoły",
                "Walorami systemu kształcenia w klasach wielozawodowych są:",
            ]
        },
        {
            id: 2,
            type: "list",
            parts: [
                "zindywidualizowany tok nauczania uwzględniający możliwości, uzdolnienia i ograniczenia młodocianego",
                "uczenie się zawodu w warunkach naturalnej i rzeczywistej, a nie pozorowanej pracy w otoczeniu doświadczonych pracowników, z możliwością dokonywania bieżącej samooceny postępów w nabywaniu umiejętności, co zwiększa mobilność absolwenta na rynku pracy i przygotowuje go do radzenia sobie na rynku pracy",
                "poznawanie w toku pracy nowych technologii, materiałów i urządzeń, które wprowadza zakład dla zwiększenia swojej efektywności",
                "tworzenie więzi emocjonalnych pomiędzy młodocianym pracownikiem i pracodawcą, mających istotne znaczenie dla harmonijnej współpracy i realizacji programu nauczania oraz przyszłej pracy",
            ]
        },
        {
            id: 3,
            type: "title-m",
            title: "Charakterystyka zawodów"
        },
        {
            id: 4,
            type: "list-l",
            parts: [
                {
                    title: "Fryzjer",
                    desc: "Zawód fryzjera należy do grupy zawodów usługowych. Absolwenci 3-letniej szkoły zawodowej tej specjalności mają przygotowanie do pracy w zakładach i salonach fryzjerskich. Dzięki posiadanym umiejętnościom mogą również prowadzić własne zakłady usługowe tej branży. W trakcie nauki zdobywają wiedzę z zakresu technologii fryzjerskiej, rysunku zawodowego i higieny zawodowej. Zajęcia praktyczne odbywają się w olsztyńskich zakładach i salonach fryzjerskich."
                },
                {
                    title: "Elektryk",
                    desc: "Praca elektryka polega na montażu i demontażu sieci elektrycznej oraz urządzeń elektrycznych i kontroli ich pracy. W zależności od zdobytego wykształcenia i zajmowanego stanowiska obowiązki i zakres czynności elektryka mogą się różnić. Elektryk układa kable i podłącza urządzenia elektryczne (np. oświetlenie, ogrzewanie elektryczne), a następnie czuwa nad ich poprawną pracą. Elektryk może zajmować się także naprawą i konserwacją elektrycznego sprzętu gospodarstwa domowego, naprawą i przezwajaniem silników elektrycznych, naprawą uszkodzonych elementów w rozdzielniach energii elektrycznej, a także elektromechaniką samochodową."
                },
                {
                    title: "Blacharz samochodowy",
                    desc: "Charakterystyka: naprawa, dorabianie i montaż elementów karoserii do środków transportu. Naprawa podzespołów i części środków transportu wykonanych z blachy. Wykonywanie i regeneracja chłodnic i nagrzewnic. Inne prace i czynności niezbędne do całkowitego wykonania świadczonej usługi."
                },
                {
                    title: "Lakiernik",
                    desc: "Charakterystyka: lakierowanie nadwozi i podwozi środków transportu. Przygotowywanie podwozia pod lakier. Antykorozyjne zabezpieczanie środków transportu. Renowacja powłok lakierniczych. Inne prace i czynności niezbędne do całkowitego wykonania świadczonej usługi."
                },
                {
                    title: "Fotograf",
                    desc: "Charakterystyka: wykonywanie w zakładzie i poza zakładem fotografii, filmów i przeźroczy: portretowych, reportażowych, okolicznościowych, krajobrazowych, technicznych itp. Wykonywanie fotokopii. Wykonywanie prac powierzonych. Sporządzanie odbitek fotograficznych na papierze, porcelanie itp. Wytwarzanie wyrobów techniką fotografowania (np. bajki, zestawy przeźroczy itp.)"
                },
                {
                    title: "Monter instalacji i urządzeń sanitarnych",
                    desc: "Charakterystyka: wykonanie, naprawa i konserwacja wszelkiego rodzaju wewnętrznych i zewnętrznych instalacji oraz urządzeń. Czyszczenie wykonanej instalacji i zabezpieczenie jej przed korozją, a w razie potrzeby położenie izolacji termicznej. Wykonywanie nietypowych elementów instalacyjnych. Inne prace i czynności niezbędne do całkowitego wykonania świadczenia."
                },
                {
                    title: "Stolarz",
                    desc: "Charakterystyka: wytwarzanie, naprawa, renowacja i konserwacja mebli z drewna i z udziałem innych materiałów oraz wykonywanie części drewnianych do mebli o mieszanym wykonawstwie. Wytwarzanie i naprawa stolarki budowlanej z drewna i materiałów drewnopochodnych. Wyrób trumien. Wykonywanie i naprawa budek, altanek i kiosków. Usługowa stolarka i obróbka drewna. Inne prace i czynności niezbędne do całkowitego wykonania i wykończenia wyrobu lub świadczonej usługi."
                },
                {
                    title: "Wulkanizator",
                    desc: "Charakterystyka: naprawa wszelkiego rodzaju opon i dętek, bieżnikowanie i kolcowanie opon, montaż i demontaż opon oraz ich wyważanie, naprawa wszelkich wyrobów z gumy , w tym zabawek i artykułów sanitarnych, wykonywanie klejów do gumy."
                },
                {
                    title: "Rzeźnik wędliniarz",
                    desc: "Charakterystyka: klasyfikacja żywca i przygotowanie do uboju. Ubój zwierząt rzeźnych i drobiu. Obróbka poubojowa. Rozbiór, podział i klasyfikacja mięsa. Przygotowywanie mięsa do produkcji przetworów. Wytwarzanie wędzonek, wędlin i wyrobów wędliniarskich. Usługowy ubój zwierząt rzeźnych i drobiu oraz ich rozbiór."
                },
                {
                    title: "Mechanik-monter maszyn i urządzeń",
                    desc: "Zawód mechanik maszyn i urządzeń należy do bardzo często spotykanych w sferze zatrudnienia. Pracownicy zajmują się wytwarzaniem, konserwacją, naprawą i eksploatacją maszyn i urządzeń mechanicznych. Praca mechanika-montera maszyn i urządzeń wymaga na ogół zespołowego działania i oparta jest na współpracy. Absolwenci tego zawodu znajdują zatrudnienie przede wszystkim w przedsiębiorstwach przemysłu metalowego i maszynowego, przedsiębiorstwach obsługowo-naprawczych a także w innych działach gospodarki, zajmują się wytwarzaniem i eksploatacją urządzeń technicznych."
                },
                {
                    title: "Operator maszyn i urządzeń przemysłu spożywczego",
                    desc: "Zawód operator maszyn i urządzeń przemysłu spożywczego jest zawodem szerokoprofilowym. Biorąc pod uwagę potrzeby lokalnych zakładów przetwórstwa mięsnego, mleczarskiego czy piekarsko-cukierniczego) jest zawodem poszukiwanym na rynku pracy. Absolwent szkoły kształcącej w zawodzie operator maszyn i urządzeń przemysłu spożywczego może podejmować pracę w przedsiębiorstwach przetwórstwa spożywczego, na stanowiskach pracy związanych z obsługą maszyn i urządzeń w kolejnych etapach procesu technologicznego."
                }
            ]
        }
    ]
    return (
        <div>
            <PhotoBar name="klasa wielozawodowa"/>
            <div className="max-w-4xl mx-auto">
                {mainContent.map(content => <Mediacontent key={content.id} type={content.type} data={content}/>)}
            </div>
        </div>
    )
}