"use client"
import {Button, Card, CardBody, CardFooter, CardHeader, Chip, Divider, Image} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import {useEffect, useState} from "react";
import TipTap from "@/app/ui/components/tiptap";
import "../../ui/parseStyle.css"
import { Input } from "@nextui-org/react";
import Photodropzone from "@/app/dashboard/ui/photodropzone";
import {useRouter} from "next/navigation";
import TagSellect from "@/app/dashboard/ui/tags/tagSellect";
import parser from "html-react-parser";
import {PencilSquareIcon} from "@heroicons/react/20/solid";

export default function page() {
    const { data: session, status } = useSession();
    const router = useRouter()
    const [textState, setTextState] = useState("")
    const [textTitleValue, setTextTitleValue] = useState("")
    const [files, setFiles] = useState([])
    const [type, setType] = useState("")
    const [author, setAuthor] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isDisabled, setIsDisabled] = useState(true)
    const cleanedState = textState.trim().replace(/<[^>]+>/g, '');
    const [activeTags, setActiveTags] = useState("")
    const [verifiablePosts, setVerifiablePosts] = useState([])
    const [isFetchedPosts, setIsFetchedPosts] = useState(false)
    const [isActiveList, setIsActiveList] = useState(false)
    const [message, setMessage] = useState("")
    const reverseVerifiablePosts = verifiablePosts.slice().reverse()
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"

    useEffect(() => {
        if (session)
            getVerifiablePosts()
    }, [session]);
    const getVerifiablePosts = async () => {
        try {
            const typePost = session?.user.permission.replace(/uczen/g, '').toLowerCase();
            console.log(typePost)
            const response = await fetch(`${apiUrl}/api/services/verifiable/${typePost}`, {
                method: "GET",
                cache: "no-store"
            });
            if (!response.ok) {
                throw new Error("Nie udało się pobrać postów")
            } else {
                const servicePosts = await response.json()
                setVerifiablePosts(servicePosts.posts)
                setIsFetchedPosts(true)
                console.log(servicePosts.posts)
            }
        } catch (e) {
            console.log("Błąd pobierania postów: ", e)
        }
    }

    useEffect(() => {
        if (session) {
            setType(session.user.permission)

            console.log(status)
        }
    }, [session])
    useEffect(() => {
        if (type && textTitleValue !== "" && cleanedState !== "") setIsDisabled(false)
        else setIsDisabled(true)
    }, [textState, textTitleValue, type]);
    useEffect(() => {
        if (message) {
            setTimeout(() => {
                setMessage("")
            }, 3000)
        }
    }, [message])
    const imageDrop = (imageFiles) => {
        if (imageFiles) {
            console.log("drop", imageFiles)
            setFiles(files.concat(imageFiles))
        }
    }
    const removePhoto = (imgFile) => {
        console.log(files)
        setFiles(files.filter(once => once.name !== imgFile.name))
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
            return responseData.files;
        } catch (e) {
            console.error("Błąd podczas przesyłania plików:", e);
        }
    };



    const sendPost = async () => {
        if (type && textTitleValue !== "" && cleanedState !== "") {
            try {
                setIsLoading(true)
                const uploadedFiles = await sendImages(files);
                const typePost = type.replace(/uczen/g, '').toLowerCase();
                const authorPost = author !== "" ? author : type.includes("uczen") ? "uczeń" : "admin"
                const newPost = {
                    title: textTitleValue,
                    description: textState,
                    serviceType: typePost,
                    images: uploadedFiles,
                    tags: activeTags,
                    author: authorPost
                }
                setTextTitleValue("")
                setTextState("")
                setFiles([])
                console.log(newPost)
                const response = await fetch(`${apiUrl}/api/services`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newPost)
                })
                if (!response.ok) {
                    throw new Error("Network response was not ok")
                }
                const data = await response.json()
                console.log("Response: ", data)
                setMessage("wysłano post do sprawdzenia")
                setVerifiablePosts(verifiablePosts.concat(data))
            } catch(e) {
                console.log("error", e)

            }

            setIsLoading(false)
        } else {
            console.log("test");
            console.log(type, textState, textTitleValue);
        }
    }
    return(
        <div className="flex flex-col gap-2">
            <Card className="w-full p-3 flex justify-between flex-row items-center">
                <h1 className="md:text-3xl text-xl">Tworzenie postu</h1>
                <Button
                    onClick={sendPost}
                    isDisabled={isDisabled}
                    endContent={<svg width="50%" height="50%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5004 12H5.00043M4.91577 12.2915L2.58085 19.2662C2.39742 19.8142 2.3057 20.0881 2.37152 20.2569C2.42868 20.4034 2.55144 20.5145 2.70292 20.5567C2.87736 20.6054 3.14083 20.4869 3.66776 20.2497L20.3792 12.7296C20.8936 12.4981 21.1507 12.3824 21.2302 12.2216C21.2993 12.082 21.2993 11.9181 21.2302 11.7784C21.1507 11.6177 20.8936 11.5019 20.3792 11.2705L3.66193 3.74776C3.13659 3.51135 2.87392 3.39315 2.69966 3.44164C2.54832 3.48375 2.42556 3.59454 2.36821 3.74078C2.30216 3.90917 2.3929 4.18255 2.57437 4.72931L4.91642 11.7856C4.94759 11.8795 4.96317 11.9264 4.96933 11.9744C4.97479 12.0171 4.97473 12.0602 4.96916 12.1028C4.96289 12.1508 4.94718 12.1977 4.91577 12.2915Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>}
                    color="success"
                    isLoading={isLoading}
                >
                    Wyślij
                </Button>
            </Card>
            {isLoading && <Card className="p-2 text-center w-full md:text-md tex-sm bg-warning"><p>wysyłanie postu{files.length > 0 && ', wysyłąsz zdjęcia może potrwać znacznie dłużej, w zależności od twojego połączenia'}</p></Card>}
            {message && <Card className="p-2 text-center w-full md:text-md tex-sm bg-success"><p>wysłano post do sprawdzenia</p></Card>}
            <Card className="p-2 flex flex-col gap-2">
                <Input type="text" label="Tytuł" value={textTitleValue} onValueChange={setTextTitleValue} />
                <p>Opis</p>
                <TipTap setTextState={setTextState} textState={textState} limit={1000}/>
                {!type.includes("uczen") &&
                    <>
                        <p>Tagi</p>
                        <TagSellect setActiveTags={setActiveTags} activeTags={activeTags}/>
                    </>
                }
                <p>Zdjęcia</p>
                <Photodropzone onImageDrop={(imageFile) => imageDrop(imageFile)} type="slider"/>
                <Input label="autor" value={author} onValueChange={setAuthor} maxLength={30}/>
            </Card>
            <div className="flex flex-row flex-wrap gap-2">
                {files.map((imgFile, index) => <Card key={imgFile.name + index} className="p-1 flex flex-col gap-1 justify-end">
                    <Image className="rounded-lg" src={URL.createObjectURL(imgFile)} alt={imgFile.name} width={100}/>
                    <Button onClick={() => removePhoto(imgFile)}>usuń</Button>
                </Card>)}
            </div>
            <Card className="w-full p-3 flex items-center flex-row justify-between gap-2">
                <h2 className="md:text-2xl text-lg text-custom-gray-300">{isFetchedPosts ? verifiablePosts.length > 0 ? `Posty oczekujące na akceptacje przez admina (${verifiablePosts.length})` : "Brak postów oczekujących na akceptacje przez admina" : "Ładowanie..."}</h2>
                <Button onClick={() => setIsActiveList(!isActiveList)}>{isActiveList ? "schowaj posty" : "pokaż posty"}</Button>
            </Card>
            <div className="flex justify-center gap-2 flex-col items-center">
                {
                   isActiveList && reverseVerifiablePosts.map(post => (
                        <Card key={post.id} className="w-[800px]">
                            <CardHeader><h2 className="text-2xl font-medium">{parser(post.title)}</h2></CardHeader>
                            <Divider/>
                            <CardBody className="flex flex-col gap-2">
                                <div className="boxParse">
                                    {parser(post.description)}
                                </div>
                                <div className="flex gap-2 justify-center">
                                    {post.images.map((photo, index) => {
                                        if (index > 2) return null;
                                        return (
                                            <Image src={photo} width={200}/>
                                        );
                                    })}
                                    {
                                        post.images.length >= 4 && (
                                            <div className="flex items-center justify-center bg-custom-gray-800 rounded-lg border border-custom-gray-950 w-16 h-16">
                                                <span className="text-custom-gray-300">+{post.images.length - 3}</span>
                                            </div>
                                        )
                                    }
                                </div>
                            </CardBody>
                            <Divider/>
                            <CardFooter className="flex flex-col gap-2">
                                <div className="flex flex-row justify-between w-full">
                                    <div>
                                        {post.tags.length > 0 ? post.tags.map(tag => (<Chip key={tag}>{tag}</Chip>)) : <Chip>brak tagu</Chip>}
                                    </div>
                                    <div>
                                        <Chip startContent={<PencilSquareIcon className="h-4 w-4" />} variant="shadow" color="warning">{post.author ? post.author : "anonimowy"}</Chip>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}