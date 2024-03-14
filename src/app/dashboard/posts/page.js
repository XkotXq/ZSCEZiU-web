"use client"
import { PlusCircleIcon, TrashIcon, PencilIcon, LockClosedIcon, EyeIcon } from "@heroicons/react/20/solid";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Card, Tooltip } from "@nextui-org/react";
import {useEffect, useState} from "react";
export default function page() {
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
            const res = await fetch(`${apiUrl}/api/allposts`, {
                method: "GET"
            })
            if (res) {
                const posts = await res.json()
                if (posts) {
                    setPosts(posts.posts)
                }
            }
        } catch (error) {
            console.log("Błąd ładowania postów: ", error)
        }
    }
    useEffect(() => {
        getPosts()
    }, [])
    const deletePost = async (id) => {
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
            const response = await fetch(`${apiUrl}/api/posts?id=${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Wystąpił problem podczas usuwania postu');
            }
            const data = await response.json();
            const updatedPosts = posts.filter(post => post.id !== id)
            setPosts(updatedPosts)
            return data;
        } catch (error) {
            console.error('Błąd podczas usuwania postu:', error);
            throw error;
        }
    }

    const updateObjectInTable = (idForUpdate, newValue) => {
        const updatedTable = posts.map((object) => {
            if (object.id === idForUpdate) {
                return {...object, ...newValue};
            }
            return object;
        });
        return updatedTable
    }

    const switchStatusPost = async (id) => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
        const post = posts.filter(item => item.id === id)
        const spreadPost = {...post}
        const updatedPost = {
            id: spreadPost[0].id,
            title: spreadPost[0].title,
            tags: spreadPost[0].tags,
            date: spreadPost[0].date,
            img: spreadPost[0].img,
            desc: spreadPost[0].desc,
            content: spreadPost[0].content,
            share: !spreadPost[0].share || false
        }
        try {
            const response = await fetch(`${apiUrl}/api/posts/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(updatedPost)
            })
            if (!response.ok) {
                throw new Error("Nieudana aktualizacja postu")
            }
            const updatedPosts = updateObjectInTable(id, updatedPost)
            setPosts(updatedPosts)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="w-full flex flex-col gap-2">
            <Card className="flex w-full items-center justify-between flex-row p-3">
                <div>
                    <h1 className="text-3xl">Zarządzanie postami</h1>
                </div>
                <div>
                    <a href="posts/new" className="hover:bg-green-600 bg-green-500 text-custom-gray-900 p-2 rounded-md flex gap-2">Dodaj Post <PlusCircleIcon className="h-6 w-6" /></a>
                </div>
            </Card>
            <div className="rounded-md overflow-hidden">
                <Table aria-label="Tabela zawierająca listę postów"
                       isStriped
                >
                    <TableHeader>
                        <TableColumn className="text-center">LP</TableColumn>
                        <TableColumn>TYTUŁ</TableColumn>
                        <TableColumn className="text-center">STAN</TableColumn>
                        <TableColumn>TAG</TableColumn>
                        <TableColumn>DATA</TableColumn>
                        <TableColumn>OPCJE</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {posts.map((post, index) => (
                            <TableRow key={post.id}>
                                <TableCell>
                                    <Tooltip showArrow color="primary" content={"post o id " + post.id} placement="right">
                                        <div className="mx-auto flex justify-center">
                                            {index+1}
                                        </div>
                                    </Tooltip>
                                </TableCell>
                                <TableCell>
                                    <a
                                        className="text-base"
                                        title="podgląd"
                                        href={"/posty/" + post.id}
                                        target="_blank"
                                    >
                                        {post.title}
                                    </a>
                                </TableCell>
                                <TableCell>
                                    <div className="flex justify-center items-center">
                                        {post.share ?
                                            <Tooltip showArrow color="success" content="post publiczny" placement="left">
                                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                            </Tooltip> :
                                            <Tooltip showArrow color="warning" content="post prywatny" placement="left">
                                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            </Tooltip>
                                        }
                                    </div>
                                </TableCell>
                                <TableCell>{post.tags.map(tag => <Chip key={tag}>{tag}</Chip>)}</TableCell>
                                <TableCell>{post.date}</TableCell>
                                <TableCell><div className="flex gap-2 items-center">
                                    <div>
                                        <button
                                            title={post.share? "zmień na prywatne" : "zmień na publiczne"}
                                            className="bg-green-500 px-2 py-1 rounded-md text-[#18181b] border-2 border-green-500 hover:bg-[#18181b] hover:text-green-500 flex"
                                            onClick={() => switchStatusPost(post.id)}
                                        >
                                            {post.share? (
                                                <EyeIcon className="h-5 w-5" />
                                            ) : (
                                                <LockClosedIcon className="h-5 w-5" />
                                            )}
                                        </button>
                                    </div>
                                    <div>
                                        <a
                                            title="edytuj"
                                            href={"/dashboard/posts/edit/" + post.id}
                                            className="bg-blue-500 px-2 py-1 rounded-md text-custom-gray-800 border-2 border-blue-500 hover:bg-custom-gray-800 hover:text-blue-500 flex"
                                        >
                                            <PencilIcon  className="h-5 w-5" />
                                        </a>
                                    </div>
                                    <Popover placement="left" showArrow={true}>
                                        <PopoverTrigger>
                                            <button
                                                title="usuń"
                                                className="bg-red-500 px-2 py-1 rounded-md text-custom-gray-800 border-2 border-red-500 hover:bg-custom-gray-800 hover:text-red-500"
                                            >
                                                <TrashIcon className="h-5 w-5" />
                                            </button>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <div className="flex flex-col gap-2 p-2">
                                                <div>
                                                    <p className="text-lg">Na pewno chcesz usunąć ten post?</p>
                                                </div>
                                                <div>
                                                    <button
                                                        onClick={() => deletePost(post.id)}
                                                        className="bg-red-500 px-2 py-1 rounded-md text-[#18181b] border-2 border-red-500 hover:bg-[#18181b] hover:text-red-500 flex gap-2"
                                                    >
                                                        usuń
                                                        <TrashIcon className="h-5 w-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}