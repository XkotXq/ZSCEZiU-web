import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import Cardservicemedia from "../../ui/components/cardservicemedia";
export default function page() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="my-5 text-lg">Wybierz serwis danego zawodu</h1>
        <div className="grid gap-2 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1">
            <Cardservicemedia src="/default-banner.jpg" value="informatyk" href="informatyk"/>
            <Cardservicemedia src="/default-banner.jpg" value="handlowiec" href="#"/>
            <Cardservicemedia src="/default-banner.jpg" value="hotelarz" href="#"/>
            <Cardservicemedia src="/default-banner.jpg" value="mechatronik" href="#"/>
            <Cardservicemedia src="/default-banner.jpg" value="budowniczy" href="/budowniczy"/>
            <Cardservicemedia src="/default-banner.jpg" value="technik / mechanik pojazdów samochodowych" href="#"/>
            <Cardservicemedia src="/default-banner.jpg" value="technik żywienia i usług gastronomicznych / kucharz" href="#"/>
            <Cardservicemedia src="/default-banner.jpg" value="sprzedawca" href="#"/>
        </div>
        </div>

    )
}