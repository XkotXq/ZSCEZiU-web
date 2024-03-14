"use client"
import {useEffect, useState} from "react";
import { Image } from "@nextui-org/react"

export default function page() {
    const [photos, setPhotos] = useState([])
    const getPosts = async (page) => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
        try {
            const res = await fetch(`${apiUrl}/api/upload`, {
                cache: "no-store"
            })
            if (!res.ok) {
                throw new Error("Nie udało się pobrać zdjęć")
            }
            const imgs = await res.json()
            if (imgs) {
                console.log(imgs.images)
                setPhotos(imgs.images)
            }
        } catch (error) {
            console.log("Błąd ładowania zdjęć: ", error)
        }
    }
    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div>
            działa :D albumy
            <div className="flex flex-wrap">
                {photos && photos.map(photo => (
                    <div key={photo.id}>
                        <img width={300} src={photo.path} alt={photo.path}/>
                    </div>
                ))}
            </div>
        </div>
    )
}