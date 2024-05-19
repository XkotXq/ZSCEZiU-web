import {Accordion, AccordionItem, Card, Link} from "@nextui-org/react";

export default function CarouselWithPosts({ data }) {
    return (
    <div className="mx-auto max-w-2xl">
        <Accordion variant="splitted">
            <AccordionItem
                title="Dlaczego Zespół Szkół – Centrum Edukacji Zawodowej i Ustawicznej im M. Kopernika w Rawie Mazowieckiej?">
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
                    <li>możliwość kontynuowania nauki w liceum lub technikum uzupełniającym lub podjęcie pracy w
                        wyuczonym zawodzie
                    </li>
                    <li>łatwiejsze zdobycie pracy – odbyta praktyka zawodowa</li>
                    <li>poznanie różnych warunków pracy – liczne wycieczki do zakładów pracy</li>
                </ul>
            </AccordionItem>
            <AccordionItem title="Serwis uczniów">
                <ul className="list-disc ml-5">
                    <li><Link href="#" color="foreground">technik informatyk</Link></li>
                    <li><Link href="#" color="foreground">technik handlowiec</Link></li>
                    <li><Link href="#" color="foreground">technik hotelarstwa</Link></li>
                    <li><Link href="#" color="foreground">technik mechatronik</Link></li>
                    <li><Link href="#" color="foreground">technik budownictwa</Link></li>
                    <li><Link href="#" color="foreground">technik / mechanik pojazdów samochodowych</Link></li>
                    <li><Link href="#" color="foreground">technik żywienia i usług gastronimicznych / kucharz</Link>
                    </li>
                    <li><Link href="#" color="foreground">sprzedawca</Link></li>
                </ul>
            </AccordionItem>
            <AccordionItem title="Najnowsze posty">
                <div className="w-full flex gap-2 flex-col">
                    {data.map(post => (
                        <Link href={`/posty/${post.id}`} key={post.id} className="w-full basis-1">
                            <Card className="p-2 rounded-lg w-full flex gap-2 flex-row justify-between">
                                <div>{post.title}</div>
                                <div>{post.date}</div>
                            </Card>
                        </Link>

                    ))}
                </div>
            </AccordionItem>
        </Accordion>
    </div>
    )
}
