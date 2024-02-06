"use client";
import { useSearchParams } from "next/navigation";
import PhotoBar from "@/app/ui/Sections/photobar";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Input, Image} from "@nextui-org/react";
export default function page() {
    const searchParams = useSearchParams()
    const path = [
        {
            name: "główna",
            url: "/"
        },
        {
            name: "wyszukaj",
            url: "/search"
        },
        {
            name: searchParams.get("q")
        }
    ]
    return (
        <div>
            <PhotoBar path={path}/>
            <div>
                <div>
                    wyszukanie dla {searchParams.get("q")}
                </div>
                <Card className="max-w-[400px]">
                    <CardHeader>
                        Koło szachowe
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        Od nowego roku rozpoczynamy zapisy do szkolnego koła szachowego, Zapraszamy!!
                    </CardBody>
                    <Divider/>
                    <CardFooter>
                        <Link className="text-white flex gap-2 cursor-pointer">
                            Czytaj dalej
                            <ArrowLongRightIcon className="h-6 w-6" />
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}