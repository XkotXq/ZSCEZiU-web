"use client";

import { useState } from "react";
import { Switch, Input, Card, Button } from "@nextui-org/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { getUsers } from "@/app/dashboard/users/pagefetch"
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default async function page() {
    const [showUserForm, setShowUserForm] = useState(false)
    const [showPasswordForm, setShowPasswordForm] = useState(false)
    const [isSelectedCreatePosts, setIsSelectedCreatePosts] = useState(false)
    const [isSelectedEditPosts, setIsSelectedEditPosts] = useState(false)
    const [isSelectedRemovePosts, setIsSelectedRemovePosts] = useState(false)
    const [isSelectedPostManagment, setIsSelectedPostManagment] = useState(false)
    const [isSelectedAdmnistrator, setIsSelectedAdmnistrator] = useState(false)
    const [isVisible1, setIsVisible1] = useState(false)
    const [isVisible2, setIsVisible2] = useState(false)
    const [isVisible3, setIsVisible3] = useState(false)
    const [newUsername, setNewUsername] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [pending, setPending] = useState(false)
    const [error, setError] = useState("")

    let { users } = await getUsers()
    const handleShowUserForm = () => {
        setShowUserForm(!showUserForm)
        setShowPasswordForm(false)
    }
    const handleShowPasswordForm = () => {
        setShowPasswordForm(!showPasswordForm)
        setShowUserForm(false)
    }
    const handleSwitchAdministrator = () => {
        setIsSelectedCreatePosts(true)
        setIsSelectedEditPosts(true)
        setIsSelectedRemovePosts(true)
        setIsSelectedPostManagment(true)
        setIsSelectedAdmnistrator(!isSelectedAdmnistrator)
    }
    const defaultOptions = () => {
        setIsSelectedCreatePosts(false)
        setIsSelectedEditPosts(false)
        setIsSelectedRemovePosts(false)
        setIsSelectedPostManagment(false)
        setIsSelectedAdmnistrator(false)
        setNewUsername("")
        setNewPassword("")
        setNewEmail("")
        setError("")
    }

    async function handleSubmit() {
        if(!newUsername || !newPassword) {
            setError("Wszystkie dane muszą zostać wypełnione.")
        }
        try {
            const newUser = {
                username: newUsername,
                email: newEmail,
                password: newPassword,
                permissions: {
                    createPosts: isSelectedCreatePosts,
                    editPosts: isSelectedEditPosts,
                    removePosts: isSelectedRemovePosts,
                    managePosts: isSelectedPostManagment,
                    administrator: isSelectedAdmnistrator
                }
            }
            setPending(true)
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(newUser)
            })
            if(res.ok) {
                setPending(false)
                defaultOptions()
            } else {
                const errorData = await res.json()
                setError(errorData.message)
                console.log("Something went wrong.");
                setPending(false)
            }
        } catch (error) {
            setPending(false)
            setError("Something went wrong.")
        }
    }
    return (
        <div className="w-full flex flex-col gap-2">
            <Card className="flex w-full items-center justify-between p-3 flex-row">
                <div>
                    <h1 className="text-3xl">Zarządzanie użytkownikami</h1>
                </div>
                <div className="flex gap-2">
                    <button onClick={handleShowPasswordForm} className="hover:bg-red-600 bg-red-500 text-custom-gray-900 p-2 rounded-md flex gap-2">{showPasswordForm ? "Anuluj" : "Zmień hasło"} </button>
                    <button onClick={handleShowUserForm} className="hover:bg-blue-600 bg-blue-500 text-custom-gray-900 p-2 rounded-md flex gap-2">{showUserForm ? "Anuluj" : "Dodaj konto"} </button>
                </div>
            </Card>
            {
                showUserForm && (
                    <Card className="p-2">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl">Tworzenie nowego konta</h2>
                            <p className="text-custom-gray-500 text-lg">podaj wymagane dane</p>    
                        </div>
                        <div className="flex gap-2">
                            <div className="w-full">
                                    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                                        <div>
                                            <label>login</label>
                                            <Input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)}/>
                                        </div>
                                        <div>
                                            <label>email</label>
                                            <Input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)}/>
                                        </div>
                                        <div>
                                            <label>hasło</label>
                                            <Input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                                        </div>
                                        <div className="p-2">
                                            {error && (<div>{error}</div>)}
                                            {/*<Input type="submit" value="DODAJ"/>*/}
                                            <Button onClick={handleSubmit}>DODAJ</Button>
                                        </div>
                                    </form>
                            </div>
                            <div className="w-full">
                                <div>
                                    <div className="flex flex-col gap-2">
                                        <Switch isSelected={isSelectedCreatePosts} onValueChange={setIsSelectedCreatePosts} isDisabled={isSelectedAdmnistrator}>
                                            tworzenie postów
                                        </Switch>
                                        <Switch isSelected={isSelectedEditPosts} onValueChange={setIsSelectedEditPosts} isDisabled={isSelectedAdmnistrator}>
                                            edytowanie postów
                                        </Switch>
                                        <Switch isSelected={isSelectedRemovePosts} onValueChange={setIsSelectedRemovePosts} isDisabled={isSelectedAdmnistrator} className="text-white">
                                            usuwanie postów
                                        </Switch>
                                        <Switch isSelected={isSelectedPostManagment} onValueChange={setIsSelectedPostManagment} isDisabled={isSelectedAdmnistrator} className="text-white">
                                            zarządanie podstronami
                                        </Switch>
                                        <Switch isSelected={isSelectedAdmnistrator} onValueChange={handleSwitchAdministrator} className="text-white">
                                            administrator
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                )}
            {
                showPasswordForm && (
                    <Card className="p-2">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl">Zmiana hasła</h2>
                            <p className="text-custom-gray-500 text-lg">podaj wymagane dane</p>
                        </div>
                        <div>
                            <form className="flex flex-col gap-2">
                                <div>
                                    <Input
                                        label="Obecne hasło"
                                        endContent={
                                        <button className="focus:outline-none" type="button" onClick={() => setIsVisible1(!isVisible1)}>
                                            {isVisible1 ? (
                                                <EyeIcon className="text-2xl text-default-400 pointer-events-none w-6 h-6" />
                                            ) : (
                                                <EyeSlashIcon className="text-2xl text-default-400 pointer-events-none w-6 h-6" />
                                            )}
                                        </button>
                                        }
                                        type={isVisible1 ? "text" : "password"}
                                    />
                                </div>
                                <div>
                                    <Input
                                        label="Nowe hasło"
                                        endContent={
                                            <button className="focus:outline-none" type="button" onClick={() => setIsVisible2(!isVisible2)}>
                                                {isVisible2 ? (
                                                    <EyeIcon className="text-2xl text-default-400 pointer-events-none w-6 h-6" />
                                                ) : (
                                                    <EyeSlashIcon className="text-2xl text-default-400 pointer-events-none w-6 h-6" />
                                                )}
                                            </button>
                                        }
                                        type={isVisible2 ? "text" : "password"}
                                    />
                                </div>
                                <div>
                                    <Input
                                        label="Nowe hasło"
                                        endContent={
                                            <button className="focus:outline-none" type="button" onClick={() => setIsVisible3(!isVisible3)}>
                                                {isVisible3 ? (
                                                    <EyeIcon className="text-2xl text-default-400 pointer-events-none w-6 h-6" />
                                                ) : (
                                                    <EyeSlashIcon className="text-2xl text-default-400 pointer-events-none w-6 h-6" />
                                                )}
                                            </button>
                                        }
                                        type={isVisible3 ? "text" : "password"}
                                    />
                                </div>
                            </form>
                        </div>
                    </Card>
                )}
            <Card>

                    <Table>
                        <TableHeader>
                            <TableColumn>INDEX</TableColumn>
                            <TableColumn>LOGIN</TableColumn>
                            <TableColumn>EMAIL</TableColumn>
                            <TableColumn>OPCJE</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {users.map((user, index) => (
                                <TableRow key={user.id}>
                                    <TableCell>{index+1}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell><button>usuń</button></TableCell>
                                </TableRow>

                            ))}
                        </TableBody>
                    </Table>


            </Card>
        </div>
    )
}