"use client"
import {useEffect, useState} from "react";

export default function page({ params }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [files, setFiles] = useState([])
    const [tags, setTags] = useState([])
    const [author, setAuthor] = useState("")
    const { id } = params
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"

    useEffect(() => {

        const getPost = async () => {
            try {
                const req = await fetch(`${apiUrl}/api/accepted?id=${id}`)
                if (!req.ok) {
                    throw new Error("Nie udało sie pobrać postu")
                    return
                }
                const post = await req.json()
                if (post) {

                }
            } catch (e) {
                console.log("błąd ładowania postu:", error)
            }
        }
        getPost()
    }, []);

    return (
        <div>

        </div>
    )
}