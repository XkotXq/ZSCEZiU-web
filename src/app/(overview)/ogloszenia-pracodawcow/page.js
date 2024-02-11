import PhotoBar from "@/app/ui/Sections/photobar";
import Image from "next/image";
import Mediacontent from "@/app/ui/components/post/mediacontent";

export default function page() {
    const content = [
        {
            id: 1,
            type: "desc",
            parts: [
                "Marzysz o pracy pod palmami w największym zadaszonym parku wodnym w Europie? Świetnie się składa! Park wodny Suntago oraz wioska hotelowa Suntago Village poszukują:"
            ]
        },
        {
            id: 2,
            type: "list",
            parts: [
                "pracowników działu obsługi klienta",
                "kasjerów",
                "kucharzy",
                "pomocy kucharzy",
                "pracowników obsługi w punktach gastronomicznych",
                "pracowników utrzymania czystości w części gastronomicznej",
                "barmanów",
                "pracowników obsługi w Strefie basenowej Galaxy i Jamango – Stewardów\n",
                "pracowników obsługi w Strefie Relaksu i Saun – Stewardów",
                "ratowników wodnych",
                "saunamistrzów",
                "terapeutów SPA/ kosmetologów",
                "techników",
                "ogrodników"
            ]
        },
        {
            id:3,
            type: "desc",
            parts: [
                "Oferujemy: świetną atmosferę pracy, zgrany zespół pracowników, szkolenia, wsparcie doświadczonej kadry kierowniczej, promocyjne wejściówki do parku, specjalne ceny pracownicze na posiłki w restauracjach znajdujących się na terenie Suntago, nowoczesne wyposażenie stanowisk pracy i narzędzia pracy, dostęp do najnowszych technologii, odzież służbową, bezpłatny transport do pracy z Warszawy i z Żyrardowa a dla zmotoryzowanych pracowników bezpłatny parking.",
                "Uczniom i absolwentom zapewniamy elastyczny grafik pracy, możliwość pogodzenia nauki z dodatkową pracą, szkolenia od podstaw.",
                "Zostaw swoje cv na: https://parkofpoland.com/pl/kariera/oferty"
            ]
        }
    ]
    const path = [
        {
            name: "główna",
            url: "/",
        },
        {
            name: "ogłoszenia pracodawców",
        }
    ]
    return (
        <div>
            <PhotoBar path={path}/>
            <div className="flex flex-col items-center gap-2 mt-5">
                <img src="/ogloszenia-pracodawcow/fmebli.png" className="w-[70%]" alt="ogłoszenie fmebli"/>
                <img src="/ogloszenia-pracodawcow/mc.jpg" className="w-[50%]" alt="ogłoszenie McDonald"/>
                <div className="mx-auto">
                <img src="/ogloszenia-pracodawcow/baner_suntago.jpg" className="w-[70%] mx-auto" alt="ogłoszenie suntago"/>
                    <div className="max-w-4xl mx-auto mt-2">
                        {content.map(content => <Mediacontent key={content.id} type={content.type} data={content}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}