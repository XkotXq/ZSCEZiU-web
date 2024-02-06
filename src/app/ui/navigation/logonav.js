import Link from "next/link";

export default function Logonav() {
    return (
            <Link href="/" className="bg-custom-gray-900 text-base xs:flex hidden flex-col px-2 md:w-48 w-auto justify-center items-center rounded-lg">
                <div className="whitespace-no-wrap text-center">
                ZS-CEZiU

                </div>
                <div className="text-2xs whitespace-nowrap">
                    Górka Kopernika
                </div>
            </Link>
    )
}