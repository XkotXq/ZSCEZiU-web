"use client"
import Link from "next/link";
import Image from "next/image";
import { Card } from "@nextui-org/react";
export default function Professioncard({ name, href, img}) {
    return (
        <div className="flex gap-2 flex-col max-w-[320px] mx-auto mb-3">
            <Card className="p-2">
                <div className="relative w-full"><Image src={img} width={304} height={186} className="rounded-md" alt={name} style={{
                    objectFit: 'cover',
                }}/></div>
                <div className="text-center p-2 text-l h-14 flex justify-center items-center">{name}</div>
            </Card>
            <Link href={href}><Card isHoverable className="p-3 font-xl w-full text-center">WYBIERZ</Card></Link>
        </div>
    )
}