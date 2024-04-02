"use client";
import {Chip, Card, CardHeader, CardBody, CardFooter, Image, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Divider} from "@nextui-org/react";
import {ChevronLeftIcon, ChevronRightIcon, PencilSquareIcon} from "@heroicons/react/20/solid";
import { useState, useEffect } from "react"
import parser from "html-react-parser";
export default function page({ params }) {
    const [filterTags, setFilterTags] = useState(["klasa I", "klasa II", "klasa III", "klasa IV", "klasa V"])
    const [activeFilterTags, setActiveFilterTags] = useState([])
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [activePhoto, setActivePhoto] = useState("")
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState(posts)
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"

    useEffect(() => {
        getPosts()
    }, [])
    const getPosts = async () => {
        try {
            const res = await fetch(`${apiUrl}/api/services/accepted/ti`)
            if (!res.ok) {
                new Error("Nie udało się pobrać postów")
            }
            const Dposts = await res.json()
            console.log(Dposts)
            setPosts(Dposts.posts)
        } catch (e) {
            console.log("error", e)
        }
    }
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
        const numberOfPhotos = acPost[0].images.length-1
        const newActivePost = {
            0: (activePhoto.photo >= numberOfPhotos) ? 0 : activePhoto.photo + 1
        };
        const updatedActivePhoto = {
            post: activePhoto.post,
            photo: newActivePost[0],
            value: acPost[0].images[newActivePost[0]]
        }
        setActivePhoto(updatedActivePhoto)
    }
    const leftSlide = () => {
        const acPost = posts.filter(post => post.id === activePhoto.post)
        const numberOfPhotos = acPost[0].images.length-1
        const newActivePost = {
            0: (activePhoto.photo <= 0) ? numberOfPhotos : activePhoto.photo - 1
        };
        const updatedActivePhoto = {
            post: activePhoto.post,
            photo: newActivePost[0],
            value: acPost[0].images[newActivePost[0]]
        }
        setActivePhoto(updatedActivePhoto)
    }
    const activePost = posts.filter(post => post.id === activePhoto.post)

    const switchFilterTags = (tag) => {
        if (activeFilterTags.some(filterTag => filterTag === tag)) {
            setActiveFilterTags(activeFilterTags.filter(activeTag => activeTag !== tag))
        } else {
            setActiveFilterTags(activeFilterTags.concat(tag))
        }
    }

    useEffect(() => {
        if (activeFilterTags.length === 0) {
            setFilteredPosts(posts)
        } else {
            setFilteredPosts(posts.filter(post =>
                activeFilterTags.some(tag => post.tags.includes(tag))
            ))}

    }, [activeFilterTags]);
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{activePhoto.photo+1} z {activePost[0].images.length}</ModalHeader>
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
            <div className="flex flex-col">
                <div className="bg-cover relative">
                    <Image src="/images/753de9b3-8cfc-4aba-a532-433af77e4cc7.jpg" alt={"baner - budowlanka"} width={2000}  className=" h-[300px] object-cover"/>
                    <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center bg-black bg-opacity-40 p-3 rounded-xl">
                        <h1 className="text-3xl font-bold tracking-tight">Blog dla zawodu technik informatyk</h1>
                        <p className="text-custom-gray-50 text-lg">Zobacz nasze ostatnie posty</p>
                    </div>
                </div>
                <div className="mx-auto flex gap-3 flex-col">
                    <div className="grow text-center mt-2">
                        <div className="bg-custom-gray-900 rounded-md p-3 text-start flex flex-col gap-2 w-[800px]">
                            <h3 className="text-xl font-bold">Filtry</h3>
                            <div className="flex flex-wrap gap-2 h-8 items-center">
                                {filterTags.map(tag => (
                                    <Chip key={tag} variant={activeFilterTags.some(activeTag => activeTag === tag)? "solid": "light"} className="cursor-pointer select-none" onClick={() => switchFilterTags(tag)}>
                                        {tag}
                                    </Chip>
                                ))}
                                <Divider orientation="vertical" />

                            </div>
                        </div>
                    </div>
                    <div className="overflow-auto grow flex flex-col gap-2 mx-auto">
                        {posts.length === 0 && (<div className="flex flex-wrap gap-2">brak postów z obecnie ustawionymi filtrami: {activeFilterTags.map(tag => (<Chip key={tag} variant="light">{tag}</Chip>))}</div>) }
                        {posts.map(post => (
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
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}