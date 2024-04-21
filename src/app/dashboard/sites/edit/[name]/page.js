"use client";
import {useEffect, useState} from "react";
import Boxtag from "../../../ui/boxtag";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import { Button, Input, CardHeader, CardBody, Image, Card, Chip} from "@nextui-org/react";
import {format} from "date-fns";
import {pl} from "date-fns/locale";
import NotesRoundedIcon from "@mui/icons-material/NotesRounded";
import {BookmarkIcon, DocumentIcon} from "@heroicons/react/20/solid";
import EditPostComponent from "../../../../dashboard/ui/post/editPostComponent";
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/navigation"
import "../../../ui/titles.css"
import { useSession } from 'next-auth/react';
import UnauthorizedError from "../../../ui/UnauthorizedError";

const getPosts = async (setContent, setNewTitle, setId, setIsReady, params) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
    try {
        const res = await fetch(`${apiUrl}/api/subpages/${params.name}`, {
            method: "GET",
            cache: "no-store",
        })
        if (!res.ok) {
            throw new Error("Nie udało się pobrać postów")
        }
        const posts = await res.json()
        if (posts) {
            setContent(posts.post.content)
            setNewTitle(posts.post.title)
            setId(posts.post.id)
            setIsReady(true)
        }
    } catch (error) {
        console.log("Błąd ładowania postów: ", error)
    }
}
export default function page({ params }) {
    const [newTitle, setNewTitle] = useState("Ładowanie...")
    const [id, setId] = useState("")
    const [newPost, setNewPost] = useState({})
    const [content, setContent] = useState([])
    const [isReady, setIsReady] = useState(false)
    const router = useRouter()
    const { data: session, status } = useSession();
    const [deletedImages, setDeletedImages] = useState([])
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"

    useEffect(() => {
        getPosts(setContent, setNewTitle, setId, setIsReady, params)
    }, []);
    const handleRemoveComponent = (id) => {
        console.log("id do usuniecia", id)
        const toDelete = content.find(item => item.id === id)
        if (toDelete.type === "slider") {
            setDeletedImages(deletedImages.concat(toDelete.value))
        }
        const  newState = content.filter(item => item.id !== id)
        setContent(newState)
    }
    const handleSendNewPost = async () => {
        const formattedComponents = await processSendImage(content)
        await deleteFiles(deletedImages)
        const editedPost = {
            content: formattedComponents
        };
        try {
            const res = await fetch(`${apiUrl}/api/subpages/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(editedPost)
            });

            if (!res.ok) {
                throw new Error("Błąd podczas aktualizowania postu")
            }
            router.push("/dashboard/sites")
        } catch (error) {
            console.log(error)
        }

    }
    const processSendImage = async (components) => {
        const processedSendedComponents = await Promise.all(components.map(async (component) => {
            if (component.newValue) {
                if (component.type === "slider" && component?.newValue.length !== 0) {
                    const links = await sendImages(component.newValue);
                    console.log("te linki", links)
                    const {newValue, ...rest} = component;
                    return {...rest, value: [...component.value, ...links]};
                } else {
                    if (component.type === "slider" && component?.newValue.length === 0) {
                        const {newValue, ...rest} = component;
                        return {...rest};
                    } else
                        return component;
                }
            } else return component
        }));
        console.log("przeprocesowane", processedSendedComponents)
        return processedSendedComponents;
    };

    const addPostComponent = (type) => {
        switch (type) {
            case "desc":
                const newDescComponent = {
                    id: uuidv4(),
                    type: type,
                    value: ""
                }
                setContent(content.concat(newDescComponent))
                break;
            case "slider":
                const newSliderComponent = {
                    id: uuidv4(),
                    type: type,
                    value: []
                }
                setContent(content.concat(newSliderComponent))
                break;
            case "video":
                const newVideoComponent = {
                    id: uuidv4(),
                    type: type,
                    value: "",
                }
                setContent(content.concat(newVideoComponent))
                break;
        }
    }
    const sendImages = async (files) => {
        if (!files || files.length === 0) return [];
        try {
            const data = new FormData();
            files.forEach(file => {
                data.append("file", file);
            });
            const res = await fetch(`${apiUrl}/api/upload`, {
                method: "POST",
                body: data
            });
            if (!res.ok) {
                throw new Error(await res.text());
            }
            const responseData = await res.json();
            console.log(responseData.files)
            return responseData.files;
        } catch (e) {
            console.error("Błąd podczas przesyłania plików:", e);
        }
    };
    const deleteFiles = async (filesToDelete) => {
        try {
            const res = await fetch(`${apiUrl}/api/upload`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ filesToDelete })
            })
            if (!res.ok) {
                throw new Error("Błąd usuwania zdjęcia")
            }
        } catch (e) {
            console.log("błąd usuwania plików", e)
        }
    }


    if (session && session?.user.permission === "administrator") {
        return (
            <div className="flex flex-col gap-2">
                <div className="bg-custom-gray-900 w-full rounded-md p-2 flex justify-between items-center">
                    <h2 className="text-2xl">Edytowanie postu</h2>
                    <p>{newTitle}</p>
                    <div className="flex gap-2 items-center">
                        <p className="text-custom-gray-600 text-lg">{params.postId}</p>
                        <Button color="primary" onClick={handleSendNewPost}
                                isDisabled={!isReady}>ZAPISZ <SaveRoundedIcon/></Button>
                    </div>
                </div>
                <div
                    className="bg-custom-gray-900 w-full rounded-md p-2 flex items-center justify-between sticky top-0 z-20">
                    <div className="flex gap-2">
                        <Button variant="light" isDisabled={!isReady} startContent={<NotesRoundedIcon/>}
                                onClick={() => addPostComponent("desc")}> tekst</Button>
                        <Button variant="light" isDisabled={!isReady} startContent={<BookmarkIcon className="h-6 w-6"/>}
                                onClick={() => addPostComponent("slider")}> album zdjęć</Button>
                        <Button variant="light" isDisabled={!isReady} startContent={<DocumentIcon className="h-6 w-6"/>}
                                onClick={() => addPostComponent("file")}> plik do pobrania</Button>
                    </div>
                    <div>
                        <p className="text-custom-gray-600 text-lg">edytowanie zawartości</p>
                    </div>
                </div>
                <div className="w-full">
                    <div className="min-h-[150px] relative p-2 flex flex-col gap-2">
                        {content.map(item =>
                            <EditPostComponent key={item.id}
                                               setNewContent={setContent}
                                               newContent={content}
                                               item={item}
                                               removeComponent={handleRemoveComponent}
                                               deletedImages={deletedImages}
                                               setDeletedImages={setDeletedImages}
                            />)}
                    </div>
                </div>

            </div>
        )
    } else {
        return (
            <UnauthorizedError/>
        )
    }
}