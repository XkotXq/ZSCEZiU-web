"use client";
import Linknav from "@/app/dashboard/ui/linknav";
import {PowerIcon, ChatBubbleLeftEllipsisIcon, HomeIcon, ShieldCheckIcon, WrenchScrewdriverIcon, DocumentIcon, UsersIcon } from "@heroicons/react/20/solid";
import { signOut } from "next-auth/react";
import { useSession } from 'next-auth/react';


export default function Sidenav() {
    const { data: session, status } = useSession();
    // const permisions = [
    //
    // ]
    return (
        <div className="p-2 md:h-full w-full flex gap-2 md:flex-col flex-row flex-wrap md:flex-nowrap">
            <div className="bg-custom-gray-900 rounded-md md:h-20 flex items-center gap-2 p-3">
                <WrenchScrewdriverIcon className="h-6 w-6 text-white" />
                <p className="sm:block hidden">
                dashboard
                </p>
            </div>
            {
                session && session.user.permission === "administrator" && (
                    <>
                        <Linknav href="/" value="konto" icon={HomeIcon} />
                        <Linknav href="/posts" value="posty" icon={ChatBubbleLeftEllipsisIcon} />
                        <Linknav href="/sites" value="podstrony" icon={DocumentIcon} />
                        <Linknav href="/users" value="konta" icon={UsersIcon} />
                    </>
                    )
            }
            {
                session && session.user.permission === "zAdministrator" && (
                    <>
                        <Linknav href="/" value="konto" icon={HomeIcon} />
                        <Linknav href="/service" value="serwis" icon={UsersIcon} />
                    </>
                    )
            }
            {session && (
                (session.user.permission === "uczenTi" ||
                    session.user.permission === "uczenTh" ||
                    session.user.permission === "uczenTha" ||
                    session.user.permission === "uczenTm" ||
                    session.user.permission === "uczenTb" ||
                    session.user.permission === "uczenTps" ||
                    session.user.permission === "uczenTz" ||
                    session.user.permission === "uczenS"
                ) && (
                    <>
                        <Linknav href="/" value="konto" icon={HomeIcon} />
                        <Linknav href="/service" value="serwis" icon={UsersIcon} />
                    </>
                )
            )}
            {session && (
                (session.user.permission === "adminTi" ||
                    session.user.permission === "adminTh" ||
                    session.user.permission === "adminTha" ||
                    session.user.permission === "adminTm" ||
                    session.user.permission === "adminTb" ||
                    session.user.permission === "adminTps" ||
                    session.user.permission === "adminTz" ||
                    session.user.permission === "adminS"
                ) && (
                    <>
                        <Linknav href="/" value="konto" icon={HomeIcon} />
                        <Linknav href="/serviceReview" value="przegląd" icon={ShieldCheckIcon} />
                        <Linknav href="/service" value="serwis" icon={UsersIcon} />
                    </>
                )
            )}


            <div className="bg-custom-gray-900 rounded-md md:h-full">
                <div className="p-2 text-center md:block hidden">
                    {session && (
                        <div>
                            <p>zalogowano jako: {session.user.username}</p>
                            <p>uprawniania: {session.user.permission}</p>
                        </div>
                    )}
                </div>
            </div>
            <button onClick={() => signOut()}>
            <div className="rounded-md bg-custom-gray-900 p-3 flex hover:bg-custom-gray-700 hover:text-custom-gray-100 gap-2 text-lg items-center">
                <PowerIcon className="h-6 w-6"/><p className="md:block hidden">Wyloguj</p>
            </div>
            </button>
        </div>
    )
}