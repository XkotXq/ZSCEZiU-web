"use client"
import PhotoBar from "../../ui/Sections/photobar";
import Post from "../../ui/components/post";
import { Pagination, Image, Link } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Loading from "./loading"
import { useRouter } from "next/navigation"


export default function Page({ searchParams }) {
    const router = useRouter()
    const p = parseInt(searchParams.p)
    const [currentPage, setCurrentPage] = useState(p)
    const [posts, setPosts] = useState([])
    const [ready, setReady] = useState(false)
    const [pages, setPages] = useState(0)

    const getPosts = async (page) => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
        try {
            const res = await fetch(`${apiUrl}/api/postspg/${page}`, {
                cache: "no-store"
            })
            if (!res.ok) {
                throw new Error("Nie udało się pobrać postów")
            }
            const posts = await res.json()
            if (posts) {
                setPosts(posts.posts)
                setReady(true)
                console.log(posts)
            }
        } catch (error) {
            console.log("Błąd ładowania postów: ", error)
        }
    }
    const getCount = async () => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
        try {
            const res = await fetch(`${apiUrl}/api/postspg`, {
                cache: "no-store"
            })
            if (!res.ok) {
                throw new Error("Nie udało się pobrać postów")
            }
            const count = await res.json()
            if (posts) {
                const countPages = Math.ceil(count.posts/12)
                setPages(countPages)
            }
        } catch (error) {
            console.log("Błąd ładowania postów: ", error)
        }
    }

    useEffect(() => {
        getPosts(currentPage)
        getCount()
    }, [])
    useEffect(() => {
        router.push(`/posty?p=${currentPage}`)
        getPosts(currentPage)
        getCount()
    }, [currentPage])


    const path = [
        {
            name: "główna",
            url: "/"
        },
        {
            name: "posty",
        }
    ]
    return (
        <div className="w-full flex flex-col shrink-1 gap-2">
                <PhotoBar path={path}/>
            <div className="rounded-md text-center p-5 bg-custom-gray-800 flex justify-center items-center text-2xl">Posty</div>
            <div className="flex flex-col mx-auto">
                    {ready ? (
                        <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 grow mx-auto">

                            {posts.length > 0 && ( posts.map(post => (
                                <Post key={post.id} id={post.id} title={post.title} tags={post.tags} date={post.date} img={post.img} desc={post.desc}/>
                            )))}
                        </div>
                            {posts.length > 0 ? (
                            <div className="mx-auto my-5">
                                <Pagination
                                    showShadow
                                    total={pages}
                                    size="lg"
                                    page={currentPage}
                                    onChange={setCurrentPage}
                                />
                            </div>
                            ) : (
                                <div className="my-5 flex flex-col items-center justify-center gap-3 mx-auto">
                                    <Image src="./notFoundPagination.svg" width="350" height="300" alt="brak strony" />
                                    <h1 className="text-3xl font-medium">404</h1>
                                    <h2 className="text-xl">brak {p} strony</h2>
                                    <Link href="/posty?p=1">Powrót do pierwszej strony</Link>
                                </div>
                            )}
                        </>
                    ) : (
                        <Loading />
                    )}
            </div>
        </div>
    )
}