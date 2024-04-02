import Link from "next/link"
import Image from "next/image";
import { Card, Divider } from "@nextui-org/react";


export default function footer() {
    return (
        <Card className="w-full mt-2 flex text-custom-gray-400 gap-2 p-2 md:flex-row flex-col justify-between">
            <div className="flex gap-2">
                <Link href="https://www.facebook.com/zsceziu" target="_blank" className="hover:text-custom-gray-300">
                    Facebook
                </Link>
                <Link href="https://www.instagram.com/zsceziu_rawa_maz/" target="_blank" className="hover:text-custom-gray-300">
                    Instagram
                </Link>
                <Link href="https://www.tiktok.com/@gorkarawa" target="_blank" className="hover:text-custom-gray-300">
                    TikTok
                </Link>
                <Divider orientation="vertical" />
                <Link href="http://rawa-kopernik.pl/?p=1" target="_blank" className="hover:text-custom-gray-300">
                    Wersja archwalna strony
                </Link>
            </div>
            <div className="flex md:justify-end md:items-end items-center justify-center text-custom-gray-500 font-bold whitespace-nowrap">
                Górka Górą
            </div>
        </Card>
    )
}