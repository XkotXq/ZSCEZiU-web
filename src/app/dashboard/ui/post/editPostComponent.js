"use client";

import Formatbar from "@/app/dashboard/ui/formatbar";
import {TrashIcon} from "@heroicons/react/20/solid";
import {Editor, EditorState, convertFromRaw, RichUtils, convertToRaw} from 'draft-js';
import "draft-js/dist/Draft.css"
import {useState, useEffect } from "react";
import { Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";


export default function EditPostComponent({ item, setNewContent, newContent, removeComponent }) {
    const {id, type, value} = item
    const [editorState, setEditorState] = useState(null);
    const [newValue, setNewValue] = useState(value)

    const updateObjectInTable = (idForUpdate, newValue) => {
        const updatedTable = newContent.map((object) => {
            if (object.id === idForUpdate) {
                return {...object, ...newValue};
            }
            return object;
        });
        return updatedTable
    }


        const handleChange = (newEditorState) => {
            const contentState = editorState.getCurrentContent();
            const rawContent = convertToRaw(contentState);
            if (newContent.some(component => component.id === id)) {
                const component = newContent.find(item => item.id === id)
                const updateComponent = {...component, value: rawContent}
                const updateComponents = updateObjectInTable(id, updateComponent)
                setNewContent(updateComponents)
            } else {
                const element = {
                    id: id,
                    type: type,
                    value: rawContent
                }
                setNewContent(newContent.concat(element))
            }

            setEditorState(newEditorState);
        };

    const handleChangeUrl = (e) => {
        setNewValue(e.target.value)
        if (newContent.some(component => component.id === id)) {
            const component = newContent.find(item => item.id === id)
            const updateComponent = {...component, value: e.target.value}
            const updateComponents = updateObjectInTable(id, updateComponent)
            setNewContent(updateComponents)
        }
    }


        const editText = (style) => {
            if (editorState === null) return;
            let newEditorState;
            switch (style) {
                case 'BOLD':
                case 'UNDERLINE':
                case 'ITALIC':
                    newEditorState = RichUtils.toggleInlineStyle(editorState, style);
                    break;
                case 'header-one':
                case 'header-two':
                case 'unordered-list-item':
                case 'ordered-list-item':
                    newEditorState = RichUtils.toggleBlockType(editorState, style);
                    break;
                case 'blockquote':
                    newEditorState = RichUtils.toggleBlockType(editorState, 'blockquote');
                    break;
                default:
                    newEditorState = editorState;
            }
            setEditorState(newEditorState);
        }

        switch (type) {
            case "desc":
                useEffect(() => {
                    const loadedRawContentBlocksOnly = {
                        blocks: value.blocks,
                        entityMap: {},
                    };
                    const contentState = convertFromRaw(loadedRawContentBlocksOnly);

                    const neweditorState = EditorState.createWithContent(contentState);
                    setEditorState(neweditorState)
                }, [])
                return (
                    <div className="w-full bg-custom-gray-800 p-2 rounded-md flex gap-2 items-end">
                        <div className="w-full flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <div>
                                    <Formatbar editText={editText}/>
                                </div>
                                <div className="text-custom-gray-600 text-2xl font-medium">
                                    TEKST
                                </div>
                            </div>
                            <div className="bg-custom-gray-900 p-2 rounded-md">
                                {editorState &&
                                    <Editor editorState={editorState} onChange={handleChange}/>

                                }
                            </div>
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
            case "photo":
                return (
                    <div></div>
                );
            case "slider":
                return (
                    <div></div>
                );
            case "video":
                return (
                    <div className="w-full bg-custom-gray-800 p-2 rounded-md flex gap-2 items-end">
                        <div className="w-full flex flex-col gap-2">
                            <div className="flex justify-between">
                                <label htmlFor="url" className="text-custom-gray-600 text-2xl font-medium">LINK DO FILMU</label>
                                <div className="text-custom-gray-600 text-2xl font-medium">
                                    FILM
                                </div>
                            </div>
                            <input name="url" placeholder="link do filmu na youtube" type="text" value={newValue} onChange={(e) => handleChangeUrl(e)} className="bg-custom-gray-900 focus:outline-none p-2 rounded-md"/>
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
            case "file":
                return (
                    <div></div>
                );
        }
    }