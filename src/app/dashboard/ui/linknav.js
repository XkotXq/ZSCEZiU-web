import Link from "next/link";

export default function Linknav({href, value, icon}) {
    const Iconav = icon
    return (
        <Link href={"/dashboard" + href}>
            <div className="rounded-md bg-custom-gray-900 p-3 flex hover:bg-custom-gray-700 hover:text-custom-gray-100 gap-2 text-lg items-center">
                <Iconav className="h-6 w-6"/><p className="md:block hidden">{value}</p>
            </div>
        </Link>
    )
}