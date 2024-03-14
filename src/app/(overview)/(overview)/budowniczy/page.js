"use client";
import {Chip, Card, CardHeader, CardBody, CardFooter, Image, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react"
export default function page() {
    const [activeFilterTags, setActiveFilterTags] = useState([])
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [activePhoto, setActivePhoto] = useState("")
    const posts = [
        {
            id: 5353,
            title: "KKKCB",
            description: "Wujek dobra rada, pozdro",
            photos: [
                "/images/c8066d12-676b-41e2-87ef-41005ee336d8.jpg",
                "/images/753de9b3-8cfc-4aba-a532-433af77e4cc7.jpg",
                "/images/315e6f5e-4e01-455c-973d-49c29e511d1e.jpg",
                "/images/82690231-4c24-44f0-96b0-b455b5da0181.jpg"
            ],
            tags: ["klasa II"]
        },
        {
            id: 53653,
            title: "Hejo kolego",
            description: "Bądź sobą",
            photos: [
                "/images/315e6f5e-4e01-455c-973d-49c29e511d1e.jpg",
                "/images/c8066d12-676b-41e2-87ef-41005ee336d8.jpg",
                "/images/c8066d12-676b-41e2-87ef-41005ee336d8.jpg",
                "/images/c8066d12-676b-41e2-87ef-41005ee336d8.jpg",
                "/images/753de9b3-8cfc-4aba-a532-433af77e4cc7.jpg",
                "/images/315e6f5e-4e01-455c-973d-49c29e511d1e.jpg",
                "/images/82690231-4c24-44f0-96b0-b455b5da0181.jpg"
            ],
            tags: ["klasa II"]
        },
    ]
    const openModal = (postId, photoIndex) => {
        onOpen();
        const acPost = posts.filter(post => post.id === postId)
        const photo = {
            post: postId,
            photo: photoIndex,
            value: acPost[0].photos[photoIndex]
        }
        setActivePhoto(photo)
    }
    const rightSlide = () => {
        const acPost = posts.filter(post => post.id === activePhoto.post)
        const numberOfPhotos = acPost[0].photos.length-1
        const newActivePost = {
            0: (activePhoto.photo >= numberOfPhotos) ? 0 : activePhoto.photo + 1
        };
        const updatedActivePhoto = {
            post: activePhoto.post,
            photo: newActivePost[0],
            value: acPost[0].photos[newActivePost[0]]
        }
        setActivePhoto(updatedActivePhoto)
    }
    const leftSlide = () => {
        const acPost = posts.filter(post => post.id === activePhoto.post)
        const numberOfPhotos = acPost[0].photos.length-1
        const newActivePost = {
            0: (activePhoto.photo <= 0) ? numberOfPhotos : activePhoto.photo - 1
        };
        const updatedActivePhoto = {
            post: activePhoto.post,
             photo: newActivePost[0],
             value: acPost[0].photos[newActivePost[0]]
         }
         setActivePhoto(updatedActivePhoto)
    }
    const activePost = posts.filter(post => post.id === activePhoto.post)
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{activePhoto.photo+1} z {activePost[0].photos.length}</ModalHeader>
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
        <div className="flex">
            <div className="mx-auto flex gap-5 flex-col">
            <div className="grow text-center">
                <h1 className="text-3xl font-bold tracking-tight">Blog dla zawodu technik budowlaniec</h1>
                <p className="text-custom-gray-300 dark:text-gray-400">Zobacz nasze ostatnie posty</p>
                <div>
                    <p>filtry</p>
                    <div>
                    <Chip>klasa I</Chip>
                    <Chip>klasa II</Chip>
                    <Chip>klasa III</Chip>
                    <Chip>klasa IV</Chip>
                    <Chip>klasa V</Chip>
                    </div>
                </div>
            </div>
            <div className="overflow-auto grow flex flex-col gap-2">
                {posts.map(post => (
                    // <>
                    <Card key={post.id} className="w-[800px]">
                        <CardHeader><h2 className="text-2xl font-bold">{post.title}</h2></CardHeader>
                        <CardBody className="flex flex-col gap-2">
                            <div>
                                {post.description}
                            </div>
                            <div className="flex gap-2 justify-center">
                                {post.photos.map((photo, index) => {
                                    if (index > 2) return
                                    return (
                                    <Image onClick={() => openModal(post.id, index)} key={photo + index} src={photo} width={200}/>
                                    )
                                })}
                                {
                                    post.photos.length >= 4 && <div className="flex items-center justify-center bg-custom-gray-800 rounded-lg border border-custom-gray-950 w-16 h-16">
                                        <span className=" text-custom-gray-300">+{post.photos.length - 3}</span>
                                    </div>
                                }
                            </div>
                        </CardBody>
                        <CardFooter>
                            {post.tags.map(tag => (<Chip key={tag}>{tag}</Chip>))}
                        </CardFooter>
                    </Card>
                    // </>

                ))}

            </div>
            </div>
        </div>
            </>
    )
}