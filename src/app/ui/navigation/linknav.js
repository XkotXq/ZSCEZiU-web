"use client";
import Link from "next/link"
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { usePathname} from "next/navigation";
import clsx from "clsx";

export default function Linknav({ name, href, moreLinks, target }) {
    const pathname = usePathname()
    return (
        <div className="relative group/hover">
            <div className={clsx("flex hover:text-custom-gray-200 focus:text-custom-gray-200", {
                "text-custom-gray-200": pathname === href
            })}>
                {!target ?
                    <Link  key={name} href={href} className="peer/focus focus:text-custom-gray-200">{name}</Link> :
                    <a href={href} target={target} className="focus:text-custom-gray-200">{name}</a>
                }
                {moreLinks.length > 0 && <ChevronDownIcon className="h-6 w-6" />}
                {moreLinks.length > 0 ? (
                    <div className="absolute top-full bg-custom-gray-800 -left-2 rounded-lg p-2 hidden text-white group-hover/hover:flex peer-focus/focus:flex focus-within:flex flex-col w-52 text-s gap-2">
                        {moreLinks.map((link) =>
                            !link.target ? (
                                <Link
                                    className={clsx("hover:text-custom-gray-200 focus:text-custom-gray-200", {
                                        "text-custom-gray-200": pathname === link.href,
                                    })}
                                    key={link.name}
                                    href={link.href}
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <a href={link.href} className="hover:text-custom-gray-200 focus:text-custom-gray-200" target={link.target} key={link.name}>
                                    {link.name}
                                </a>
                            )
                        )}
                    </div>
                ) : null}

            </div>

        </div>
    )
}