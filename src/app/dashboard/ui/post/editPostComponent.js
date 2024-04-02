"use client";

import {TrashIcon} from "@heroicons/react/20/solid";
import {useState, useEffect } from "react";
import { Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import TipTap from "@/app/ui/components/tiptap";


export default function EditPostComponent({ item, setNewContent, newContent, removeComponent }) {
    const {id, type, value} = item
    const [editorState, setEditorState] = useState(value);

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
            const updateComponent = {...component, value: editorState}
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
    }, [editorState])

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
                    <div></div>
                );

            case "file":
                return (
                    <div></div>
                );
        }
    }