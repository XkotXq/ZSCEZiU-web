"use client";
import Linknav from "@/app/dashboard/ui/linknav";
import {UsersIcon, PowerIcon, ChatBubbleLeftEllipsisIcon, HomeIcon, PhotoIcon, WrenchScrewdriverIcon} from "@heroicons/react/20/solid";
import { signOut } from "next-auth/react";

export default function Sidenav() {
    const nav = [
        {
            href: "/",
            value: "główna",
            icon: HomeIcon
        },
        {
            href: "/posts",
            value: "posty",
            icon: ChatBubbleLeftEllipsisIcon
        },
        {
            href: "/photos",
            value: "album",
            icon: PhotoIcon
        },
        {
            href: "/users",
            value: "konta",
            icon: UsersIcon
        }
    ]

    return (
        <div className="p-2 h-full flex gap-2 flex-col">
            <div className="bg-custom-gray-900 rounded-md h-20 flex items-center gap-2 p-3">
                <WrenchScrewdriverIcon className="h-6 w-6 text-white" />
                dashboard
            </div>
            {
                nav.map(navItem => (<Linknav key={navItem.href} href={navItem.href} value={navItem.value} icon={navItem.icon}/>))
            }
            <div className="bg-custom-gray-900 rounded-md h-full"></div>
            <button onClick={() => signOut()}>
            <div className="rounded-md bg-custom-gray-900 p-3 flex hover:bg-custom-gray-700 hover:text-custom-gray-100 gap-2 text-lg items-center">
                <PowerIcon className="h-6 w-6"/><p>Wyloguj</p>
            </div>
            </button>
        </div>
    )
}