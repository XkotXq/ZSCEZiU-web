"use client";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function Searchnav() {
    const router = useRouter();
    const [searchActive, setSearchActive] = useState(false)
    const [newSearch, setNewSearch] = useState("");
    const handleSearchBtn = (e) => {
        e.preventDefault()
        if (newSearch !== "") {
            router.push(`/search?q=${newSearch}`);
        }
    };

    return (
        <div className="bg-custom-gray-900 flex justify-start items-center p-3 transition-all rounded-lg gap-2 md:w-14 w-full">

            <div onClick={handleSearchBtn} className="cursor-pointer">
            <MagnifyingGlassIcon className="h-8 w-8 text-custom-gray-400" />
            </div>
            <div className="w-full opacity-100 transition-all overflow-hidden flex items-center gap-2">
                <form onSubmit={handleSearchBtn} className="w-full">
            <input
                type="text"
                placeholder="wyszukaj..."
                maxLength={512}
                value={newSearch}
                onChange={(e) => setNewSearch(e.target.value)}
                className="w-full border-none bg-custom-gray-700 rounded-md p-2 focus:outline-0"
            />
                </form>
            </div>

        </div>
    )
}