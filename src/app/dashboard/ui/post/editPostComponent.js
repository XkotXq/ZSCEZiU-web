"use client";

import {ChevronLeftIcon, ChevronRightIcon, EyeIcon, EyeSlashIcon, TrashIcon} from "@heroicons/react/20/solid";
import {useState, useEffect } from "react";
import { Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import TipTap from "../../../ui/components/tiptap";
import Image from "next/image";
import Photodropzone from "../../../dashboard/ui/photodropzone";


export default function EditPostComponent({ item, setNewContent, newContent, removeComponent, deletedImages, setDeletedImages }) {
    const {id, type, value} = item
    const [editorState, setEditorState] = useState(value);
    const [showSendItemList, setShowSendItemList] = useState(true)
    const [addPhotos, setAddPhotos] = useState([])
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
    const updateObjectInTable = (idForUpdate, newValue) => {
        const updatedTable = newContent.map((object) => {
            if (object.id === idForUpdate) {
                return {...object, ...newValue};
            }
            return object;
        });
        return updatedTable
    }
    useEffect(() => {
        if (newContent.some(component => component.id === id)) {
            const component = newContent.find(item => item.id === id)
            let updateComponent = null
            if (component.type === "slider") {
              updateComponent = {
                ...component,
                value: editorState,
                newValue: addPhotos,
              };
            }
            else {
              updateComponent = { ...component, value: editorState };
            }
            const updateComponents = updateObjectInTable(id, updateComponent)
            setNewContent(updateComponents)
        } else {
            const element = {
                id: id,
                type: type,
                value: editorState
            }
            setNewContent(newContent.concat(element))
        }
    }, [editorState, addPhotos])

    const imageDrop = (imageFiles) => {
        if (imageFiles) {
            console.log("drop", imageFiles)
            setAddPhotos(addPhotos.concat(imageFiles))
            console.log("pliki", addPhotos)
        }
    }
    const removeFile = (index) => {
        const updatedFiles = [...addPhotos];
        updatedFiles.splice(index, 1);
        setAddPhotos(updatedFiles);
    };
    const removeFileS = async (link) => {
        const filteredFiles = editorState.filter(photoLink => photoLink !== link)
        setEditorState(filteredFiles)
        const deletedimg = editorState.find(photoLink => photoLink === link)
        setDeletedImages(deletedImages.concat(deletedimg))

    };
    let totalWeight = 0;
    addPhotos.forEach(file => {
        totalWeight += file.size
    });
        switch (type) {
            case "desc":
                return (
                    <div className="w-full bg-custom-gray-800 p-2 rounded-md flex gap-2 items-end">
                        <div className="w-full flex flex-col gap-2">
                           <TipTap setTextState={setEditorState} textState={editorState}/>
                        </div>
                        <div className="h-full">
                            <Popover placement="left" showArrow={true}>
                                <PopoverTrigger>
                                    <button className="bg-red-500 p-1 rounded-md border-2 border-red-500 hover:bg-custom-gray-800 group" title="usuń element"><TrashIcon className="h-6 w-6 text-white group-hover:text-red-500" /></button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <div className="flex flex-col gap-2 p-2">
                                        <div>
                                            <p className="text-lg">Na pewno chcesz usunąć ten post?</p>
                                        </div>
                                        <div>
                                            <button
                                                className="bg-red-500 p-1 rounded-md border-2 border-red-500 hover:bg-custom-gray-800 group"
                                                title="usuń element"
                                                onClick={() => removeComponent(id)}
                                            >
                                                <TrashIcon className="h-6 w-6 text-white group-hover:text-red-500"/>
                                            </button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                );
            case "slider":
                return (
                    <div className="bg-custom-gray-800 p-2 rounded-md">
                        <div className="w-full flex gap-2 items-end">
                            <div className="w-full flex flex-col gap-2">
                                <div className="w-full flex justify-end text-custom-gray-600 text-2xl font-medium">
                                    ALBUM
                                </div>
                                <Photodropzone onImageDrop={(imageFile) => imageDrop(imageFile)} type="slider"/>
                            </div>
                            <div className="h-full">
                                <Popover placement="left" showArrow={true}>
                                    <PopoverTrigger>
                                        <button className="bg-red-500 p-1 rounded-md border-2 border-red-500 hover:bg-custom-gray-800 group" title="usuń element"><TrashIcon className="h-6 w-6 text-white group-hover:text-red-500" /></button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <div className="flex flex-col gap-2 p-2">
                                            <div>
                                                <p className="text-lg">Na pewno chcesz usunąć ten post?</p>
                                            </div>
                                            <div>
                                                <button
                                                    onClick={() => removeComponent(id)}
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
                        </div>
                        <div>
                            {(editorState.length + addPhotos.length) > 0 && (
                                <div className="flex flex-col gap-2 mt-2">
                                    <div className="flex justify-between">
                                        <h4 className="text-center text-lg">{editorState.length + addPhotos.length} wybranych zdjęć</h4>
                                        {addPhotos.length !== 0 && <h4 className="text-center text-lg">{( totalWeight / 8000).toFixed(2)} kb - waga nowo wybranych zdjeć</h4>}
                                        <button className="text-blue-500 border-2 border-blue-500 p-1 rounded-md hover:bg-blue-500 hover:text-custom-gray-800" onClick={() => setShowSendItemList(!showSendItemList)}>{showSendItemList ? <EyeSlashIcon className="w-6 h-6"/> : <EyeIcon className="w-6 h-6"/>}</button>
                                    </div>
                                    {showSendItemList && (
                                        <div className="flex gap-2 flex-wrap">
                                            {editorState.map((photo, index) => (
                                                <div className="p-2 rounded-md bg-custom-gray-700" key={photo + index}>
                                                    <div className="w-[100px] h-[100px] overflow-hidden rounded-lg flex items-center justify-center bg-black">
                                                        <Image className="rounded-none" src={photo} alt={photo} width={100} height={100} />
                                                    </div>
                                                    <div className="flex justify-center">
                                                        <button className="bg-red-500 p-1 rounded-md border-2 border-red-500 hover:bg-custom-gray-800 group" title="usuń element" onClick={() => removeFileS(photo)}><TrashIcon className="h-5 w-5 text-white group-hover:text-red-500" /></button>
                                                    </div>
                                                </div>
                                            ))}

                                    {addPhotos.map((file, index) => (
                                        <div className="p-2 rounded-md bg-custom-gray-700" key={file.name + index + "2"}>
                                            <div className="w-[100px] h-[100px] overflow-hidden rounded-lg flex items-center justify-center bg-black">
                                                <Image className="rounded-none" src={URL.createObjectURL(file)} alt={file.name} width={100} height={100} />
                                            </div>
                                            <div className="text-align">
                                                {( file.size / 8000).toFixed(2)} kb
                                            </div>
                                            <div className="flex justify-center">
                                                <button className="bg-red-500 p-1 rounded-md border-2 border-red-500 hover:bg-custom-gray-800 group" title="usuń element" onClick={() => removeFile(index)}><TrashIcon className="h-5 w-5 text-white group-hover:text-red-500" /></button>
                                            </div>
                                        </div>

                                    ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                );

            case "file":
                return (
                    <div></div>
                );
        }
    }