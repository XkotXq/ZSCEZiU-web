"use client";
import { useState } from "react"
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import {Input, Button} from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import Image from "next/image";

export default function page() {
    const router = useRouter()
    const [error, setError] = useState("")
    const [pending, setPending] = useState(false)
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => setIsVisible(!isVisible);
    async function handleSubmit() {
        if(!login || !password) {
            setError("Pola email i hasło nie mogą być puste.")
            return;
        }
        try {
        setPending(true)
        const res = await signIn("credentials", {
            email: login,
            password: password,
            redirect: false
        })
            if(res.error) {
                setError("Błędne dane uwierzytelniające.")
                setPending(false)
                return;
            }
            router.replace("/dashboard")
           
        } catch (error) {
            setPending(false)
            setError("Coś poszło nie tak.")
        }
    }

    return (
        <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-black to-custom-gray-800">
            <div className="bg-gradient-to-tl from-custom-gray-950 to-custom-gray-800 p-5 rounded-md border-t-2 border-green-500 flex flex-col  gap-2 shadow-2xl shadow-custom-gray-700">
                <div className="text-center text-2xl flex flex-col items-center">
                    <Image src="/logo.png" alt="logo" width={150} height={150}/>
                    <h3 className="font-medium">Logowanie</h3>
                </div>
                <div>
                    <form className="flex flex-col gap-2 w-[400px]">
                        <div className="flex flex-col">
                            <Input
                                label="Email"
                                placeholder="Wpisz swój login"
                                value={login}
                                onValueChange={setLogin}
                            />
                        </div>
                        <div className="flex flex-col">
                            <Input
                                label="Hasło"
                                placeholder="Wpisz swoje hasło"
                                value={password}
                                onValueChange={setPassword}
                                endContent={
                                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                        {isVisible ? (
                                            <EyeSlashIcon className="text-2xl text-default-400 pointer-events-none w-6 h-6" />
                                        ) : (
                                            <EyeIcon className="text-2xl text-default-400 pointer-events-none w-6 h-6" />
                                        )}
                                    </button>
                                }
                                type={isVisible ? "text" : "password"}
                            />
                        </div>
                        {
                        error && <div className="bg-red-500 rounded-xl p-2">
                            {error}
                        </div>
                    }
                        <Button color="success" isLoading={pending} onClick={handleSubmit} radius="md">
                            Zaloguj
                        </Button>

                    </form>
                </div>
                <div>
                <Link href="/" className="hover:underline text-custom-gray-200">Powrót do strony ZSCEZiU</Link>
                </div>

            </div>
        </div>
    )
}