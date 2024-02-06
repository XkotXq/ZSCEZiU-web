"use client";
import PhotoBar from "@/app/ui/Sections/photobar";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import {useEffect, useState} from "react";
import PostsContent from "@/app/ui/components/post/postscontent";
import "./../../../dashboard/ui/titles.css"


export default function page({ params }) {
    const [post, setPost] = useState([])
    useEffect(() => {
        axios
            .get(`http://localhost:3001/api/posts/${params.postId}`)
            .then(res => {
                setPost(res.data)
            }).catch(error => {

        })
    }, []);
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
            name: post.title
        }
    ]
    return (
        <div className="w-full h-full">
            {post && post.content && post.content.length > 0 ? (
                <>
                    <PhotoBar name={post.title} path={path} />
                    <div className="max-w-4xl mx-auto flex flex-col gap-2 py-5">
                        <div className="w-full flex justify-end text-custom-gray-300 text-lg font-medium">{post.date}</div>
                        {post.content.map(postItems => (
                        <PostsContent key={postItems.id} type={postItems.type} data={postItems.value} />
                    ))}
                    </div>
                </>
            ) : (
                <div className="w-full h-full p-10 flex justify-center items-center flex-col gap-5">
                    <Image src="/g461.svg" width="350" height="300" alt="brak" />
                    <a className="text-custom-gray-300" target="_blank" href="https://storyset.com/data">Data illustrations by Storyset</a>
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
            )}
        </div>


    )
}