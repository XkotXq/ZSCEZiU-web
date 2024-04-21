"use client"
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Card,
    CardHeader,
    CardBody,
    Input,
    Autocomplete,
    AutocompleteSection,
    AutocompleteItem,
    Button,
    PopoverTrigger, PopoverContent, Popover
} from "@nextui-org/react";
import { EyeIcon, EyeSlashIcon, ClipboardIcon, TrashIcon } from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import UnauthorizedError from "../ui/UnauthorizedError";
import { useEffect, useState } from "react";
import secureRandomPassword from 'secure-random-password';
export default function page() {
    const [users, setUsers] = useState([])
    const [error, setError] = useState("")
    const [isPending, setIsPending] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [newAccountType, setNewAccountType] = useState("")
    const [newAccountLogin, setNewAccountLogin] = useState("")
    const [newAccountEmail, setNewAccountEmail] = useState("")
    const [newAccountPassword, setNewAccountPassword] = useState("")

    const getUsers = async () => {
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
            const res = await fetch(`${apiUrl}/api/users`, {
                method: "GET"
            })
            if (res.ok) {
                const gusers = await res.json()
                if (gusers) {
                    setUsers(gusers.users)
                }
                console.log(users)
            }
        } catch (error) {
            console.log("Błąd ładowania użytkowników: ", error)
        }
    }
    const removeUser = async (id) => {
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
            const response = await fetch(`${apiUrl}/api/users?id=${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error("Wystąpił problem podczas usuwania konta")
            }
            const updatedUsers = users.filter(user => user.id !== id)
            setUsers(updatedUsers)
        } catch (e) {
            console.log("Błąd usuwania konta", e)
        }
    }
    useEffect(() => {
        getUsers()
    }, [])
    const toggleVisibility = () => setIsVisible(!isVisible);
    const { data: session, status } = useSession();
    const passwordGenarate = () => {
        const password = secureRandomPassword.randomPassword({
            length: 16,
            characters: secureRandomPassword.lowercase + secureRandomPassword.uppercase + secureRandomPassword.digits + "!@#$*"
        });
        setNewAccountPassword(password)
    }
    const createUser = async (e) => {
        e.preventDefault()
        if (!newAccountType || !newAccountLogin || !newAccountPassword) {
          setError("Wszystkie pola muszą być wypełnione");
          return;
        }
        try {
            setError("");
            setIsPending(true)
            const newAccountUser = {
                username: newAccountLogin,
                password: newAccountPassword,
                permission: newAccountType,
                email: newAccountEmail
            }
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(newAccountUser)
            })
            if(res.ok) {
                setIsPending(false)
                setNewAccountLogin("")
                setNewAccountEmail("")
                setNewAccountPassword("")
                setNewAccountType("")
                setUsers(users.concat(newAccountUser))
            } else {
                const errorData = await res.json()
                setError(errorData.message)
                console.log("Coś poszło nie tak.");
                setIsPending(false)
            }
        } catch (err) {
            setIsPending(false)
            setError("Coś poszło nie tak")
        }

    }

    if (session && session?.user.permission === "administrator") {
        return (
          <div className="flex flex-col gap-2">
            <Card className="flex w-full items-center justify-between flex-row p-3">
              <div>
                <h1 className="text-3xl">Zarządzanie kontami</h1>
              </div>
            </Card>
            <div>
              <Card>
                <CardHeader>
                  <div className="flex justify-between w-full items-center">
                    <h1 className="text-2xl">Tworzenie nowego konta</h1>
                    <div className="text-custom-gray-500 flex flex-col items-end">
                      {newAccountLogin && (
                        <span>nazwa użytkownika: {newAccountLogin}</span>
                      )}
                      {newAccountType && (
                        <span>uprawnienia: {newAccountType}</span>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <form className="flex flex-col gap-2">
                    <Input
                      type="text"
                      label="nazwa użytkownika"
                      isRequired
                      maxLength={30}
                      minLength={3}
                      value={newAccountLogin}
                      onChange={(e) => setNewAccountLogin(e.target.value)}
                    />
                    <Input
                      type="email"
                      label="email"
                      isRequired
                      maxLength={100}
                      minLength={5}
                      value={newAccountEmail}
                      onChange={(e) => setNewAccountEmail(e.target.value)}
                    />
                    <div className="flex gap-2 flex-row">
                      <Input
                        label="hasło"
                        isRequired
                        value={newAccountPassword}
                        maxLength={50}
                        minLength={6}
                        onChange={(e) => setNewAccountPassword(e.target.value)}
                        endContent={
                          <div className="flex gap-2">
                            <button
                              className="focus:outline-none"
                              type="button"
                              onClick={toggleVisibility}
                            >
                              {isVisible ? (
                                <EyeSlashIcon className="text-2xl text-default-400 pointer-events-none w-6 h-6" />
                              ) : (
                                <EyeIcon className="text-2xl text-default-400 pointer-events-none w-6 h-6" />
                              )}
                            </button>
                            <button title="skopiuj hasło">
                              <ClipboardIcon className="text-2xl text-default-400 pointer-events-none w-6 h-6" />
                            </button>
                          </div>
                        }
                        type={isVisible ? "text" : "password"}
                      />
                      <Button className="h-[56px]" onClick={passwordGenarate}>
                        wygeneruj hasło
                      </Button>
                    </div>
                    <Autocomplete
                      label="typ konta"
                      isRequired
                      selectedKey={newAccountType}
                      onSelectionChange={setNewAccountType}
                      key={"autocompletetypeAccount"}
                    >
                      <AutocompleteSection
                        showDivider
                        title="ogólny administrator"
                      >
                        <AutocompleteItem
                          key="administrator"
                          textValue="administrator"
                        >
                          administrator
                        </AutocompleteItem>
                      </AutocompleteSection>
                      <AutocompleteSection
                        showDivider
                        title="administrator zawodu"
                      >
                        <AutocompleteItem
                          key="adminTi"
                          textValue="administrator technik informatyk"
                        >
                          admin - t informatyk
                        </AutocompleteItem>
                        <AutocompleteItem
                          key="adminTh"
                          textValue="administrator technik handlowiec"
                        >
                          admin - t handlowiec
                        </AutocompleteItem>
                        <AutocompleteItem
                          key="adminTha"
                          textValue="administrator technik hotelarz"
                        >
                          admin - t hotelarz
                        </AutocompleteItem>
                        <AutocompleteItem
                          key="adminTm"
                          textValue="administrator technik mechatronik"
                        >
                          admin - t mechatronik
                        </AutocompleteItem>
                        <AutocompleteItem
                          key="adminTb"
                          textValue="administrator technik budownictwa"
                        >
                          admin - t budownictwa
                        </AutocompleteItem>
                        <AutocompleteItem
                          key="adminTps"
                          textValue="administrator technik / mechanik pojazdów samochodowych"
                        >
                          admin - t/m pojazdów samochodowych
                        </AutocompleteItem>
                        <AutocompleteItem
                          key="adminTz"
                          textValue="administrator technik żywienia i usług gstronomicznych/ kucharz"
                        >
                          admin - t żywienia i usług gastro / kucharz
                        </AutocompleteItem>
                        <AutocompleteItem
                          key="adminS"
                          textValue="administrator sprzedawca"
                        >
                          admin - sprzedawca
                        </AutocompleteItem>
                      </AutocompleteSection>
                      <AutocompleteSection showDivider title="uczeń zawodu">
                        <AutocompleteItem
                          key="uczenTi"
                          textValue="uczeń technik informatyk"
                        >
                          uczeń - t informatyk
                        </AutocompleteItem>
                        <AutocompleteItem
                          key="uczenTh"
                          textValue="uczeń technik handlowiec"
                        >
                          uczeń - t handlowiec
                        </AutocompleteItem>
                        <AutocompleteItem
                          key="uczenTha"
                          textValue="uczeń technik hotelarz"
                        >
                          uczeń - t hotelarz
                        </AutocompleteItem>
                        <AutocompleteItem
                          key="uczenTm"
                          textValue="uczeń technik mechatronik"
                        >
                          uczeń - t mechatronik
                        </AutocompleteItem>
                        <AutocompleteItem
                          key="uczenTb"
                          textValue="uczeń technik budownictwa"
                        >
                          uczeń - t budownictwa
                        </AutocompleteItem>
                        <AutocompleteItem
                          key="uczenTps"
                          textValue="uczeń technik / mechanik pojazdów samochodowych"
                        >
                          uczeń - t/m pojazdów samochodowych
                        </AutocompleteItem>
                        <AutocompleteItem
                          key="uczenTz"
                          textValue="uczeń technik żywienia i usług gastronomicznych"
                        >
                          uczeń - t żywienia i usług gastro
                        </AutocompleteItem>
                        <AutocompleteItem
                          key="uczenS"
                          textValue="uczeń sprzedawca"
                        >
                          uczeń - sprzedawca
                        </AutocompleteItem>
                      </AutocompleteSection>
                    </Autocomplete>
                    {error && (
                      <div className="bg-red-500 rounded-lg p-2">{error}</div>
                    )}
                    <Button onClick={createUser} isLoading={isPending}>
                      {isPending ? "Dodaję nowe konto" : "Dodaj nowe konto"}
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </div>
              <Card className="p-2">
                  <h2 className="text-xl">Dostępne konta</h2>
              </Card>
            <Table aria-label="Tabela użytkowników" isStriped selectionMode="single">
              <TableHeader>
                <TableColumn>nazwa użytkownika</TableColumn>
                <TableColumn>email</TableColumn>
                <TableColumn>typ konta</TableColumn>
                <TableColumn>opcje</TableColumn>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.email}>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.permission}</TableCell>
                    <TableCell>
                        {user.permission !== "administrator" ?
                        <Popover placement="left" showArrow={true}>
                            <PopoverTrigger>
                                <button
                                    title="usuń"
                                    className="bg-red-500 px-2 py-1 rounded-md text-custom-gray-800 border-2 border-red-500 hover:bg-custom-gray-800 hover:text-red-500"
                                >
                                    <TrashIcon className="h-5 w-5"/>
                                </button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <div className="flex flex-col gap-2 p-2">
                                    <div>
                                        <p className="text-lg">Na pewno chcesz usunąć konto {user.username}?</p>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => removeUser(user.id)}
                                            className="bg-red-500 px-2 py-1 rounded-md text-[#18181b] border-2 border-red-500 hover:bg-[#18181b] hover:text-red-500 flex gap-2"
                                        >
                                            usuń
                                            <TrashIcon className="h-5 w-5"/>
                                        </button>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover> : <p>brak</p> }
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        );
    } else {
        return (
        <UnauthorizedError />
        )
    }
}