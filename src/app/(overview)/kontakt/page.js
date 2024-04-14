import PhotoBar from "../../ui/Sections/photobar";

export default function Page() {
    const path = [
        {
            name: "główna",
            url: "/",
        },
        {
            name: "kontakt",
        }
    ]
    return (
        <div className="text-custom-gray-300 w-full">
            <PhotoBar path={path}/>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold py-2 text-custom-gray-200">96-200 Rawa Mazowiecka ul. Zwolińskiego 46</h2>
                <p className="my-2">Sekretariat szkoły jest czynny codzienie w godzinach <b>8:00 - 15:00</b></p>
                <p className="my-2">podstawowy telefon szkoły: <b>046 815 41 41</b></p>
                <p className="my-2">telefon kierownika gospodarczego: <b>046 815 46 43</b></p>
                <p className="my-2">podstawowy e-mail szkoły: <b>zsceziu@hoga.pl</b></p>
                <p className="my-2">e-mail dyrektora szkoły Radosław Kaźmierczak: <b>rk@rawa-kopernik.pl</b></p>
                <p className="my-2">e-mail wicedyrektora szkoły Anna Jagniątkowska: <b>aj@rawa-kopernik.pl</b></p>
                <p className="my-2">e-mail wicedyrektora szkoły Krzysztof Gruchała: <b>kg@rawa-kopernik.pl</b></p>
                <p className="my-2">e-mail administratora www: <b>admin@rawa-kopernik.pl</b></p>

            </div>
        </div>
    )
}