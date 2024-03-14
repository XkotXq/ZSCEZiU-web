"use client";

import Chapters from "@/app/ui/components/chapters";
import PhotoBar from "@/app/ui/Sections/photobar";
import Mediacontent from "@/app/ui/components/post/mediacontent";

export default function Page() {
    const files = {
            type: "file",
            files: [
                {
                    value: "podanie - doc",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/uploads/rekrutacja/podanie_o_przyjecie_do_internatu_ZSCEZIU.doc"
                },
                {
                    value: "podanie - pdf",
                    url: "./rekrutacja/podanie_o_przyjecie_do_internatu_ZSCEZIU.pdf"
                },
                {
                    value: "oświadczenie - doc",
                    url: "https://gorka.rawa-kopernik.pl/wp-content/uploads/rekrutacja/internat_oswiadczenia.docx"
                },
                {
                    value: "oświadczenie - pdf",
                    url: "./rekrutacja/internat_oswiadczenia.pdf"
                }
            ],
        }
    const path = [
        {
            name: "główna",
            url: "/",
        },
        {
            name: "internat",
        }
    ]
    return (
        <div>
            <div className="text-custom-gray-300 p-1 sm:p-0">
                <PhotoBar path={path}/>
                <div className="max-w-4xl mx-auto">
                <div>
                    <h2 className="text-2xl font-bold py-2 text-custom-gray-200" id="internat">Internat</h2>
                    <div className="ml-3 sm:ml-6">
                        <p>
                            Internat jest integralną częścią Zespołu Szkół-Centrum Edukacji Zawodowej i Ustawicznej im.
                            Mikołaja Kopernika w Rawie Mazowieckiej. Mieszkają w nim nasi uczniowie spoza Rawy
                            Mazowieckiej. Pobyt w internacie, to pierwszy krok do samodzielności i dorosłości. Odbywa
                            się on jednak pod opieką wychowawców i z możliwością przebywania w gronie rówieśników. Życie
                            w internacie tak naprawdę nie różni się zbyt dużo od codziennego życia w domu rodzinnym,
                            gdzie każdy ma swoje prawa, ale i obowiązki. Bycie w internacie daje możliwość zawarcia
                            wielu nowych znajomości, można spotkać interesujących ludzi, a może nawet znaleźć przyjaciół
                            na całe życie. Ciągły kontakt z rówieśnikami uczy wielu umiejętności społecznych, jak np.
                            rozwiązywanie konfliktów, asertywności, negocjacji.
                        </p><br/>
                        <p>
                            Nad bezpieczeństwem mieszkańców czuwają wychowawcy, to oni są tymi, do których zawsze można
                            udać się po poradę, zwierzyć z problemów, a także zwyczajnie pożartować. W trosce o
                            bezpieczeństwo i poszanowanie norm życia społecznego w naszym internacie obowiązuje
                            regulamin i harmonogram dnia. Życie w internacie pozwala na samodzielność i pozostawia wiele
                            w rękach samych mieszkańców pod warunkiem, ze postępują według ogólnie przyjętych norm
                            społecznych. Internat staje się drugim domem, do którego chętnie wraca się wspomnieniami
                            nawet po latach.
                        </p><br/>
                        <p>
                            Internat to czas na integrację, rozrywkę czy realizację pasji i zainteresowań. Internat
                            Górki tętni imprezami z okazji np. Andrzejek czy Walentynek, ale również poświęconych ważnym
                            wydarzeniom społecznym lub historycznym. Bawimy więc i uczymy się wspólnie. Internat stawia
                            na Bezpieczeństwo, Integrację i Naukę.
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold py-2 text-custom-gray-200" id="internat-rekrutacja">Rekrutacja do
                        internatu odbywa się według harmonogramu</h2>
                    <ul className="list-disc ml-10">
                        <li>
                            <strong>Kwiecień – Maj 2021</strong>
                            <ul className="list-disc ml-4">
                                <li>Przyjmowanie podań o kontynuowaniu zamieszkania w internacie</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Czerwiec – Lipiec 2021</strong>
                            <ul className="list-disc ml-4">
                                <li>Przyjmowanie podań o przyjęcie do internatu</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Sierpień 2021</strong>
                            <ul className="list-disc ml-4">
                                <li>Ogłoszenie wyników naboru</li>
                            </ul>
                        </li>
                    </ul>
                    <div id="internat-rekrutacja-dokumenty">
                        <Mediacontent type={files.type} data={files}/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}