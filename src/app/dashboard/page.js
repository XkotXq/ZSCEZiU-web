"use client"
import { Card, CardHeader, CardBody, Input, Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";
export default function page () {
    const { data: session, status } = useSession();
    return (
        <div className="flex flex-col gap-2">
            <Card className="w-full p-3 flex justify-between flex-row items-center">
                <h1 className="md:text-3xl text-xl">Witaj <strong>{session ? session.user.username : "Ładowanie..."}</strong></h1>
                <h2 className="md:text-2xl text-lg text-custom-gray-500">konto: {session ? session.user.permission : "Ładowanie..."}</h2>
            </Card>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
                <Card>
                    <CardHeader className="md:text-2xl text-lg">
                        Witaj w panelu {session?.user.permission.includes("administrator") ? "administratora" : (session?.user.permission.includes("admin") ? "admina" : (session?.user.permission.includes("uczen") ? "ucznia" : "ładowanie..."))}!
                    </CardHeader>
                    <CardBody>
                        <p className="md:text-md text-sm">
                        {session?.user.permission.includes("administrator") ? "Tutaj możesz zarządzać wszystkim, co dotyczy treści i użytkowników na naszej stronie. Możesz tworzyć, edytować i usuwać posty, dostosowywać podstrony oraz zarządzać użytkownikami, decydując, kto może tworzyć treści dla różnych kategorii zawodowych." : (session?.user.permission.includes("admin") ? "tym miejscu możesz zarządzać treścią, które umożliwia adminom kontrolę nad przysłanymi postami oraz dostęp do pełnej listy wszystkich postów." : (session?.user.permission.includes("uczen") ? 'w tym miejscu możesz dodawać posty, które potem muszą zostać zaakceptowane przez admina. Jeżeli admin odrzuci post będziesz mógł poprawić i odesłać w zakładce "poprawa" ' : "ładowanie..."))}
                        </p>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <h1 className="md:text-2xl text-lg">Resetowanie hasła</h1>
                    </CardHeader>
                    <CardBody className="flex gap-2 flex-col">
                        <Input label="stare hasło" />
                        <Input label="nowe hasło" />
                        <Input label="nowe hasło" />
                        <Button>zmień hasło</Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}