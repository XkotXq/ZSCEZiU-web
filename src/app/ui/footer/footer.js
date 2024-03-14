import Link from "next/link"
import Image from "next/image";
import { Card } from "@nextui-org/react";


export default function footer() {
    return (
        <Card className="w-full mt-2 flex text-custom-gray-400 gap-2 p-2 md:flex-row flex-col">
            <div className="flex flex-col">
                <Link href="https://www.facebook.com/zsceziu" target="_blank">
                    facebook
                </Link>
                <Link href="https://www.instagram.com/zsceziu_rawa_maz/" target="_blank">
                    instagram
                </Link>
            </div>
            <div className="flex md:justify-end md:items-end items-center justify-center text-custom-gray-500 text-2xl font-bold whitespace-nowrap">
                Górka Górą
            </div>
        </Card>
    )
}