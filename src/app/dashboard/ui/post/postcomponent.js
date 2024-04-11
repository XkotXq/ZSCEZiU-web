"use client";
import { TrashIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import {useEffect, useState} from "react";
import "../titles.css"
import { v4 as uuidv4 } from 'uuid';
import Photodropzone from "@/app/dashboard/ui/photodropzone";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Popover, PopoverTrigger, PopoverContent, Image} from "@nextui-org/react";
import TipTap from "@/app/ui/components/tiptap";

export default function Postcomponent({ type, id, removePostComponent, components, setComponents }) {
    const [editorState, setEditorState] = useState("");
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [showSendItemList, setShowSendItemList] = useState(true)
    const [files, setFiles] = useState([])

    useEffect(() => {
        if (components.some(component => component.id === id))
        {
            const foundComponent = components.find(_component => _component.id === id)
            if ( foundComponent.type === "slider") setComponents(updateObjectInTable(id, {value: files}))
            else setComponents(updateObjectInTable(id, {value: editorState}))
        } else {
            const newComponent = {
                id: id,
                type: type,
                value: editorState
            }
            setComponents(components.concat(newComponent))
        }
        console.log("komponenty, useEffect", components)
    }, [editorState, files]);

    const sendFile = (files) => {
        const photoUrls = files.map(file => ({
            url: uuidv4(),
        }));
        if (components.some(component => component.id === id)) {
            const component = components.find(item => item.id === id)
            const updateComponent = {...components, photos: [photoUrls]}
            setComponents(updateComponent)
            console.log("po edycji", updateComponent)

        } else {
            const element = {
                id: id,
                type: type,
                photos: [photoUrls]
            }
            setComponents(components.concat(element))
        }
        const items = files.map(file => ({
            url: uuidv4(),
            files: file
        }));

        setUploadedFiles(uploadedFiles.concat(items))
        console.log(uploadedFiles)
    }

    const updateObjectInTable = (idForUpdate, newValue) => {
        const updatedTable = components.map((obiect) => {
            if (obiect.id === idForUpdate) {
                return { ...obiect, ...newValue };
            }
            return obiect;
        });

        return updatedTable;
    };

    const removeFile = (index) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
    };

    const theme = createTheme({
        palette: {
            mode: 'dark',
            background: {
                default: '#080808',
                paper: '#080808',
            },
            text: {
                primary: 'white',
            },
        },
    });
    const imageDrop = (imageFiles) => {
        if (imageFiles) {
            console.log("drop", imageFiles)
            setFiles(files.concat(imageFiles))
            console.log("pliki", files)
        }
    }
    let totalWeight = 0;
    files.forEach(file => {
        totalWeight += file.size
    });
    switch (type) {
        case "desc":
            return (
            <div className="w-full bg-custom-gray-800 p-2 rounded-md flex gap-2 items-end">
                <div className="w-full flex flex-col gap-2">
                {/*    <div className="flex justify-between items-center">*/}
                {/*        <div>*/}
                {/*            <Formatbar editText={editText}/>*/}
                {/*        </div>*/}
                {/*        <div className="text-custom-gray-600 text-2xl font-medium">*/}
                {/*            TEKST*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="bg-custom-gray-900 p-2 rounded-md">*/}
                {/*    <Editor editorState={editorState} onChange={handleChange}/>*/}
                    <TipTap setTextState={setEditorState}/>
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
                                        onClick={() => removePostComponent(id)}
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
            )
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
                                                onClick={() => removePostComponent(id)}
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
                        {files.length > 0 && (
                            <div className="flex flex-col gap-2 mt-2">
                                <div className="flex justify-between">
                                <h4 className="text-center text-lg">{files.length} wybranych zdjęć</h4>
                                <h4 className="text-center text-lg">{( totalWeight / 8000).toFixed(2)} kb waga wszystkich zdjęć</h4>
                                <button className="text-blue-500 border-2 border-blue-500 p-1 rounded-md hover:bg-blue-500 hover:text-custom-gray-800" onClick={() => setShowSendItemList(!showSendItemList)}>{showSendItemList ? <EyeSlashIcon className="w-6 h-6"/> : <EyeIcon className="w-6 h-6"/>}</button>
                                </div>
                                {showSendItemList && (
                                <div className="flex gap-2 flex-wrap">
                                    {files.map((file, index) => (
                                        <div className="p-2 rounded-md bg-custom-gray-700" key={file.name + index}>
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
            )
        case "file":
            return (
                <div className="w-full bg-custom-gray-800 p-2 rounded-md flex gap-2 items-end">
                    <div className="w-full flex flex-col gap-2">
                        <div className="flex justify-between">
                        <label htmlFor="file" className="text-custom-gray-600 text-2xl font-medium">ETYKIETA PLIKU</label>
                            <div className="text-custom-gray-600 text-2xl font-medium">
                                PLIK
                            </div>
                        </div>
                        <input type="text" placeholder="etykieta pliku" className="bg-custom-gray-900 focus:outline-none p-2 rounded-md" name="file"/>
                        <Photodropzone onImageDrop={(imageFile) => imageDrop(imageFile)} type="files"/>
                    </div>
                    <div className="h-full">
                        <button className="bg-red-500 p-1 rounded-md border-2 border-red-500 hover:bg-custom-gray-800 group" title="usuń element" onClick={() => removePostComponent(id)}><TrashIcon className="h-6 w-6 text-white group-hover:text-red-500" /></button>
                    </div>
                </div>
            )
    }
}
