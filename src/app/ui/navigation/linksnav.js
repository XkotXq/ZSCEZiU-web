"use client";
import { Bars3BottomLeftIcon } from "@heroicons/react/20/solid";
import Linknav from "../navigation/linknav";
import {useState} from "react";

export default function Linksnav() {
    const links = [
        {name: "główna", href:"/", moreLinks: [
                {name: "posty", href:"/posty"},
                {name: "inernat", href:"/internat"},
                {name: "e-dziennik", href:"https://uonetplus.vulcan.net.pl/powiatrawski", target: 'blank'},
                {name: "historia szkoły", href:"/kronika-szkoly"},
                {name: "kadra kierownicza", href:"/kadra-kierownicza-gorki"},
                {name: "praktyki zawodowe", href:"/praktyki-zawodowe"},
                {name: "inicjatywa patriotyczna", href:"https://ipapnlstrona.wixsite.com/strona", target: 'blank'},
                {name: "ogłoszenia pracodawców", href:"/ogloszenia-pracodawcow"},
            ]},
        {name: "rekrutacja", href:"/rekrutacja", moreLinks: []},
        {name: "zawody", href:"/#zawody", moreLinks: [
                {name: "technik informatyk", href:"/zawody/t-informatyk"},
                {name: "technik handlowiec", href:"/zawody/t-handlowiec"},
                {name: "technik hotelarstwa", href:"/zawody/t-hotelarstwa"},
                {name: "technik mechatronik", href:"/zawody/t-mechatronik"},
                {name: "technik budownictwa", href:"/zawody/t-budownictwa"},
                {name: "technik pojazdów samochodowych", href:"/zawody/t-pojazdow-samochodowych"},
                {name: "technik żywienia i usług gastronomicznych", href:"/zawody/t-zywienia-i-uslug-gastronomicznych"},
                {name: "kucharz", href:"/zawody/kucharz"},
                {name: "sprzedawca", href:"/zawody/sprzedawca"},
                {name: "mechanik pojazdów samochodowych", href:"/zawody/mechanik-pojazdow-samochodowych"},
                {name: "elektromechanik pojazdów samochodowych", href:"/zawody/elektromechanik-pojazdow-samochodowych"},
                {name: "operator obrabiarek skrawających", href:"/zawody/operator-obrabiarek-skrawajacych"},
                {name: "klasa wielozawodowa", href:"/zawody/klasa-wielozawodowa"},
            ]},
        {name: "aktualności", href:"https://pl-pl.facebook.com/zsceziu", moreLinks: [], target: 'blank'},
        {name: "galeria", href:"/galeria", moreLinks: []},
        {name: "BIP", href:"http://rawa-kopernik.pl/bip/", moreLinks: [], target: 'blank'},
        {name: "kontakt", href:"/kontakt",  moreLinks: []}
    ]
    const [openNav, setOpenNav] = useState(false)
    return (
        <div className="md:grow bg-custom-gray-900 rounded-lg flex items-center justify-end p-2">
            <div className="flex md:hidden">
                <Bars3BottomLeftIcon className="h-8 w-8 text-custom-gray-400" />
            </div>
            <nav className=" md:flex hidden items-center w-full justify-end gap-3">
            {
                links.map(link => (<Linknav key={link.name} name={link.name} href={link.href} moreLinks={link.moreLinks} target={link.target ? link.target : null} />))
            }
            </nav>

            {/*<XMarkIcon className="h-8 w-8 text-gray-500" />*/}
        </div>
    )
}