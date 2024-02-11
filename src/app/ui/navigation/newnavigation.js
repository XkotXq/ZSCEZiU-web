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
                        <DropdownItem href="/posty" aria-label="posty">
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
                        <DropdownItem href="/zawody/t-informatyk" aria-label="technik informatyk">
                            technik informatyk
                        </DropdownItem>
                        <DropdownItem href="/zawody/t-handlowiec" aria-label="technik handlowiec">
                            technik handlowiec
                        </DropdownItem>
                        <DropdownItem href="/zawody/t-hotelarstwa" aria-label="techik hotelarstwa">
                            technik hotelarstwa
                        </DropdownItem>
                        <DropdownItem href="/zawody/t-mechatronik" aria-label="technik mechatronik">
                            technik mechatronik
                        </DropdownItem>
                        <DropdownItem href="/zawody/t-budownictwa" aria-label="technik budownictwa">
                            technik budownictwa
                        </DropdownItem>
                        <DropdownItem href="/zawody//t-pojazdow-samochodowych" aria-label="technik pojazdów samochodowych">
                            technik pojazdów samochodowych
                        </DropdownItem>
                        <DropdownItem href="/zawody/t-zywienia-i-uslug-gastronomicznych" aria-label="technik żywienia i suług gastronomicznych">
                            technik żywienia i usług gastronomicznych
                        </DropdownItem>
                        <DropdownItem href="/zawody/kucharz" aria-label="kucharz">
                            kucharz
                        </DropdownItem>
                        <DropdownItem href="/zawody/sprzedawca" aria-label="sprzedawca">
                            sprzedawca
                        </DropdownItem>
                        <DropdownItem href="/zawody/mechanik-pojazdow-samochodowych" aria-label="mechanik pojazdów samochodowych">
                            mechanik pojazdów samochodowych
                        </DropdownItem>
                        <DropdownItem href="/zawody/elektromechanik-pojazdow-samochodowych" aria-label="elektromechanik pojazdów samochodowych">
                            elektromechanik pojazdów samochodowych
                        </DropdownItem>
                        <DropdownItem href="/zawody/operator-obrabiarek-skrawajacych" aria-label="operator obrabiarek skrawających">
                            operator obrabiarek skrawających
                        </DropdownItem>
                        <DropdownItem href="/zawody/klasa-wielozawodowa" aria-label="klasa wielzawodowa">
                            klasa wielozawodowa
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem>
                    <Link href="https://pl-pl.facebook.com/zsceziu" color="foreground" target="_blank" aria-label="aktualności">
                        aktualności
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/galeria" color="foreground" aria-label=" galeria">
                        galeria
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="http://rawa-kopernik.pl/bip/" color="foreground" aria-label="BIP">
                        BIP
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/kontakt" color="foreground" aria-label="kontakt">
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
                                <Link href="/zawody/t-informatyk" color="foreground" aria-label="technik informatyk">
                                    technik informatyk
                                </Link>
                                <Link href="/zawody/t-handlowiec" color="foreground" aria-label="technik handlowiec">
                                    technik handlowiec
                                </Link>
                                <Link href="/zawody/t-hotelarstwa" color="foreground" aria-label="technik hotelarstwa">
                                    technik hotelarstwa
                                </Link>
                                <Link href="/zawody/t-mechatronik" color="foreground" aria-label="technik mechatronik">
                                    technik mechatronik
                                </Link>
                                <Link href="/zawody/t-budownictwa" color="foreground" aria-label="technik budownictwa">
                                    technik budownictwa
                                </Link>
                                <Link href="/zawody/t-pojazdow-samochodowych" color="foreground" aria-label="technik pojazdów samochodowych">
                                    technik pojazdów samochodowych
                                </Link>
                                <Link href="/zawody/zywienia-i-uslug-gastronomicznych" color="foreground" aria-label="technik żywienia i usług gastronomicznych">
                                    technik żywienia i usług gastronomicznych
                                </Link>
                                <Link href="/zawody/kucharz" color="foreground" aria-label="kucharz">
                                    kucharz
                                </Link>
                                <Link href="/zawody/sprzedawca" color="foreground" aria-label="sprzedawca">
                                    sprzedawca
                                </Link>
                                <Link href="/zawody/sprzedawca" color="foreground" aria-label="mechanik pojazdów samochowowych">
                                    mechanik pojazdów samochodowych
                                </Link>
                                <Link href="/zawody/elektromechanik-pojazdow-samochodowych" color="foreground" aria-label="elektromechanik pojazdów samochowowych">
                                    elektormechanik pojazdów samochodowych
                                </Link>
                                <Link href="/zawody/operator-obrabiarek-skrawajacych" color="foreground" aria-label="operator obrabiarek skrawających">
                                    operator obrabiarek skrawających
                                </Link>
                                <Link href="/zawody/klasa-wielozawodowa" color="foreground" aria-label="klasa wielozawodowa">
                                    klasa wielozawodowa
                                </Link>
                            </div>
                        </AccordionItem>

                    </Accordion>
                    <NavbarMenuItem className="ml-2">
                        <Link href="/rekrutacja" color="foreground" aria-label="rekrutacja">
                            rekrutacja
                        </Link>
                    </NavbarMenuItem>
                <NavbarMenuItem className="ml-2">
                        <Link href="https://pl-pl.facebook.com/zsceziu" target="_blank" color="foreground" aria-label="aktualności">
                            aktualności
                        </Link>
                    </NavbarMenuItem>
                <NavbarMenuItem className="ml-2">
                        <Link href="/galeria" color="foreground" aria-label="galeria">
                            galeria
                        </Link>
                    </NavbarMenuItem>
                <NavbarMenuItem className="ml-2">
                        <Link href="/http://rawa-kopernik.pl/bip/" target="_blank" color="foreground" aria-label="BIP">
                            BIP
                        </Link>
                    </NavbarMenuItem>
                <NavbarMenuItem className="ml-2">
                        <Link href="/kontakt" color="foreground" aria-label="kontakt">
                            kontakt
                        </Link>
                    </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    )
}