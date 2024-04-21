"use client"
import Professioncard from "../components/prefessioncard";
import {Accordion, AccordionItem, Link} from "@nextui-org/react";
import CarouselWithPosts from "../components/post/carouselWithPosts";
export default function Professionsection() {
    return (
        <>
            <div className="mx-auto max-w-2xl">
                <div>
                    <h2 className="text-2xl font-medium">Najnowsze posty</h2>
                </div>
                <CarouselWithPosts/>
            </div>
            <div className="mx-auto max-w-2xl">
                <Accordion variant="splitted">
                    <AccordionItem title="Dlaczego Zespół Szkół – Centrum Edukacji Zawodowej i Ustawicznej im M. Kopernika w Rawie Mazowieckiej?">
                        <ul className="list-disc ml-5">
                            <li>łatwy dojazd</li>
                            <li>możliwość zakwaterowania w bursie międzyszkolnej</li>
                            <li>dobre wyposażenie szkoły</li>
                            <li>wysoko wykwalifikowana i przyjazna uczniowi kadra pedagogiczna</li>
                            <li>niskie koszty kształcenia ponoszone przez rodziców</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem title="Dlaczego szkoła z zawodem?">
                        <ul className="list-disc ml-5">
                            <li>zdobycie zawodu po 5 latach nauki (oszczędność czasu i pieniędzy)</li>
                            <li>możliwość kontynuowania nauki na studiach wyższych lub podjęcie pracy w wyuczonym zawodzie</li>
                            <li>łatwiejsze zdobycie pracy – odbyta praktyka zawodowa</li>
                            <li>poznanie różnych warunków pracy – liczne wycieczki do zakładów pracy</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem title="Dlaczego szkoła zasadnicza?">
                        <ul className="list-disc ml-5">
                            <li>zdobycie zawodu po 3 latach nauki (oszczędność czasu i pieniędzy)</li>
                            <li>możliwość kontynuowania nauki w liceum lub technikum uzupełniającym lub podjęcie pracy w wyuczonym zawodzie</li>
                            <li>łatwiejsze zdobycie pracy – odbyta praktyka zawodowa</li>
                            <li>poznanie różnych warunków pracy – liczne wycieczki do zakładów pracy</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem title="Serwis uczniów">
                        <ul className="list-disc ml-5">
                            <li><Link href="#" color="foreground">technik informatyk</Link></li>
                            <li><Link href="#" color="foreground" >technik handlowiec</Link></li>
                            <li><Link href="#" color="foreground" >technik hotelarstwa</Link></li>
                            <li><Link href="#" color="foreground" >technik mechatronik</Link></li>
                            <li><Link href="#" color="foreground" >technik budownictwa</Link></li>
                            <li><Link href="#" color="foreground" >technik / mechanik pojazdów samochodowych</Link></li>
                            <li><Link href="#" color="foreground" >technik żywienia i usług gastronimicznych / kucharz</Link></li>
                            <li><Link href="#" color="foreground" >sprzedawca</Link></li>
                        </ul>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className=" flex gap-2 flex-col xl:w-[1000px] lg:w-[900px] mx-auto" id="zawody">
                <div className="grid gap-2 w-full md:grid-cols-3 xs:grid-cols-2 grid-cols-1">
                    <Professioncard name={"technik informatyk"} href={"/zawody/t-informatyk"} img={"/t-informatyk.jpg"}/>
                    <Professioncard name={"technik handlowiec"} href={"/zawody/t-handlowiec"} img={"/t-handlowiec.jpg"}/>
                    <Professioncard name={"technik hotelarstwa"} href={"/zawody/t-hotelarstwa"} img={"/t-hotelarstwa.jpg"}/>
                    <Professioncard name={"technik mechatronik"} href={"/zawody/t-mechatronik"} img={"/t-mechatronik.jpg"}/>
                    <Professioncard name={"technik budownictwa"} href={"/zawody/t-budownictwa"} img={"/t-budownictwa.jpg"}/>
                    <Professioncard name={"technik pojazdów samochodowych"} href={"/zawody/t-pojazdow-samochodowych"} img={"/t-pojazdow_samochodowych.jpg"}/>
                    <Professioncard name={"technik żywienia i usług gastronomicznych"} href={"/zawody/t-zywienia-i-uslug-gastronomicznych"} img={"/t-zywienia_i_uslug_gastro.jpg"}/>
                    <Professioncard name={"kucharz"} href={"/zawody/kucharz"} img={"/kucharz.jpg"}/>
                    <Professioncard name={"sprzedawca"} href={"/zawody/sprzedawca"} img={"/sprzedawca.jpg"}/>
                    <Professioncard name={"mechanik pojazdów samochodowych"} href={"/zawody/mechanik-pojazdow-samochodowych"} img={"/mechanik-pojazdow.jpg"}/>
                    <Professioncard name={"elektromechanik pojazdów samochodowych"} href={"/zawody/elektromechanik-pojazdow-samochodowych"} img={"/elektromechanik.jpg"}/>
                    <Professioncard name={"operator obrabiarek skrawających"} href={"/zawody/operator-obrabiarek-skrawajacych"} img={"/operator_obrabiarek_skawajacych.jpg"}/>
                    <Professioncard name={"klasa wielozawodowa"} href={"/zawody/klasa-wielozawodowa"} img={"/wielozawodowa.jpg"}/>
                    <Professioncard name={"magazynier - logistyk"} href={"/zawody/magazynier-logistyk"} img={"/zawody/magazynier-logistyk.jpeg"}/>
                </div>
            </div>
        </>
)}