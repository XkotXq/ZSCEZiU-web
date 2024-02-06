"use client"
import {Navbar, NavbarBrand, Accordion, AccordionItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, NavbarContent, NavbarItem, Input, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import { MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Newnavigation() {
    const [isMenuOpen, setIsMenuOpen]  = useState(false)
    const [newSearch, setNewSearch] = useState("")
    const router = useRouter()
    const goSearch = (e) => {
        e.preventDefault()
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
                            <div className="whitespace-no-wrap text-center">
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
                            >
                                główna
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu>
                        <DropdownItem href="/posty">
                                posty
                        </DropdownItem>
                        <DropdownItem href="/internat">
                            internat
                        </DropdownItem>
                        <DropdownItem href="https://uonetplus.vulcan.net.pl/powiatrawski" target="_blank">
                            e-dziennik
                        </DropdownItem>
                        <DropdownItem href="/kronika-szkoly">
                            historia szkoły
                        </DropdownItem>
                        <DropdownItem href="/kadra-kierownicza-gorki">
                            kadra kierownicza
                        </DropdownItem>
                        <DropdownItem href="/praktyki-zawodowe">
                            praktyki zawodowe
                        </DropdownItem>
                        <DropdownItem href="https://ipapnlstrona.wixsite.com/strona" target="_blank">
                            inicjatywa patriotyczna
                        </DropdownItem>
                        <DropdownItem href="/ogloszenia-pracodawcow">
                            ogłoszenia pracodawców

                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem>
                    <Link href="/rekrutacja" color="foreground">
                    rekrutacja
                    </Link>
                </NavbarItem>
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                endContent={<ChevronDownIcon className="w-5 h-5" />}
                            >
                                zawody
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu>
                        <DropdownItem href="/zawody/t-informatyk">
                            technik informatyk
                        </DropdownItem>
                        <DropdownItem href="/zawody/t-handlowiec">
                            technik handlowiec
                        </DropdownItem>
                        <DropdownItem href="/zawody/t-hotelarstwa">
                            technik hotelarstwa
                        </DropdownItem>
                        <DropdownItem href="/zawody/t-mechatronik">
                            technik mechatronik
                        </DropdownItem>
                        <DropdownItem href="/zawody/t-budownictwa">
                            technik budownictwa
                        </DropdownItem>
                        <DropdownItem href="/zawody//t-pojazdow-samochodowych">
                            technik pojazdów samochodowych
                        </DropdownItem>
                        <DropdownItem href="/zawody/t-zywienia-i-uslug-gastronomicznych">
                            technik żywienia i usług gastronomicznych
                        </DropdownItem>
                        <DropdownItem href="/zawody/kucharz">
                            kucharz
                        </DropdownItem>
                        <DropdownItem href="/zawody/sprzedawca">
                            sprzedawca
                        </DropdownItem>
                        <DropdownItem href="/zawody/mechanik-pojazdow-samochodowych">
                            mechanik pojazdów samochodowych
                        </DropdownItem>
                        <DropdownItem href="/zawody/elektromechanik-pojazdow-samochodowych">
                            elektromechanik pojazdów samochodowych
                        </DropdownItem>
                        <DropdownItem href="/zawody/operator-obrabiarek-skrawajacych">
                            operator obrabiarek skrawających
                        </DropdownItem>
                        <DropdownItem href="/zawody/klasa-wielozawodowa">
                            klasa wielozawodowa
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem>
                    <Link href="https://pl-pl.facebook.com/zsceziu" color="foreground" target="_blank">
                        aktualności
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/galeria" color="foreground">
                        galeria
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="http://rawa-kopernik.pl/bip/" color="foreground">
                        BIP
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/kontakt" color="foreground">
                        kontakt
                    </Link>
                </NavbarItem>
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
                    />
                </form>
            </NavbarContent>
            <NavbarMenu>
                    <Accordion isCompact>
                        <AccordionItem title="główna">
                            <div className="flex flex-col gap-2">
                            <Link href="/posty" color="foreground">
                                posty
                            </Link>
                            <Link href="/internat" color="foreground">
                                internat
                            </Link>
                            <Link href="https://uonetplus.vulcan.net.pl/powiatrawski" target="_blank" color="foreground">
                                e-dziennik
                            </Link>
                            <Link href="/kronika-szkoly" color="foreground">
                                historia szkoły
                            </Link>
                            <Link href="/kadra-kierownicza-gorki" color="foreground">
                                kadra kierownicza
                            </Link>
                            <Link href="/praktyki-zawodowe" color="foreground">
                                praktyki zawodowe
                            </Link>
                            <Link href="https://ipapnlstrona.wixsite.com/strona" target="_blank" color="foreground">
                                inicjatywa patriotyczna
                            </Link>
                            <Link href="/ogloszenia-pracodawcow" color="foreground">
                                ogłoszenia pracodawców
                            </Link>
                            </div>
                        </AccordionItem>
                        <AccordionItem title="zawody">
                            <div className="flex flex-col gap-2">
                                <Link href="#" color="foreground">
                                    technik informatyk
                                </Link>
                                <Link href="#" color="foreground">
                                    technik handlowiec
                                </Link>
                                <Link href="#" color="foreground">
                                    technik hotelarstwa
                                </Link>
                                <Link href="#" color="foreground">
                                    technik mechatronik
                                </Link>
                                <Link href="#" color="foreground">
                                    technik budownictwa
                                </Link>
                                <Link href="#" color="foreground">
                                    technik pojazdów samochodowych
                                </Link>
                                <Link href="#" color="foreground">
                                    technik żywienia i usług gastronomicznych
                                </Link>
                                <Link href="#" color="foreground">
                                    kucharz
                                </Link>
                                <Link href="#" color="foreground">
                                    sprzedawca
                                </Link>
                            </div>
                        </AccordionItem>

                    </Accordion>
                    <NavbarMenuItem className="ml-2">
                        <Link href="/rekrutacja" color="foreground">
                            rekrutacja
                        </Link>
                    </NavbarMenuItem>
                <NavbarMenuItem className="ml-2">
                        <Link href="https://pl-pl.facebook.com/zsceziu" target="_blank" color="foreground">
                            aktualności
                        </Link>
                    </NavbarMenuItem>
                <NavbarMenuItem className="ml-2">
                        <Link href="/galeria" color="foreground">
                            galeria
                        </Link>
                    </NavbarMenuItem>
                <NavbarMenuItem className="ml-2">
                        <Link href="/http://rawa-kopernik.pl/bip/" target="_blank" color="foreground">
                            BIP
                        </Link>
                    </NavbarMenuItem>
                <NavbarMenuItem className="ml-2">
                        <Link href="/kontakt" color="foreground">
                            kontakt
                        </Link>
                    </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    )
}