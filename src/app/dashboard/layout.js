"use client"
import Sidenav from "@/app/dashboard/ui/sidenav";
import "./ui/scrollstyle.css"
import { SessionProvider } from "next-auth/react";

export default function DashboardLayout({ children }) {
    return (
        <SessionProvider>
        <div className="flex max-w-screen-2xl h-screen mx-auto">
                <div className="w-52">
                    <Sidenav/>
                </div>
                <div className="p-2 overflow-y-scroll w-full">
                    {children}
                </div>
        </div>
        </SessionProvider>
    )
}