"use client"
import PhotoBar from "../../../ui/Sections/photobar";
import PostsContent from "../../..//ui/components/post/postscontent";
import "./../../../dashboard/ui/titles.css"
import Image from "next/image"
import Link from "next/link"
import {useEffect, useState} from "react";
import Loading from "../../..//(overview)/posty/[id]/loading";

export default function page({ params }) {
    const [post, setPost] = useState([])
    const [active, setActive] = useState(false)
    const getPost = async (id) => {
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
            const res = await fetch(`${apiUrl}/api/posts/${id}`, {
                cache: "no-store"
            });
            if (!res.ok) {
                throw new Error("Żądany zasób nie został znaleziony");
            }
            if (res) {
                const item = await res.json()
                if (item) {
                    setPost(item.post)
                    setActive(true)
                    console.log(post)
                }
            }
        } catch (error) {
            setPost(null)
            return {error: "brak postu o takim id"}
        }
    }
    useEffect(() => {
        getPost(params.id)
    }, [])

        if (post) {
            const path = [
                {
                    name: "główna",
                    url: "/",
                },
                {
                    name: "posty",
                    url: "/posty"
                },
                {
                    name: post.title || "ładowanie"
                }
            ]
            return (
                <div>
                    <div className="w-full h-full">
                        <PhotoBar path={path}/>
                        {active ? (

                        <div className="max-w-4xl mx-auto flex flex-col gap-2 py-5">
                            <div
                                className="w-full flex justify-end text-custom-gray-300 text-lg font-medium">{post.date}</div>
                            {active && post.content.map(postItems => (
                                <PostsContent key={postItems.id} type={postItems.type} data={postItems.value}/>
                            ))}
                        </div>
                        ) : (
                            <Loading/>
                        )
                        }

                    </div>
                </div>
            )
        } else {
            return (
                <div className="w-full h-full">
                    <div className="w-full h-full p-10 flex justify-center items-center flex-col gap-5">
                        <Image src="/g461.svg" width="350" height="300" alt="brak danego postu"/>
                        <a className="text-custom-gray-300" target="_blank" href="https://storyset.com/data">Data
                            illustrations by Storyset</a>
                        <h1 className="text-4xl font-medium text-[#90caf9]">BŁĄD 404</h1>
                        <h2 className="text-2xl font-medium text-center text-[#90caf9]">
                            brak takiego postu lub brak zawartości
                        </h2>
                        <Link
                            href="/posty"
                            className="border-2 border-[#90caf9] text-[#90caf9] rounded-md p-2 font-medium hover:bg-[#90caf9] hover:text-custom-gray-900"
                        >
                            Przejdź do listy postów
                        </Link>
                    </div>
                </div>
            )
        }
}