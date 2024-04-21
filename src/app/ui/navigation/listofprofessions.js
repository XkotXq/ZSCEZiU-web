"use client"
import {DropdownItem, DropdownMenu} from "@nextui-org/react";

export default function Listofprofessions({ data }) {

    return (
        <DropdownMenu>
            {data.map(item => (
                <DropdownItem href={`/zawody/${item.path}`} aria-label={item.title}>
                    {item.title.toLowerCase()}
                </DropdownItem>
            ))}
        </DropdownMenu>
    )
}