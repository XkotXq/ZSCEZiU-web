"use client"

import {
    Button,
    Card,
    Image,
    CardHeader,
    CardBody,
    Divider,
    CardFooter,
    Chip,
    Modal,
    Link,
    ModalContent, ModalHeader, ModalBody, useDisclosure
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import parser from "html-react-parser"
import "../../ui/parseStyle.css"
import {ChevronLeftIcon, ChevronRightIcon, PencilSquareIcon} from "@heroicons/react/20/solid";

export default function page() {
    const { data: session, status } = useSession();
    const [posts, setPosts] = useState([])
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [isFetched, setIsFetched] = useState(false)
    const [activePhoto, setActivePhoto] = useState("")
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
    useEffect(() => {
        const getPosts = async () => {
            try {
                if (!isFetched) {
                    const type = session.user.permission
                    const typePost = type.replace(/uczen/g, '').toLowerCase();
                    console.log(typePost)
                    const res = await fetch(`${apiUrl}/api/services/rejected/${typePost}`, {
                        method: "GET",
                        cache: "no-store",
                    });
                    if (res.ok) {
                        const posts = await res.json();
                        if (posts && posts.posts) {
                            setPosts(posts.posts);
                            setIsFetched(true);
                        }
                    } else {
                        console.log("Błąd pobierania");
                    }
                }
            } catch (e) {
                console.log("Błąd pobierania postów: ", e);
            }
        };
        if (session)
        getPosts();
    }, [session]);
    const openModal = (postId, photoIndex) => {
        onOpen();
        const acPost = posts.filter(post => post.id === postId)
        const photo = {
            post: postId,
            photo: photoIndex,
            value: acPost[0].images[photoIndex]
        }
        setActivePhoto(photo)
    }
    const rightSlide = () => {
        const acPost = posts.filter(post => post.id === activePhoto.post)
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
        const acPost = posts.filter(post => post.id === activePhoto.post)
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
    const removePost = async (id) => {
        try {
            const response = await fetch(`${apiUrl}/api/services/rejected?id=${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (!response.ok) {
                console.log(response)
                throw new Error("Network response was not ok");
            }
            const updatedVerifiablePosts = posts.filter(post => post.id !== id)
            setPosts(updatedVerifiablePosts)
        } catch (e) {
            console.log("Błąd usuwania postu: ", e)
        }
    }
    if (isFetched) console.log(posts)
    return (
        <div className="flex gap-2 flex-col">
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
                <h1 className="md:text-3xl text-xl">Edytowanie niezaakceptowanych postów</h1>
            </Card>
            <div className="flex gap-2 flex-col items-center">
                {
                    posts.map(post => (
                        <Card key={post.id} className="max-w-[800px] w-full">
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
                                    <Button color="primary" variant="shadow" as={Link} href={`/dashboard/improve/${post.id}`}>Edytuj</Button>
                                    <Button color="danger" variant="shadow" onClick={() => removePost(post.id)}>Usuń</Button>
                                </div>
                            </CardFooter>
                        </Card>
                    ))
                }
                {
                    posts.length === 0 && isFetched && <p className="text-2xl text-custom-gray-600">brak postów do edytowania</p>
                }
            </div>
        </div>
    )
}