import PhotoBar from "../../../ui/Sections/photobar";
import Mediacontent from "../../../ui/components/post/mediacontent";

export default function page() {
    const mainContent = [
        {
            id: 1,
            type: "text",
            title: "Elektromechanik pojazdów samochodowych",
            parts: [
                "Elektromechanik pojazdów samochodowych to osoba, która posiada oczywiście podstawowe wiadomości z budowy i obsługi pojazdów ale także wiadomości i umiejętności w zakresie diagnostyki i naprawy elektrycznych i elektronicznych układów pojazdów samochodowych, na bieżąco aktualizuje swoje wiadomości i zdobywa nowe umiejętności.",
                "Dynamiczny wzrost liczby pojazdów na drogach wymusza na gospodarce zwiększenie ilości specjalistów, którzy wykonując rzetelnie swoje zadania zawodowe zaspokoją zapotrzebowanie na usługi w branży motoryzacyjnej.",
                "Praca polega na kontrolowaniu stanu technicznego zespołów i układów elektrycznych i mechanicznych, przeprowadzaniu ich regulacji i konserwacji oraz diagnozowaniu usterek, miedzy innymi za pomocą zebrania danych z wielu kontrolnych czujników elektronicznych i z pamięci komputera pokładowego pojazdu. Ponadto elektromechanik demontuje i montuje instalacje, układy elektryczne i mechaniczne lub ich elementy, dokonuje napraw lub wymiany zużytych części.",
                "Rozwój elektrycznego i elektronicznego wyposażenia pojazdów samochodowych wymaga od elektromechanika pojazdów samochodowych odpowiedzialności związanej z poziomem oferowanych usług.",
                "Dlatego ucząc się w zawodzie elektromechanik pojazdów samochodowych będziesz potrafił:",
            ]
        },
        {
            id: 2,
            type: "list",
            parts: [
                "sprawdzać stan techniczny instalacji elektrycznej pojazdów samochodowych",
                "wykonać montaż i demontaż instalacji elektrycznych samochodów ",
                "przeprowadzić konserwacje i przeglądy okresowe wyposażenia elektrycznego i elektronicznego pojazdów samochodowych ",
                "lokalizować i usuwać uszkodzenia w układach elektronicznych pojazdów samochodowych",
            ]
        },
        {
            id: 3,
            type: "desc",
            parts: [
                "",
            ]
        },
        {
            id: 4,
            type: "slider",
            photos: [
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/elektromechanik-pojazdow-samochodowych/elektromechanik_01.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/elektromechanik-pojazdow-samochodowych/elektromechanik_02.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/elektromechanik-pojazdow-samochodowych/elektromechanik_03.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/elektromechanik-pojazdow-samochodowych/elektromechanik_04.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/elektromechanik-pojazdow-samochodowych/elektromechanik_05.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/elektromechanik-pojazdow-samochodowych/elektromechanik_06.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/elektromechanik-pojazdow-samochodowych/elektromechanik_07.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/elektromechanik-pojazdow-samochodowych/elektromechanik_08.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/elektromechanik-pojazdow-samochodowych/elektromechanik_09.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/elektromechanik-pojazdow-samochodowych/elektromechanik_10.png"
                },
                {
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/elektromechanik-pojazdow-samochodowych/elektromechanik_11.png"
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
            name: "zawody",
            url: "/#zawody",
        },
        {
            name: "elektomechanik pojazdów samochodowych",
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