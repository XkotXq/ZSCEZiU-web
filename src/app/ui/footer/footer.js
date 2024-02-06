import Link from "next/link"
import Image from "next/image";

export default function footer() {
    return (
        <div className="w-full bg-custom-gray-900 rounded-lg mt-2 flex text-custom-gray-400 gap-2 p-2 md:flex-row flex-col">
            <Link href="https://www.facebook.com/zsceziu" target="_blank">
                <Image src="/facebookIcon.svg" width={50} height={50} alt="instagram icon"/>
            </Link>
            <Link href="https://www.instagram.com/zsceziu_rawa_maz/" target="_blank">
                <Image src="/instagramIcon.svg" width={50} height={50} alt="instagram icon"/>
            </Link>
            <div className="gap-3 flex flex-wrap !hover:text-custom-gray-200 bg-custom-gray-800 p-2 rounded-md">
                    <p className="font-bold">informacje</p>
                    <Link className="hover:text-custom-gray-200" href="/rodo">rodo</Link>
                    <Link className="hover:text-custom-gray-200" href="/rada-rodzicow">rada-rodziców</Link>
                    <Link className="hover:text-custom-gray-200" href="/deklaracja-dostepnosci">deklaracja dostępności</Link>
                </div>
            <div className="flex md:justify-end md:items-end items-center justify-center text-custom-gray-500 text-2xl font-bold whitespace-nowrap">
                Górka Górą
            </div>
        </div>
    )
}