import Image from "next/image";

export default function Welcomesection() {
    return (
        <div className="max-w-2xl sm:text-3xl text-xl mx-auto rounded-md flex justify-center flex-col items-center">
            <p className="text-center">
                Witaj na stronie Zespołu Szkół - Centrum Edukacji Zawodowej i Ustawicznej im. Mikołaja Kopernika w Rawie Mazowieckiej
                <br/>tel. 46 815 41 41
            </p>
            <Image src="/logo.png" alt="szkola" width={200} height={200}/>
        </div>
    )
}