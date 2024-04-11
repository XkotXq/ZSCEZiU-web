"use client"

import {
    Card,
    CardHeader,
    CardBody,
    Image,
    CardFooter,
    Chip,
    Button,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Divider,
    useDisclosure
} from "@nextui-org/react";
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import parser from "html-react-parser"
import {ChevronLeftIcon, ChevronRightIcon, PencilSquareIcon } from "@heroicons/react/20/solid";
import "../../ui/parseStyle.css"

export default function page() {
    const { data: session, status } = useSession();
    const [verifiablePosts, setVerifiablePosts] = useState([])
    const [rejectedPosts, setRejectedPosts] = useState([])
    const [activePhoto, setActivePhoto] = useState("")
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"

    useEffect(() => {
        if (session)
        getVerifiablePosts()
    }, [session]);
    const getVerifiablePosts = async () => {
        try {
            const typePost = session?.user.permission.replace(/admin/g, '').toLowerCase();
            const response = await fetch(`${apiUrl}/api/services/verifiable/${typePost}`, {
                method: "GET",
                cache: "no-store"
            });
            if (!response.ok) {
                throw new Error("Nie udało się pobrać postów")
            } else {
                const servicePosts = await response.json()
                setVerifiablePosts(servicePosts.posts)
            }
        } catch (e) {
            console.log("Błąd pobierania postów: ", e)
        }
    }

    const openModal = (postId, photoIndex) => {
        onOpen();
        const acPost = verifiablePosts.filter(post => post.id === postId)
        const photo = {
            post: postId,
            photo: photoIndex,
            value: acPost[0].images[photoIndex]
        }
        setActivePhoto(photo)
    }
    const rightSlide = () => {
        const acPost = verifiablePosts.filter(post => post.id === activePhoto.post)
        if (acPost[0].images.length === 1) return
        const numberOfPhotos = acPost[0].images.length-1
        const newActivePost = {
            0: (activePhoto.image >= numberOfPhotos) ? 0 : activePhoto.images + 1
        };
        const updatedActivePhoto = {
            post: activePhoto.post,
            images: newActivePost[0],
            value: acPost[0].images[newActivePost[0]]
        }
        setActivePhoto(updatedActivePhoto)
    }
    const leftSlide = () => {
        const acPost = verifiablePosts.filter(post => post.id === activePhoto.post)
        if (acPost[0].images.length === 1) return
        const numberOfPhotos = acPost[0].images.length-1
        const newActivePost = {
            0: (activePhoto.images <= 0) ? numberOfPhotos : activePhoto.images - 1
        };
        const updatedActivePhoto = {
            post: activePhoto.post,
            images: newActivePost[0],
            value: acPost[0].images[newActivePost[0]]
        }
        setActivePhoto(updatedActivePhoto)
    }

    const verifiabledPost = async (id, newType) => {
        const foracceptPost = verifiablePosts.find(post => post.id === id)
        const acceptedPost = {...foracceptPost, state: newType}
        try {
            const response = await fetch(`${apiUrl}/api/services?id=${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(acceptedPost),
            })
            if (!response.ok) {
                console.log(response)
                throw new Error("Network response was not ok");
            }
            const updatedVerifiablePosts = verifiablePosts.filter(post => post.id !== id)
            setVerifiablePosts(updatedVerifiablePosts)
        } catch (e) {
            console.log("Błąd zminany statusu postu: ", e)
        }
        
        
    }
    const removePost = async (id) => {
        try {
            const response = await fetch(`${apiUrl}/api/services?id=${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (!response.ok) {
                console.log(response)
                throw new Error("Network response was not ok");
            }
            const updatedVerifiablePosts = verifiablePosts.filter(post => post.id !== id)
            setVerifiablePosts(updatedVerifiablePosts)
        } catch (e) {
            console.log("Błąd usuwania postu: ", e)
        }
    }
    return (
        <div className="flex flex-col gap-2">
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">elo</ModalHeader>
                            <ModalBody className="flex flex-row">
                                <div onClick={leftSlide} className="flex items-center cursor-pointer">
                                    <ChevronLeftIcon className="h-10 w-10 text-custom-gray-300" />
                                </div>
                                <div className="select-none">
                                    <Image src={activePhoto.value} width={1000} className="select-none"/>
                                </div>
                                <div onClick={rightSlide} className="flex items-center cursor-pointer">
                                    <ChevronRightIcon className="h-10 w-10 text-custom-gray-300" />
                                </div>

                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Card className="w-full p-3 flex justify-between flex-row items-center">
                <h1 className="text-3xl">Sprawdzanie postów</h1>
            </Card>
            <Card>
                    <h1>Do sprawdzenia</h1>
            </Card>
            <div className="flex flex-col gap-2 items-center">
                {verifiablePosts.map(post => (
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
                                        <Image onClick={() => openModal(post.id, index)} key={photo + index} src={photo} width={200}/>
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
                            <div className="flex flex-row gap-2 justify-end w-full">
                                <Button color="success" variant="shadow" onClick={() => verifiabledPost(post.id, "accepted")}>Akceptuj</Button>
                                <Button color="warning" variant="shadow" onClick={() => verifiabledPost(post.id, "rejected")}>Odrzuć</Button>
                                <Button color="primary" variant="shadow">Edytuj</Button>
                                <Button color="danger" variant="shadow" onClick={() => removePost(post.id)}>Usuń</Button>
                            </div>
                        </CardFooter>
                    </Card>
                ))}

            </div>
            <Card>
                <CardHeader>
                    <h1>Odrzucone (będzie odesłane i uczeń będzie mógł poprawić i wysłać ponownie)</h1>
                </CardHeader>
                <CardBody>

                </CardBody>
            </Card>
        </div>
    )
}