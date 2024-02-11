"use client";
import {useEffect, useState} from "react";
import axios from "axios";
import Boxtag from "@/app/dashboard/ui/boxtag";
import Photodropzone from "@/app/dashboard/ui/photodropzone";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import { Button, Input, CardHeader, CardBody, Image, Card, Chip} from "@nextui-org/react";
import {format} from "date-fns";
import {pl} from "date-fns/locale";
import NotesRoundedIcon from "@mui/icons-material/NotesRounded";
import {BookmarkIcon, DocumentIcon, PhotoIcon, VideoCameraIcon} from "@heroicons/react/20/solid";
import Postcomponent from "@/app/dashboard/ui/post/postcomponent";
import EditPostComponent from "@/app/dashboard/ui/post/editPostComponent";
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/navigation"

export default function page({ params }) {
    const [newTitle, setNewTitle] = useState("Ładowanie...")
    const [newDesc, setNewDesc] = useState("Ładowanie...")
    const [activeTag, setActiveTag] = useState("Ładowanie...")
    const [img, setImg] = useState("")
    const [newPost, setNewPost] = useState({})
    const [content, setContent] = useState([])
    const [isReady, setIsReady] = useState(false)
    const router = useRouter()


    const today = new Date();
    const formattedDate = format(today, 'd MMMM yyyy', { locale: pl });
    useEffect(() => {
    axios
        .get(`http://localhost:3001/api/posts/${params.postId}`)
        .then(res => {
            setContent(res.data.content)
            setNewTitle(res.data.title)
            setNewDesc(res.data.desc)
            setActiveTag(res.data.tags)
            setImg(res.data.img)
            setIsReady(true)
        })
    }, []);

    useEffect(() => {
        const formattedPost = {
            title: newTitle,
            tags: activeTag,
            date: formattedDate,
            img: img,
            desc: newDesc,
        }
        setNewPost(formattedPost)
    }, [newTitle, activeTag, formattedDate, img, newDesc]);

    const handleRemoveComponent = (id) => {
        console.log("id do usuniecia", id)
        const  newState = content.filter(item => item.id !== id)
        setContent(newState)
    }
    const handleSendNewPost = async () => {
        const editedPost = {
            ...newPost,
            content: content
        };
        console.log(editedPost)
        try {
            const res = await fetch(`/api/posts/${params.postId}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(editedPost)
            });

            if (!res.ok) {
                throw new Error("Błąd aktualizowania postu")
            }
            router.push("/dashboard/posts")
        } catch (error) {
            console.log(error)
        }

    }


    const addPostComponent = (type) => {
        switch (type) {
            case "desc":
                const newDescComponent = {
                    id: uuidv4(),
                    type: type,
                    value: {
                        "blocks": [
                            {
                                "key": "kkkcb",
                                "text": "",
                                "type": "unstyled",
                                "depth": 0,
                                "inlineStyleRanges": [],
                                "entityRanges": [],
                                "data": {}
                            }
                        ],
                        "entityMap": {}
                    }
                }
                setContent(content.concat(newDescComponent))
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

        return (
        <div className="flex flex-col gap-2">
            <div className="bg-custom-gray-900 w-full rounded-md p-2 flex justify-between items-center">
                <h2 className="text-2xl">Edytowanie postu</h2>
                <div className="flex gap-2 items-center">
                    <p className="text-custom-gray-600 text-lg">{params.postId}</p>
                    <Button color="primary" onClick={handleSendNewPost} isDisabled={!isReady}>zapisz <SaveRoundedIcon /></Button>
                </div>
            </div>
            <div className="flex gap-2">
                <Card className="w-full p-2  flex flex-col justify-between">
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="title">Tytuł postu</label>
                        <Input type="text" name="title" maxLength={90} isDisabled={!isReady} value={newTitle} onValueChange={setNewTitle} placeholder="podaj swój tytuł"/>
                        <Boxtag activeTag={activeTag} setActiveTag={setActiveTag}/>
                        <label>Wybierz zdjęcie</label>
                        <Photodropzone onImageDrop={(imageFile) => setImg(imageFile)} type="photo"/>
                        <label htmlFor="desc">Opis postu</label>
                        <Input type="text" name="desc" maxLength={150} isDisabled={!isReady} value={newDesc} onValueChange={setNewDesc} placeholder="podaj swój opis"/>

                    </div>
                </Card>
                <div>
                    <Card shadow="sm" className="w-[400px] flex flex-col">
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
            <div className="bg-custom-gray-900 w-full rounded-md p-2 flex items-center justify-between sticky top-0 z-20">
                <div className="flex gap-2">
                    <Button variant="light" isDisabled={!isReady} startContent={<NotesRoundedIcon/>} onClick={() => addPostComponent("desc")}> tekst</Button>
                    <Button variant="light" isDisabled={!isReady} startContent={<PhotoIcon className="h-6 w-6" />} onClick={() => addPostComponent("photo")}> zdjęcie</Button>
                    <Button variant="light" isDisabled={!isReady} startContent={<BookmarkIcon className="h-6 w-6" />} onClick={() => addPostComponent("slider")}> album zdjęć</Button>
                    <Button variant="light" isDisabled={!isReady} startContent={<VideoCameraIcon className="h-6 w-6" />} onClick={() => addPostComponent("video")}> film z youtube</Button>
                    <Button variant="light" isDisabled={!isReady} startContent={<DocumentIcon className="h-6 w-6" />} onClick={() => addPostComponent("file")}> plik do pobrania</Button>
                </div>
                <div>
                    <p className="text-custom-gray-600 text-lg">edytowanie zawartości</p>
                </div>
            </div>
            <div className="w-full">
                <div className="min-h-[150px] relative p-2 flex flex-col gap-2">
                    {content.map(item => <EditPostComponent key={item.id} setNewContent={setContent} newContent={content} item={item} removeComponent={handleRemoveComponent} />)}
                </div>
            </div>

        </div>
    )
}