"use client"
import { SessionProvider } from "next-auth/react";

export default function layout({ children }) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}