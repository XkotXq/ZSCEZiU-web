"use client"
import Image from "next/image";
import { Divider } from "@nextui-org/react";

export default function Welcomesection() {
    return (
        <div className="max-w-2xl sm:text-xl text-lg rounded-md flex justify-center flex-col items-center gap-2">
            <p className="text-center">
                Witaj na stronie Zespołu Szkół - Centrum Edukacji Zawodowej<br/>
                i Ustawicznej im. Mikołaja Kopernika w Rawie Mazowieckiej
            </p>

                <Divider/>
           <p>
               tel. 46 815 41 41
           </p>
            <p>
                96-200 Rawa Mazowiecka ul. Zwolińskiego 46
            </p>
            {/*<Image src="/logo.png" alt="szkola" width={200} height={200}/>*/}
        </div>
    )
}