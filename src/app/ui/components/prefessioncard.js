import Link from "next/link";
import Image from "next/image";

export default function Professioncard({ name, href, img}) {
    return (
        <div className="flex gap-2 flex-col max-w-[320px] mx-auto">
            <div className="bg-custom-gray-800 p-2 rounded-md">
                <div className="relative w-full"><Image src={img} width={500} height={224} className="rounded-md" alt={name} style={{
                    objectFit: 'cover',
                }}/></div>
                <div className="text-center p-2 text-l h-14 flex justify-center items-center">{name}</div>
            </div>
            <Link href={href}><div className="bg-custom-gray-800 p-3 font-xl rounded-md w-full hover:bg-custom-gray-700 text-center">WYBIERZ</div></Link>
        </div>
    )
}