"use client"
import Sidenav from "../dashboard/ui/sidenav";
import "./ui/scrollstyle.css"
import { SessionProvider } from "next-auth/react";

export default function DashboardLayout({ children }) {
    return (
        <SessionProvider>
        <div className="flex max-w-screen-2xl h-screen mx-auto md:flex-row flex-col">
                <div className="md:w-52 w-full">
                    <Sidenav/>
                </div>
                <div className="p-2 overflow-y-scroll w-full">
                    {children}
                </div>
        </div>
        </SessionProvider>
    )
}