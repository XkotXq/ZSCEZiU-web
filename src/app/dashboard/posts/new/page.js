"use client";
import Postcomponent from "../../../dashboard/ui/post/postcomponent";
import { v4 as uuidv4 } from 'uuid';
import NotesRoundedIcon from '@mui/icons-material/NotesRounded';
import { BookmarkIcon, PaperAirplaneIcon, DocumentIcon, BackwardIcon } from "@heroicons/react/20/solid";
import { Card, CardHeader, CardBody, Image, Chip, Button } from "@nextui-org/react";
import Photodropzone from "../../../dashboard/ui/photodropzone";
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import Boxtag from "../../../dashboard/ui/boxtag";
import Snackbar from '@mui/material/Snackbar';
import { useRouter } from "next/navigation";
import UnauthorizedError from "../../../dashboard/ui/UnauthorizedError";
import { useSession } from 'next-auth/react';
import {useEffect, useState} from "react";

export default function page() {
    const [postComponents, setPostComponents] = useState([])
    const [img, setImg] = useState("")
    const [newTitle, setNewTitle] = useState("")
    const [newDesc, setNewDesc] = useState("")
    const [posts, setPosts] = useState({})
    const [components, setComponents] = useState([])
    const [primaryConfig, setPrimaryConfig] = useState(true)
    const [activeTag, setActiveTag] = useState("ZSCEZiU")
    const [state, setState] = useState(false);
    const router = useRouter()
    const { data: session, status } = useSession();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
    const [file, setFile] = useState("")

    useEffect(() => {
        console.log("postComponents", postComponents)
        console.log("components", components)
    }, [postComponents, components])
    const today = new Date();
    const formattedDate = format(today, 'd MMMM yyyy', { locale: pl });
    const handleClose = () => {
        setState(false);
    };
    const addPostComponent = (typeComponent) => {
        const postComponent = {
            id: uuidv4(),
            type: typeComponent
        }
        setPostComponents(postComponents.concat(postComponent))
    }
    const removePostComponent = (id) => {
        const filteredPostComponents = postComponents.filter(postComponent => postComponent.id !== id);
        setPostComponents(filteredPostComponents);
        if (components.some(component => component === id)) {
            const filteredComponents = components.filter(component => component.id !== id);
            setComponents(filteredComponents);
        }
    }

    const addDataPost = async () => {
        if (newTitle === "" || newDesc === "") {
            setState(true)
            return;
        }
        let imgUrl = "/assets/default-image.jpg";
        if (img) {
            imgUrl = await sendImage();
        }
        const primaryPostData = {
            id: uuidv4(),
            title: newTitle,
            tags: [activeTag],
            date: formattedDate,
            img: imgUrl,
            desc: newDesc,
            share: false,
            content: []
        }
        setPosts(primaryPostData)
        setPrimaryConfig(!primaryConfig)
    }
    const sendPost = async () => {
        try {
            console.log("przed")
            const processedComponents = await processSendImage(components)
            console.log("po")
            const readyPost = { ...posts, content: processedComponents };
            const response = await fetch(`${apiUrl}/api/posts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(readyPost),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log("Response:", data);
            router.replace("/dashboard/posts");
        } catch (error) {
            console.error("error ", error);
        }
    };
    const processSendImage = async (components) => {
        const processedSendedComponents = await Promise.all(components.map(async (component) => {
            if (component.type === "slider") {
                const links = await sendImages(component.value);
                console.log("te linki", links)
                return { ...component, value: links };
            } else {
                return component;
            }
        }));
        console.log("przeprocesowane", processedSendedComponents)
        return processedSendedComponents;
    };

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
    const sendImage = async () => {
        if (!file) return;
        console.log(file)
        try {
            const data = new FormData()
            data.set("file", file)

            const res = await fetch(`${apiUrl}/api/upload`, {
                method: "POST",
                body: data
            })
            if(!res.ok) throw new Error(await res.text())
            const responseData = await res.json();
            console.log(responseData.files[0])
            setImg(responseData.files[0]);
            return responseData.files[0]
        } catch (e) {
            console.error(e)
        }
    }

    const imageDrop = (imageFile) => {
        if (imageFile) {
            console.log("drop")
            const url = URL.createObjectURL(imageFile[0]);
            setImg(url);
            setFile(imageFile[0])
        }
    }
    if (session && session?.user.permission === "administrator") {
        return (
            <div className="flex flex-col gap-2">
                <div className="bg-custom-gray-900 w-full rounded-md p-2 flex justify-between">
                    <h2 className="text-2xl">Tworzenie postu</h2>
                    <p className="text-custom-gray-600 text-lg">{primaryConfig ? ("podstawowe dane") : ("dodawnanie zawartości postu")}</p>
                </div>
                {primaryConfig ? (

                    <div>
                        <div className="flex gap-2 h-full md:flex-row flex-col">
                            <Card className="w-full p-2 flex flex-col justify-between">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="title">Tytuł postu</label>
                                    <input type="text" name="title"
                                           className="bg-custom-gray-800 focus:outline-none p-2 rounded-md"
                                           maxLength={90} value={newTitle} onChange={(e) => setNewTitle(e.target.value)}
                                           placeholder="tytuł"/>
                                    <Boxtag activeTag={activeTag} setActiveTag={setActiveTag}/>
                                    <label>Wybierz zdjęcie</label>
                                    <Photodropzone onImageDrop={(imageFile) => imageDrop(imageFile)} type="photo"/>
                                    <Button isDisabled={!img} onClick={() => setImg("")}>usuń zdjęcie</Button>
                                    {/*<input type="text" className="bg-custom-gray-800 focus:outline-none p-2 rounded-md" value={img} onChange={(e) => setImg(e.target.value)}/>*/}
                                    <label htmlFor="desc">Opis postu</label>
                                    <input type="text" name="desc"
                                           className="bg-custom-gray-800 focus:outline-none p-2 rounded-md"
                                           maxLength={160} value={newDesc} onChange={(e) => setNewDesc(e.target.value)}
                                           placeholder="opis"/>

                                </div>
                                <div className="flex justify-end mt-2">
                                    <button
                                        className="bg-blue-500 border-blue-500 border-2  p-1 rounded-md flex gap-2 hover:bg-blue-600"
                                        onClick={addDataPost}>zapisz <SaveRoundedIcon/></button>
                                </div>
                            </Card>
                            <div className="grow">
                                <Card shadow="sm" className="md:w-[400px] w-full flex flex-col">
                                    <CardHeader className="grow flex gap-2">
                                        <div className="flex h-full flex-col justify-between w-full">
                                            <div>
                                                <h3 className="sm:text-lg text-base font-medium">{newTitle ? newTitle : "brak tytułu"}</h3>
                                            </div>
                                            <div>
                                                <p className=" text-custom-gray-300 font-medium">Dodany {formattedDate}</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-end items-start h-full">
                                            <Chip color="default" variant="shadow">{activeTag}</Chip>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="flex gap-2">
                                            <div className="w-1/2">
                                                <Image
                                                    shadow="sm"
                                                    radius="sm"
                                                    alt={newTitle}
                                                    className="w-full object-cover h-[200px]"
                                                    src={img ? img : "/assets/default-image.jpg"}
                                                />
                                            </div>
                                            <div className="w-1/2">
                                                <p>{newDesc ? newDesc : "brak opisu"}</p>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        <Snackbar
                            anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                            open={state}
                            onClose={handleClose}
                            message="Pola tytuł i opis nie mogą być puste"
                        />
                    </div>
                ) : (
                    <div>
                        <div
                            className="bg-custom-gray-900 w-full rounded-md p-2 flex items-center justify-between sticky top-0 z-20">
                            <div className="flex gap-2">
                                <button className="bg-white rounded-md bg-opacity-0 hover:bg-opacity-20 p-2 flex gap-1"
                                        onClick={() => addPostComponent("desc")}><NotesRoundedIcon/> tekst
                                </button>
                                <button className="bg-white rounded-md bg-opacity-0 hover:bg-opacity-20 p-2 flex gap-1"
                                        onClick={() => addPostComponent("slider")}><BookmarkIcon
                                    className="h-6 w-6 text-white"/> album zdjęć
                                </button>
                                <button className="bg-white rounded-md bg-opacity-0 hover:bg-opacity-20 p-2 flex gap-1"
                                        onClick={() => addPostComponent("file")}><DocumentIcon
                                    className="h-6 w-6 text-white"/> plik do pobrania
                                </button>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    className="flex gap-1 justify-center items-center bg-blue-500 p-1 rounded-md border-2 border-blue-500 hover:bg-custom-gray-900 text-custom-gray-900 hover:text-blue-500"
                                    onClick={() => setPrimaryConfig(true)}><BackwardIcon className="h-6 w-6"/>WSTECZ
                                </button>
                                <button
                                    className="flex gap-1 justify-center items-center bg-green-500 p-1 rounded-md border-2 border-green-500 hover:bg-custom-gray-900 text-custom-gray-900 hover:text-green-500"
                                    onClick={sendPost}>STWÓRZ<PaperAirplaneIcon className="h-6 w-6"/></button>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="min-h-[150px] relative p-2 flex flex-col gap-2">
                                {postComponents.length === 0 ? (
                                        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-custom-gray-700 font-medium">brak
                                            elementów, dodaj nowe</p>)
                                    : (postComponents.map((component) =>
                                        <Postcomponent key={component.id}
                                         type={component.type}
                                         id={component.id}
                                         removePostComponent={removePostComponent}
                                         components={components}
                                         setComponents={setComponents}/>))
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    } else {
        return (
            <UnauthorizedError />
        )
    }
}
