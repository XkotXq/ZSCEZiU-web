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
        } else {
            setSearchActive(!searchActive);
        }
    };
    const handleCloseSearch = () => {
        setSearchActive(false)
        setNewSearch("")
    }

    return (
        <div className={clsx("bg-custom-gray-900 flex justify-start items-center p-3 transition-all rounded-lg gap-2 md:w-14 w-full", {
            "md:w-full": searchActive === true
        })}>

            <div onClick={handleSearchBtn} className="cursor-pointer">
            <MagnifyingGlassIcon className="h-8 w-8 text-custom-gray-400" />
            </div>
            <div className={clsx(" w-full opacity-100 transition-all overflow-hidden flex items-center gap-2", {
                "opacity-0": searchActive === false
            })}>
                <form onSubmit={handleSearchBtn} className="w-full">
            <input
                type="text"
                placeholder="wyszukaj..."
                maxLength={512}
                value={newSearch}
                onChange={(e) => setNewSearch(e.target.value)}
                readOnly={!searchActive}
                className="w-full border-none bg-custom-gray-700 rounded-md p-2 focus:outline-0"
            />
                </form>
                <XMarkIcon className="h-8 w-8 text-custom-gray-400" onClick={handleCloseSearch} />
            </div>

        </div>
    )
}