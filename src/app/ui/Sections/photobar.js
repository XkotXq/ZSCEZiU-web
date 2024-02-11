"use client";
import Image from "next/image";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";

export default function PhotoBar({ path }) {
    return (
        <div className="w-full h-64 relative rounded-md overflow-hidden mt-2 text-center select-none">
            <Image src="/default-banner.jpg" fill loading="lazy" alt="baner" className="object-cover brightness-50"/>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-10 flex justify-center items-center flex-col">
                <Breadcrumbs className="bg-black p-2 rounded-xl bg-opacity-20 backdrop-blur-sm" size="lg" separator="/">
                    {path.map(pathItem => <BreadcrumbItem key={pathItem.name} href={pathItem.url}>{pathItem.name}</BreadcrumbItem>)}
                </Breadcrumbs>
            </div>

        </div>
    )
}