"use client"
import Professioncard from "../components/prefessioncard";
import {Accordion, AccordionItem, Link} from "@nextui-org/react";
import CarouselWithPosts from "../components/post/carouselWithPosts";
export default function Professionsection() {
    return (
        <>


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
                    <Professioncard name={"NOWY ZAWÓD magazynier - logistyk"} href={"/zawody/magazynier-logistyk"} img={"/magazynier.jpg"}/>
                </div>
            </div>
        </>
)}