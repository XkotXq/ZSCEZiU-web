"use client"
import {Navbar, NavbarBrand, Accordion, AccordionItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, NavbarContent, NavbarItem, Input, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import { MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Listofprofessions({ data }) {
    const [isMenuOpen, setIsMenuOpen]  = useState(false)
    const [newSearch, setNewSearch] = useState("")
    const router = useRouter()
    const goSearch = (e) => {
        e.preventDefault()
        if(newSearch !== "")
        router.push("/search?q=" + newSearch)
    }
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden"
                />
                <NavbarBrand>
                    <Link href="/" color="foreground">
                        <div className="flex flex-col">
                            <div className="whitespace-no-wrap text-center font-medium">
                                ZS-CEZiU

                            </div>
                            <div className="text-2xs whitespace-nowrap">
                                Górka Kopernika
                            </div>
                        </div>
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden md:flex gap-4" justify="center">
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                radius="sm"
                                endContent={<ChevronDownIcon className="w-5 h-5" />}
                                aria-label="główna"
                            >
                                główna
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu>
                        <DropdownItem href="/posty?p=1" aria-label="posty">
                            posty
                        </DropdownItem>
                        <DropdownItem href="/internat" aria-label="internat">
                            internat
                        </DropdownItem>
                        <DropdownItem href="https://uonetplus.vulcan.net.pl/powiatrawski" target="_blank" aria-label="e-dziennik">
                            e-dziennik
                        </DropdownItem>
                        <DropdownItem href="/kronika-szkoly" aria-label="historia szkoły">
                            historia szkoły
                        </DropdownItem>
                        <DropdownItem href="/kadra-kierownicza-gorki" aria-label="kadra kierownicza">
                            kadra kierownicza
                        </DropdownItem>
                        <DropdownItem href="/praktyki-zawodowe" aria-label="praktyki zawodowe">
                            praktyki zawodowe
                        </DropdownItem>
                        <DropdownItem href="https://ipapnlstrona.wixsite.com/strona" target="_blank" aria-label="inicjatywa patriotyczna">
                            inicjatywa patriotyczna
                        </DropdownItem>
                        <DropdownItem href="/ogloszenia-pracodawcow" aria-label="ogłoszenia pracodawców">
                            ogłoszenia pracodawców

                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem>
                    <Link href="/rekrutacja" color="foreground" aria-label="rekrutacja">
                        rekrutacja
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/serwis" color="foreground">
                        serwis uczniów
                    </Link>
                </NavbarItem>
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                endContent={<ChevronDownIcon className="w-5 h-5" />}
                                aria-label="zawody"
                            >
                                zawody
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu>
                        {data.map(item => (
                            <DropdownItem key={item.path} href={`/zawody/${item.path}`} aria-label={item.title}>
                                {item.title.toLowerCase()}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                endContent={<ChevronDownIcon className="w-5 h-5" />}
                                aria-label="więcej podstron"
                            >
                                więcej
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu>
                        <DropdownItem href="https://pl-pl.facebook.com/zsceziu" aria-label="aktualności" target="_blank">
                            aktualności
                        </DropdownItem>
                        <DropdownItem href="http://rawa-kopernik.pl/bip/" aria-label="BIP" target="_blank">
                            BIP
                        </DropdownItem>
                        <DropdownItem href="/kontakt" aria-label="kontakt">
                            kontakt
                        </DropdownItem>
                        <DropdownItem href="/rodo" aria-label="aktualności">
                            rodo
                        </DropdownItem>
                        <DropdownItem href="/rada-rodzicow" aria-label="BIP" target="_blank">
                            rada-rodziców
                        </DropdownItem>
                        <DropdownItem href="/deklaracja" aria-label="kontakt">
                            deklaracja dostępności
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
            <NavbarContent as="div" className="items-center" justify="end">
                <form onSubmit={goSearch}>
                    <Input
                        classNames={{
                            base: "max-w-full sm:max-w-[20rem] h-10",
                            mainWrapper: "h-full",
                            input: "text-small",
                            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                        }}
                        placeholder="wyszukaj..."
                        value={newSearch}
                        onValueChange={setNewSearch}
                        size="sm"
                        type="search"
                        startContent={<MagnifyingGlassIcon className="h-6 w-6 cursor-pointer" onClick={goSearch}/>}
                        aria-label="wyszukiwarka"
                    />
                </form>
            </NavbarContent>
            <NavbarMenu>
                <Accordion isCompact>
                    <AccordionItem title="główna">
                        <div className="flex flex-col gap-2">
                            <Link href="/posty" color="foreground" aria-label="posty">
                                posty
                            </Link>
                            <Link href="/internat" color="foreground" aria-label="internat">
                                internat
                            </Link>
                            <Link href="https://uonetplus.vulcan.net.pl/powiatrawski" target="_blank" color="foreground" aria-label="e-dziennik">
                                e-dziennik
                            </Link>
                            <Link href="/kronika-szkoly" color="foreground" aria-label="historia szkoły">
                                historia szkoły
                            </Link>
                            <Link href="/kadra-kierownicza-gorki" color="foreground" aria-label="kadra kierownicza">
                                kadra kierownicza
                            </Link>
                            <Link href="/praktyki-zawodowe" color="foreground" aria-label="praktyki zawodowe">
                                praktyki zawodowe
                            </Link>
                            <Link href="https://ipapnlstrona.wixsite.com/strona" target="_blank" color="foreground" aria-label="inicjatywa patriotyczna">
                                inicjatywa patriotyczna
                            </Link>
                            <Link href="/ogloszenia-pracodawcow" color="foreground" aria-label="ogłoszenia pracodawców">
                                ogłoszenia pracodawców
                            </Link>
                        </div>
                    </AccordionItem>
                    <AccordionItem title="zawody">
                        <div className="flex flex-col gap-2">
                            {data.map(item => (
                                <Link key={item.path + "mnav"} href={`/zawody/${item.path}`} color="foreground" aria-label={item.title}>
                                    {item.title.toLowerCase()}
                                </Link>
                            ))}
                        </div>
                    </AccordionItem>

                </Accordion>
                <NavbarMenuItem className="ml-2">
                    <Link href="/rekrutacja" color="foreground" aria-label="rekrutacja">
                        rekrutacja
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem className="ml-2">
                    <Link href="/serwis" color="foreground" aria-label="rekrutacja">
                        serwis uczniów
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem className="ml-2">
                    <Link href="https://pl-pl.facebook.com/zsceziu" target="_blank" color="foreground" aria-label="aktualności">
                        aktualności
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem className="ml-2">
                    <Link href="http://rawa-kopernik.pl/bip/" target="_blank" color="foreground" aria-label="BIP">
                        BIP
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem className="ml-2">
                    <Link href="/kontakt" color="foreground" aria-label="kontakt">
                        kontakt
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
            {/*<GetProfessions/>*/}
        </Navbar>
    )
}