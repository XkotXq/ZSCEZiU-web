import {Card, Button, Link} from "@nextui-org/react";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function page() {
    return (
        <div className="flex flex-col gap-2">
            <Card className="w-full p-3 flex justify-between flex-row items-center">
                <h1 className="md:text-3xl text-xl">Wszystkie aktywne posty</h1>
                <Button as={Link} href="/dashboard/service" endContent={<PlusIcon className="w-6 h-6"/>} color="success">Stwórz post</Button>
            </Card>
            <div></div>
        </div>
    )
}