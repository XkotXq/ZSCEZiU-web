"use client"
import {useEffect, useState} from "react";
import {Button, Card, Input} from "@nextui-org/react";
import TipTap from "../../../ui/components/tiptap";
import TagSellect from "../../../dashboard/ui/tags/tagSellect";
import Photodropzone from "../../../dashboard/ui/photodropzone";
import { useRouter } from "next/navigation";
import {PlusCircleIcon, TrashIcon} from "@heroicons/react/20/solid";
import Image from "next/image";

export default function page({ params }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [files, setFiles] = useState([])
    const [newFiles, setNewFiles] = useState([])
    const [removeFile, setRemoveFile] = useState([])
    const [tags, setTags] = useState([])
    const [author, setAuthor] = useState("")
    const [isFetched, setIsFetched] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const { id } = params
    if (id) console.log(id)
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"

    useEffect(() => {

        const getPost = async () => {
            try {
              const req = await fetch(
                `${apiUrl}/api/services/rejected?id=${id}`,
              );
              if (!req.ok) {
                throw new Error("Nie udało sie pobrać postu");
                return;
              }
              const { post } = await req.json();
              if (post) {
                  setTitle(post.title)
                  setDescription(post.description)
                  setTags(post.tags)
                  setFiles(post.images)
                  setAuthor(post.author)
                  setIsFetched(true)
              }
            } catch (e) {
                console.log("błąd ładowania postu:", e)
            }
        }
        getPost()
    }, []);


    const imageDrop = (imageFiles) => {
        if (imageFiles) {
            console.log("drop", imageFiles)
            setNewFiles(newFiles.concat(imageFiles))
        }
    }
    const deletePhoto1 = (path) => {
        setFiles(prevFiles => prevFiles.filter(file => file !== path))
        setRemoveFile(prevState => prevState.concat(files.find(file => file === path)))
    }
    const deletePhoto2 = (index) => {
        const updatedFiles = [...newFiles];
        updatedFiles.splice(index, 1);
        setNewFiles(updatedFiles);
    };
    const updatePost = async () => {
        setIsLoading(true)
        const links = await sendImages(newFiles)
        await deleteFiles(removeFile)
        const updatedPost = {
            title: title,
            description: description,
            tags: tags,
            images: [...files, ...links],
            author: author,
        }
        try {
            const res = await fetch(`${apiUrl}/api/services/rejected/update/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(updatedPost)
            });
            if (!res.ok) {
                throw new Error("Błąd podczas aktualizowania postu")
            }
            router.replace("/dashboard/improve")
            setIsLoading(false)
        } catch (e) {
            console.log("Błąd podczas wysyłania", e)
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
    return (
        <div className="flex flex-col gap-2">
            <Card className="flex w-full items-center justify-between flex-row p-3">
                    <h1 className="text-3xl">Edytowanie postu</h1>
                <Button
                    endContent={<svg width="50%" height="50%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5004 12H5.00043M4.91577 12.2915L2.58085 19.2662C2.39742 19.8142 2.3057 20.0881 2.37152 20.2569C2.42868 20.4034 2.55144 20.5145 2.70292 20.5567C2.87736 20.6054 3.14083 20.4869 3.66776 20.2497L20.3792 12.7296C20.8936 12.4981 21.1507 12.3824 21.2302 12.2216C21.2993 12.082 21.2993 11.9181 21.2302 11.7784C21.1507 11.6177 20.8936 11.5019 20.3792 11.2705L3.66193 3.74776C3.13659 3.51135 2.87392 3.39315 2.69966 3.44164C2.54832 3.48375 2.42556 3.59454 2.36821 3.74078C2.30216 3.90917 2.3929 4.18255 2.57437 4.72931L4.91642 11.7856C4.94759 11.8795 4.96317 11.9264 4.96933 11.9744C4.97479 12.0171 4.97473 12.0602 4.96916 12.1028C4.96289 12.1508 4.94718 12.1977 4.91577 12.2915Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>}
                    color="success"
                    isDisabled={!isFetched}
                    isLoading={isLoading}
                    onClick={updatePost}
                >
                    Wyślij
                </Button>
            </Card>
            <Card className="p-2 flex flex-col gap-2">
                <Input type="text" label="Tytuł" value={title} onValueChange={setTitle} />

                <p>Opis</p>
                {isFetched &&
                    <TipTap setTextState={setDescription} textState={description} limit={1000}/>
                }
                <p>Tagi</p>
                <TagSellect setActiveTags={setTags} activeTags={tags}/>
                <p>Zdjęcia</p>
                <Photodropzone onImageDrop={(imageFile) => imageDrop(imageFile)} type="slider"/>
                <Input label="autor" value={author} onValueChange={setAuthor} maxLength={30}/>
            </Card>
            {(files.length + newFiles.length) > 0 && (
                <div className="flex gap-2 flex-wrap">
                    {files.map((photo, index) => (
                        <div className="p-2 rounded-md bg-custom-gray-700" key={photo + index}>
                            <div className="w-[100px] h-[100px] overflow-hidden rounded-lg flex items-center justify-center bg-black">
                                <Image className="rounded-none" src={photo} alt={photo} width={100} height={100} />
                            </div>
                            <div className="flex justify-center">
                                <button className="bg-red-500 p-1 rounded-md border-2 border-red-500 hover:bg-custom-gray-800 group" title="usuń element" onClick={() => deletePhoto1(photo)}><TrashIcon className="h-5 w-5 text-white group-hover:text-red-500" /></button>
                            </div>
                        </div>
                    ))}

            {newFiles.map((file, index) => (
                <div className="p-2 rounded-md bg-custom-gray-700" key={file.name + index + "2"}>
                    <div className="w-[100px] h-[100px] overflow-hidden rounded-lg flex items-center justify-center bg-black">
                        <Image className="rounded-none" src={URL.createObjectURL(file)} alt={file.name} width={100} height={100} />
                    </div>
                    <div className="text-align">
                        {( file.size / 8000).toFixed(2)} kb
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-red-500 p-1 rounded-md border-2 border-red-500 hover:bg-custom-gray-800 group" title="usuń element" onClick={() => deletePhoto2(index)}><TrashIcon className="h-5 w-5 text-white group-hover:text-red-500" /></button>
                    </div>
                </div>

            ))}
                </div>
            )}
        </div>
    )
}