import PhotoBar from "../../../ui/Sections/photobar";
import Mediacontent from "../../../ui/components/post/mediacontent";

export default function page() {
    const mainContent = [
        {
            id: 1,
            type: "text",
            title: "Technik informatyk",
            parts: [
                "Od roku szkolnego 2010/2011 w naszej szkole kształcimy młodzież w Technikum w zawodzie Technik Informatyk."
            ]
        },
        {
            id: 2,
            type: "video",
            videos: [
                "https://youtube.com/embed/upvJFX8uMGI"
            ]
        },
        {
            id: 3,
            type: "desc",
            parts: [
                "Zajęcia będą się odbywać w trzech nowoczesnych pracowniach wyposażonych w 200Mb/s łącze internetowe – galeria zdjęć naszych pracowni."
            ]
        },
        {
            id: 4,
            type: "video",
            videos: [
                "https://youtube.com/embed/qhWUvCODf2I"
            ]
        },
        {
            id: 5,
            type: "desc",
            parts: [
                "W czasie nauki będziesz mieć możliwość zdobycia gruntownego wykształcenia ogólnego, przygotowującego cię do matury a ponadto zdobędziesz wykształcenie ukierunkowane na zagadnienia związane z informatyką. Nauka w technikum kończy się egzaminem potwierdzającym kwalifikacje zawodowe, którego zdanie pozwoli Ci cieszyć się tytułem Technika Informatyka. Realizacja program nauczania umożliwi Ci również zdawanie egzaminu maturalnego z informatyki."
            ]
        },
        {
            id: 6,
            type: "slider",
            photos: [
                {
                    desc: "pracownia informatyczna 33",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/sala_inf1/4231.jpg"
                },
                {
                    desc: "pracownia informatyczna 33",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/sala_inf1/4232.jpg"
                },
                {
                    desc: "pracownia informatyczna 33",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/sala_inf1/4241.jpg"
                },
                {
                    desc: "pracownia informatyczna 33",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/sala_inf1/4244.jpg"
                },
                {
                    desc: "pracownia informatyczna 33",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/sala_inf1/4233.jpg"
                },
                {
                    desc: "pracownia informatyczna 33",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/sala_inf1/4245.jpg"
                },
                {
                    desc: "pracownia informatyczna 33",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/sala_inf1/4235.jpg"
                },
                {
                    desc: "pracownia informatyczna 33",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/sala_inf1/4247.jpg"
                },
                {
                    desc: "pracownia informatyczna 33",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/sala_inf1/4248.jpg"
                },
                {
                    desc: "pracownia informatyczna 33",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/sala_inf1/4286.jpg"
                },
                {
                    desc: "pracownia informatyczna 33",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/sala_inf1/4246.jpg"
                },
                {
                    desc: "pracownia informatyczna 33",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/sala_inf1/4249.jpg"
                },
                {
                    desc: "pracownia informatyczna 33",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/sala_inf1/4283.jpg"
                },
            ]
        },
        {
            id: 7,
            type: "desc",
            parts: [
                "W czasie nauki będziesz mieć możliwość zdobycia gruntownego wykształcenia ogólnego, przygotowującego cię do matury a ponadto zdobędziesz wykształcenie ukierunkowane na zagadnienia związane z informatyką. Nauka w technikum kończy się egzaminem potwierdzającym kwalifikacje zawodowe, którego zdanie pozwoli Ci cieszyć się tytułem Technika Informatyka. Realizacja program nauczania umożliwi Ci również zdawanie egzaminu maturalnego z informatyki.",
                "Po odbyciu obowiązkowych zajęć uczniowie mogą uzyskać świadectwo dojrzałości oraz tytuł technika informatyka w następujących kwalifikacjach:",
            ]
        },
        {
            id: 8,
            type: "slider",
            photos: [
                {
                    desc: "pracownia informatyczna 40",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/sala-informatyczna-40/4339.jpg"
                },
                {
                    desc: "pracownia informatyczna 40",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/sala-informatyczna-40/4345.jpg"
                },
                {
                    desc: "pracownia informatyczna 40",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/sala-informatyczna-40/4346.jpg"
                },
                {
                    desc: "pracownia informatyczna 40",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/sala-informatyczna-40/4340.jpg"
                },
                {
                    desc: "pracownia informatyczna 40",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/sala-informatyczna-40/4342.jpg"
                },
                {
                    desc: "pracownia informatyczna 40",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/sala-informatyczna-40/4350.jpg"
                },
                {
                    desc: "pracownia informatyczna 40",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/gallery/sala-informatyczna-40/4351.jpg"
                },
            ]
        },
        {
            id: 9,
            type: "title-m",
            title: "INF.02 – Administracja i eksploatacja systemów komputerowych, urządzeń peryferyjnych i lokalnych sieci komputerowych"
        },
        {
            id: 10,
            type: "list",
            parts: [
                "Przygotowanie stanowiska komputerowego do pracy",
                "Użytkowanie urządzeń peryferyjnych komputera osobistego",
                "Naprawa komputera osobistego",
                "Projektowanie i wykonywanie lokalnej sieci komputerowej\n",
                "Konfigurowanie urządzeń sieciowych",
                "Administrowanie sieciowymi systemami operacyjnymi",
            ]
        },
        {
            id: 11,
            type: "title-m",
            title: "INF.03 – Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz bazami danych"
        },
        {
            id: 12,
            type: "list",
            parts: [
                "Tworzenie stron internetowych",
                "Tworzenie baz danych i administrowanie bazami danych",
                "Tworzenie aplikacji internetowych",
            ]
        },
        {
            id: 12,
            type: "video",
            videos: [
                "https://youtube.com/embed/TSwFzsr92Kw"
            ]
        },
        {
            id: 13,
            type: "title-m",
            title: "Z najważniejszych umiejętności informatycznych, jakie zdobędziesz w pięciu latach nauki są:"
        },
        {
            id: 13,
            type: "list",
            parts: [
                "Konstruowanie i zarządzanie relacyjnymi bazami danych",
                "instalacja i administracja serwerem usług w sieci Internet (serwer WWW i serwer FTP)",
                "budowa serwisu internetowego opartego na HTML i JavaScript",
                "budowa serwisu internetowego opartego na języku skryptowym PHP",
                "budowa serwisu internetowego z wykorzystaniem baz danych MySql",
                "programowanie w języku JavaScript, PHP z MySQL, C++, Pascal",
                "montaż i edycja wideo",
                "animacje FLASH z elementami programistycznymi w ActionSctipt",
                "konfigurowanie i zarządzanie systemami Windows i Unix/Linux\n",
                "zarządzanie sieciami LAN, WAN",
            ]
        },
        {
            id: 14,
            type: "video",
            videos: [
                "https://www.youtube.com/embed/l_P2U8YU2qg?si=WsAJRBtec2sVS8se"
            ]
        },
        {
            id: 15,
            type: "desc",
            parts: [
                "Od kandydata wymaga się przede wszystkim chęci do pracy z komputerem – nie mylić tutaj czasu spędzanego przy grach i innych elementach związanych z rozrywką. Informatyka to nauka ścisła.",
            ]
        },
        {
            id: 14,
            type: "title-m",
            title: "Do nauki w zawodzie Technik Informatyk będziemy korzystać z podręczników firmy Helion:",
        },
        {
            id: 15,
            type: "list",
            parts: [
                "Kwalifikacja INF.02. Administracja i eksploatacja systemów komputerowych, urządzeń peryferyjnych i lokalnych sieci komputerowych. Część 1. Systemy komputerowe. Podręcznik do nauki zawodu technik informatyk",
                "Kwalifikacja INF.02. Administracja i eksploatacja systemów komputerowych, urządzeń peryferyjnych i lokalnych sieci komputerowych. Część 2. Naprawa i eksploatacja systemów komputerowych. Podręcznik do nauki zawodu technik informatyk",
                "Kwalifikacja INF.03. Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz bazami danych. Część 1. Projektowanie stron internetowych. Podręcznik do nauki zawodu technik informatyk i technik programista",
                "Kwalifikacja INF.03. Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz bazami danych. Część 2. Projektowanie i administrowanie bazami danych. Podręcznik do nauki zawodu technik informatyk i technik programista",
                "Kwalifikacja INF.03. Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz bazami danych. Część 3. Programowanie aplikacji internetowych. Podręcznik do nauki zawodu technik informatyk i technik programista",
            ]
        },
        {
            id: 16,
            type: "video",
            videos: [
                "https://youtube.com/embed/H42BmmZdEgw"
            ]
        },
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
            name: "technik informatyk",
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