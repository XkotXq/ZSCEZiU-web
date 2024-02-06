"use client";
import { useState } from "react"
import { useRouter } from "next/navigation";


export default function page() {
    const router = useRouter()
    const [info, setInfo] = useState({ username: "", email: "", password: "" })
    const [error, setError] = useState("")
    const [pending, setPending] = useState(false)

    const handleInput = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value}))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if(!info.username || !info.email || !info.password) {
            setError("Must provide all the credentials.")
        }
        try {
            setPending(true)
            const res = await fetch("api/register", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(info)
            })
            if(res.ok) {
                setPending(false)
                const form = e.target;
                form.reset();
                router.push("/login")
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
        <div className="flex flex-col gap-2">
            <div className="bg-custom-gray-900 flex justify-between p-2 rounded-md">
                <h1>Tworzenie użytkownika</h1>
                <p>dane logowania</p>
            </div>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <div className="flex flex-col">
                        <label>Nazwa użytkownika</label>
                        <input type="text" name="username" onChange={(e) => handleInput(e)} className="bg-custom-gray-800 focus:outline-none focus:bg-custom-gray-700 text-white flex p-1 text-xl rounded-md"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Email</label>
                        <input type="email" name="email" onChange={(e) => handleInput(e)} className="bg-custom-gray-800 focus:outline-none focus:bg-custom-gray-700 text-white flex p-1 text-xl rounded-md"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Hasło</label>
                        <input type="password" name="password" onChange={(e) => handleInput(e)} className="bg-custom-gray-800 focus:outline-none focus:bg-custom-gray-700 text-white flex p-1 text-xl rounded-md"/>
                    </div>
                    {
                        error && <div className="bg-red-500 rounded-md p-2">
                            {error}
                        </div>
                    }
                    <input type="submit" value={pending ? "Rejestrowanie": "Zarejestruj"} disabled={pending?true:false} className="bg-green-500 hover:bg-green-600 p-2 rounded-md flex justify-center font-medium"/>
                    
                </form>
            </div>
        </div>
    )
}