"use client";

import { useState } from "react";
import {Switch, Divider} from "@nextui-org/react";


export default function page() {
    const [showUserForm, setShowUserForm] = useState(true)
    const [isSelectedCreatePosts, setIsSelectedCreatePosts] = useState(false)
    const [isSelectedEditPosts, setIsSelectedEditPosts] = useState(false)
    const [isSelectedRemovePosts, setIsSelectedRemovePosts] = useState(false)
    return (
        <div className="w-full flex flex-col gap-2">
            <div className="flex w-full items-center justify-between bg-custom-gray-900 p-3 rounded-md">
                <div>
                    <h1 className="text-3xl">Zarządzanie użytkownikami</h1>
                </div>
                <div>
                    <button onClick={() => setShowUserForm(!showUserForm)} className="hover:bg-blue-600 bg-blue-500 text-custom-gray-900 p-2 rounded-md flex gap-2">{showUserForm ? "Anuluj" : "Dodaj konto"} </button>
                </div>
            </div>
            {
                showUserForm && (
                    <div className="bg-custom-gray-900 p-2 rounded-md">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl">Tworzenie nowego konta</h2>
                            <p className="text-custom-gray-500 text-lg">podaj wymagane dane</p>    
                        </div>
                        <div className="flex gap-2">
                            <div className="w-full">
                                    <form className="flex flex-col gap-2">
                                        <div>
                                            <label>login</label>
                                            <input type="text"/>
                                        </div>
                                        <div>
                                            <label>hasło</label>
                                            <input type="text"/>
                                        </div>
                                    </form>
                            </div>
                            <div className="w-full">
                                <div>
                                    <div className="flex flex-col gap-2">
                                        <Switch isSelected={isSelectedCreatePosts} onValueChange={setIsSelectedCreatePosts}>
                                            tworzenie postów
                                        </Switch>
                                        <Switch isSelected={isSelectedEditPosts} onValueChange={setIsSelectedEditPosts}>
                                            edytowanie postów
                                        </Switch>
                                        <Switch isSelected={isSelectedRemovePosts} onValueChange={setIsSelectedRemovePosts} className="text-white">
                                            usuwanie postów
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }
        </div>
    )
}