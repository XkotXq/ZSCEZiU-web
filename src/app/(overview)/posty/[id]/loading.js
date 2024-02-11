import PhotoBar from "@/app/ui/Sections/photobar";
import {Skeleton} from "@nextui-org/react";

export default function loading() {
    const path = [
        {
            name: "główna",
            url: "/",
        },
        {
            name: "posty",
            url: "/posty"
        },
        {
            name: "Ładowanie..."
        }
    ]
    return (
        <div className="w-full h-full">
            <PhotoBar path={path} />
            <div className="max-w-4xl mx-auto flex flex-col gap-2 py-5">
                <Skeleton className="ml-auto rounded-md w-48 h-6 "/>
                <Skeleton className="rounded-md h-10 w-1/2"/>
                <Skeleton className="rounded-md h-6 w-10/12"/>
                <Skeleton className="rounded-md h-6 w-8/12"/>
                <Skeleton className="rounded-md h-6 w-9/12"/>
                <Skeleton className="rounded-md h-6 w-11/12"/>
                <Skeleton className="rounded-md h-6 w-7/12"/>
                <Skeleton className="rounded-md mx-auto w-2/3 h-64"/>
            </div>
        </div>
    )
}