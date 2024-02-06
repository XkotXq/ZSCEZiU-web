"use client";

import Formatbar from "@/app/dashboard/ui/formatbar";
import {TrashIcon} from "@heroicons/react/20/solid";
import { Editor, EditorState, convertFromRaw, RichUtils } from 'draft-js';
import "draft-js/dist/Draft.css"
import {useState} from "react";

export default function EditPostComponent({ type, value }) {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const loadedRawContentBlocksOnly = {
        blocks: value.blocks,
        entityMap: {},
    };
    const contentState = convertFromRaw(loadedRawContentBlocksOnly);

    setEditorState(EditorState.createWithContent(contentState))


    const editText = (styla) => {
        let newEditorState;
        switch (styla) {
            case 'BOLD':
            case 'UNDERLINE':
            case 'ITALIC':
                newEditorState = RichUtils.toggleInlineStyle(editorState, styla);
                break;
            case 'header-one':
            case 'header-two':
            case 'unordered-list-item':
            case 'ordered-list-item':
                newEditorState = RichUtils.toggleBlockType(editorState, styla);
                break;
            case 'blockquote':
                newEditorState = RichUtils.toggleBlockType(editorState, 'blockquote');
                break;
            default:
                newEditorState = editorState;
        }}

    switch (type) {
        case "desc":
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
                            <Editor editorState={editorState} />
                        </div>
                    </div>
                    <div className="h-full">
                        <button className="bg-red-500 p-1 rounded-md border-2 border-red-500 hover:bg-custom-gray-800 group" title="usuń element" onClick={() => removePostComponent(id)}><TrashIcon className="h-6 w-6 text-white group-hover:text-red-500" /></button>
                    </div>
                </div>
            )
        case "photo":
            return (
                <div></div>
            )
        case "slider":
            return (
                <div></div>
            )
        case "video":
            return (
                <div></div>
            )
        case "file":
            return (
                <div></div>
            )
    }
}