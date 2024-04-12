"use client"
import './style.css'

import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import {EditorContent, EditorProvider, useCurrentEditor, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from "@tiptap/extension-underline"
import {Button, ButtonGroup, Popover, PopoverTrigger, PopoverContent, Input } from "@nextui-org/react";
import Link from "@tiptap/extension-link"
import Youtube from  "@tiptap/extension-youtube"
import CharacterCount from "@tiptap/extension-character-count"
import {useState} from "react";

const MenuBar = () => {
    const { editor } = useCurrentEditor()
    const [valueLink, setValueLink] = useState("")
    const [valueVideoLink, setValueVideoLink] = useState("")

    if (!editor) {
        return null
    }

    return (
        <div className="flex gap-2 justify-between md:flex-row flex-col-reverse">
            <div className="flex gap-2 flex-wrap">
            <ButtonGroup>
                <Button
                isIconOnly
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleBold()
                        .run()
                }
                className={editor.isActive('bold') ? 'bg-custom-gray-800' : ''}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" className="bi bi-type-bold" viewBox="0 0 16 16">
                    <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"/>
                </svg>
            </Button>
                <Button
                isIconOnly
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleBold()
                        .run()
                }
                className={editor.isActive('underline') ? 'bg-custom-gray-800' : ''}
            >
                    <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" className="bi bi-type-underline" viewBox="0 0 16 16">
                        <path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57s-2.687-1.08-2.687-2.57zM12.5 15h-9v-1h9z"/>
                    </svg>
            </Button>
            <Button
                isIconOnly
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleItalic()
                        .run()
                }
                className={editor.isActive('italic') ? 'bg-custom-gray-800' : ''}
            >
                <svg width="70%" height="70%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 4H10M14 20H5M15 4L9 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Button>
            <Button
                isIconOnly
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleStrike()
                        .run()
                }
                className={editor.isActive('strike') ? 'bg-custom-gray-800' : ''}
            >
                <svg width="70%" height="70%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 16C6 18.2091 7.79086 20 10 20H14C16.2091 20 18 18.2091 18 16C18 13.7909 16.2091 12 14 12M18 8C18 5.79086 16.2091 4 14 4H10C7.79086 4 6 5.79086 6 8M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Button>
            </ButtonGroup>
            <ButtonGroup>
            <Button isIconOnly onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                <svg width="70%" height="70%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.9995 13L10.9995 6.00004M20.9995 21H7.99955M10.9368 20.0628L19.6054 11.3941C20.7935 10.2061 21.3875 9.61207 21.6101 8.92709C21.8058 8.32456 21.8058 7.67551 21.6101 7.07298C21.3875 6.388 20.7935 5.79397 19.6054 4.60592L19.3937 4.39415C18.2056 3.2061 17.6116 2.61207 16.9266 2.38951C16.3241 2.19373 15.675 2.19373 15.0725 2.38951C14.3875 2.61207 13.7935 3.2061 12.6054 4.39415L4.39366 12.6059C3.20561 13.794 2.61158 14.388 2.38902 15.073C2.19324 15.6755 2.19324 16.3246 2.38902 16.9271C2.61158 17.6121 3.20561 18.2061 4.39366 19.3941L5.06229 20.0628C5.40819 20.4087 5.58114 20.5816 5.78298 20.7053C5.96192 20.815 6.15701 20.8958 6.36108 20.9448C6.59126 21 6.83585 21 7.32503 21H8.67406C9.16324 21 9.40784 21 9.63801 20.9448C9.84208 20.8958 10.0372 20.815 10.2161 20.7053C10.418 20.5816 10.5909 20.4087 10.9368 20.0628Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Button>
            <Button isIconOnly onClick={() => editor.chain().focus().clearNodes().run()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" className="bi bi-eraser" viewBox="0 0 16 16">
                    <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293z"/>
                </svg>
            </Button>
            </ButtonGroup>
            <Button
                isIconOnly
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={editor.isActive('paragraph') ? 'bg-custom-gray-800' : ''}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" className="bi bi-paragraph" viewBox="0 0 16 16">
                    <path d="M10.5 15a.5.5 0 0 1-.5-.5V2H9v12.5a.5.5 0 0 1-1 0V9H7a4 4 0 1 1 0-8h5.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-.5.5"/>
                </svg>
            </Button>
            <ButtonGroup>
            <Button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor.isActive('heading', { level: 1 }) ? 'bg-custom-gray-800' : ''}
                isIconOnly
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" className="bi bi-type-h1" viewBox="0 0 16 16">
                    <path d="M7.648 13V3H6.3v4.234H1.348V3H0v10h1.348V8.421H6.3V13zM14 13V3h-1.333l-2.381 1.766V6.12L12.6 4.443h.066V13z"/>
                </svg>
            </Button>
            <Button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive('heading', { level: 2 }) ? 'bg-custom-gray-800' : ''}
                isIconOnly
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" className="bi bi-type-h2" viewBox="0 0 16 16">
                    <path d="M7.495 13V3.201H6.174v4.15H1.32V3.2H0V13h1.32V8.513h4.854V13zm3.174-7.071v-.05c0-.934.66-1.752 1.801-1.752 1.005 0 1.76.639 1.76 1.651 0 .898-.582 1.58-1.12 2.19l-3.69 4.2V13h6.331v-1.149h-4.458v-.079L13.9 8.786c.919-1.048 1.666-1.874 1.666-3.101C15.565 4.149 14.35 3 12.499 3 10.46 3 9.384 4.393 9.384 5.879v.05z"/>
                </svg>
            </Button>
            <Button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={editor.isActive('heading', { level: 3 }) ? 'bg-custom-gray-800' : ''}

                isIconOnly
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" className="bi bi-type-h3" viewBox="0 0 16 16">
                    <path d="M11.07 8.4h1.049c1.174 0 1.99.69 2.004 1.724s-.802 1.786-2.068 1.779c-1.11-.007-1.905-.605-1.99-1.357h-1.21C8.926 11.91 10.116 13 12.028 13c1.99 0 3.439-1.188 3.404-2.87-.028-1.553-1.287-2.221-2.096-2.313v-.07c.724-.127 1.814-.935 1.772-2.293-.035-1.392-1.21-2.468-3.038-2.454-1.927.007-2.94 1.196-2.981 2.426h1.23c.064-.71.732-1.336 1.744-1.336 1.027 0 1.744.64 1.744 1.568.007.95-.738 1.639-1.744 1.639h-.991V8.4ZM7.495 13V3.201H6.174v4.15H1.32V3.2H0V13h1.32V8.513h4.854V13z"/>
                </svg>
            </Button>
            <Button
                onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                className={editor.isActive('heading', { level: 4 }) ? 'bg-custom-gray-800' : ''}

                isIconOnly
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" className="bi bi-type-h4" viewBox="0 0 16 16">
                    <path d="M13.007 3H15v10h-1.29v-2.051H8.854v-1.18C10.1 7.513 11.586 5.256 13.007 3m-2.82 6.777h3.524v-5.62h-.074a95 95 0 0 0-3.45 5.554zM7.495 13V3.201H6.174v4.15H1.32V3.2H0V13h1.32V8.513h4.854V13z"/>
                </svg>
            </Button>
            <Button
                onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                className={editor.isActive('heading', { level: 5 }) ? 'bg-custom-gray-800' : ''}
                isIconOnly
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" className="bi bi-type-h5" viewBox="0 0 16 16">
                    <path d="M9 10.516h1.264c.193.976 1.112 1.364 2.01 1.364 1.005 0 2.067-.782 2.067-2.247 0-1.292-.983-2.082-2.089-2.082-1.012 0-1.658.596-1.924 1.077h-1.12L9.646 3h5.535v1.141h-4.415L10.5 7.28h.072c.201-.316.883-.84 1.967-.84 1.709 0 3.13 1.177 3.13 3.158 0 2.025-1.407 3.403-3.475 3.403-1.809 0-3.1-1.048-3.194-2.484ZM7.495 13V3.201H6.174v4.15H1.32V3.2H0V13h1.32V8.512h4.854V13z"/>
                </svg>
            </Button>
            <Button
                onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                className={editor.isActive('heading', { level: 6 }) ? 'bg-custom-gray-800' : ''}

                isIconOnly
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" className="bi bi-type-h6" viewBox="0 0 16 16">
                    <path d="M15.596 5.178H14.3c-.106-.444-.62-1.072-1.706-1.072-1.332 0-2.325 1.269-2.325 3.947h.07c.268-.67 1.043-1.445 2.445-1.445 1.494 0 3.017 1.064 3.017 3.073C15.8 11.795 14.37 13 12.48 13c-1.036 0-2.093-.36-2.77-1.452C9.276 10.836 9 9.808 9 8.37 9 4.656 10.494 3 12.636 3c1.812 0 2.883 1.113 2.96 2.178m-5.151 4.566c0 1.367.944 2.15 2.043 2.15 1.128 0 2.037-.684 2.037-2.136 0-1.41-1-2.065-2.03-2.065-1.19 0-2.05.853-2.05 2.051M7.495 13V3.201H6.174v4.15H1.32V3.2H0V13h1.32V8.513h4.854V13z"/>
                </svg>
            </Button>
            </ButtonGroup>
                <ButtonGroup>
            <Button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'bg-custom-gray-800' : ''}
                isIconOnly
            >
                <svg width="70%" height="70%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12L9 12M21 6L9 6M21 18L9 18M5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12ZM5 6C5 6.55228 4.55228 7 4 7C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5C4.55228 5 5 5.44772 5 6ZM5 18C5 18.5523 4.55228 19 4 19C3.44772 19 3 18.5523 3 18C3 17.4477 3.44772 17 4 17C4.55228 17 5 17.4477 5 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Button>
            <Button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'bg-custom-gray-800' : ''}
                isIconOnly
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" className="bi bi-list-ol" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"/>
                    <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635z"/>
                </svg>
            </Button>
            </ButtonGroup>
            <ButtonGroup>
            <Button
                isIconOnly
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleCode()
                        .run()
                }
                className={editor.isActive('code') ? 'bg-custom-gray-800' : ''}
            >
                <svg width="70%" height="70%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Button>
            <Button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive('codeBlock') ? 'bg-custom-gray-800' : ''}
                isIconOnly
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
                </svg>
            </Button>
            </ButtonGroup>
                <ButtonGroup>
            <Button
                onClick={() => {
                    if (valueLink !== "" && (valueLink.startsWith("http://") || valueLink.startsWith("https://"))) {
                        editor.chain().focus().toggleLink({ href: valueLink }).run();
                        setValueLink("");
                    }
                }}
                className={editor.isActive('link') ? 'bg-custom-gray-800' : ''}
                isIconOnly
            >
                <svg width="70%" height="70%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99999 13C10.4294 13.5741 10.9773 14.0491 11.6065 14.3929C12.2357 14.7367 12.9315 14.9411 13.6466 14.9923C14.3618 15.0435 15.0796 14.9403 15.7513 14.6897C16.4231 14.4392 17.0331 14.047 17.54 13.54L20.54 10.54C21.4508 9.59695 21.9547 8.33394 21.9434 7.02296C21.932 5.71198 21.4061 4.45791 20.4791 3.53087C19.552 2.60383 18.298 2.07799 16.987 2.0666C15.676 2.0552 14.413 2.55918 13.47 3.46997L11.75 5.17997M14 11C13.5705 10.4258 13.0226 9.95078 12.3934 9.60703C11.7642 9.26327 11.0685 9.05885 10.3533 9.00763C9.63819 8.95641 8.9204 9.0596 8.24864 9.31018C7.57688 9.56077 6.96687 9.9529 6.45999 10.46L3.45999 13.46C2.5492 14.403 2.04522 15.666 2.05662 16.977C2.06801 18.288 2.59385 19.542 3.52089 20.4691C4.44793 21.3961 5.702 21.9219 7.01298 21.9333C8.32396 21.9447 9.58697 21.4408 10.53 20.53L12.24 18.82" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Button>
            <Popover placement="bottom">
                <PopoverTrigger>
                    <Button
                        isIconOnly
                    >
                        <svg width="70%" height="70%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <Input type="text" label="link" value={valueLink} onValueChange={setValueLink}/>
                </PopoverContent>
            </Popover>
                </ButtonGroup>
                <ButtonGroup>
            <Button
                onClick={() => {
                    if (valueVideoLink !== "" && (valueVideoLink.startsWith("http://") || valueVideoLink.startsWith("https://"))) {
                        editor.chain().focus().setYoutubeVideo({
                            src: valueVideoLink,
                            width: 640,
                            height: 480,
                        }).run();
                        setValueVideoLink("");
                    }
                }}
                isIconOnly
            >
                <svg width="70%" height="70%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5813 7.19989C21.4733 6.76846 21.2534 6.37318 20.9438 6.05395C20.6341 5.73473 20.2457 5.50287 19.8178 5.3818C18.2542 5 12 5 12 5C12 5 5.74578 5 4.18222 5.41816C3.75429 5.53923 3.36588 5.77109 3.05623 6.09031C2.74659 6.40954 2.52666 6.80482 2.41868 7.23625C2.13253 8.82303 1.99255 10.4327 2.00052 12.0451C1.99032 13.6696 2.1303 15.2916 2.41868 16.8903C2.53773 17.3083 2.76258 17.6886 3.0715 17.9943C3.38043 18.3 3.76299 18.5209 4.18222 18.6357C5.74578 19.0538 12 19.0538 12 19.0538C12 19.0538 18.2542 19.0538 19.8178 18.6357C20.2457 18.5146 20.6341 18.2827 20.9438 17.9635C21.2534 17.6443 21.4733 17.249 21.5813 16.8176C21.8653 15.2427 22.0052 13.6453 21.9995 12.0451C22.0097 10.4206 21.8697 8.79862 21.5813 7.19989Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.75 9.46533C9.75 8.98805 9.75 8.74941 9.84974 8.61618C9.93666 8.50008 10.0697 8.42744 10.2144 8.4171C10.3804 8.40525 10.5811 8.53429 10.9826 8.79239L14.9254 11.3271C15.2738 11.551 15.448 11.663 15.5082 11.8054C15.5607 11.9298 15.5607 12.0702 15.5082 12.1946C15.448 12.337 15.2738 12.449 14.9254 12.6729L10.9826 15.2076C10.5811 15.4657 10.3804 15.5948 10.2144 15.5829C10.0697 15.5726 9.93666 15.4999 9.84974 15.3838C9.75 15.2506 9.75 15.012 9.75 14.5347V9.46533Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Button>
            <Popover placement="bottom">
                <PopoverTrigger>
                    <Button
                        isIconOnly
                    >
                        <svg width="70%" height="70%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <Input type="text" label="link do filmu na youtube" value={valueVideoLink} onValueChange={setValueVideoLink}/>
                </PopoverContent>
            </Popover>
                </ButtonGroup>

                <Button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? 'bg-custom-gray-800' : ''}
                isIconOnly
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                </svg>
            </Button>
            <Button isIconOnly onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                <svg width="70%" height="70%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8.5H21M3 15.5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Button>
            <Button isIconOnly onClick={() => editor.chain().focus().setHardBreak().run()}>
                <svg width="70%" height="70%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6H21M3 12H18C18.7956 12 19.5587 12.3161 20.1213 12.8787C20.6839 13.4413 21 14.2044 21 15C21 15.7956 20.6839 16.5587 20.1213 17.1213C19.5587 17.6839 18.7956 18 18 18H14M14 18L16 16M14 18L16 20M3 18H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Button>
            <Button
                onClick={() => editor.chain().focus().unsetColor().run()}
                className={`text-[#ffffff] ${editor.isActive('textStyle', { color: '#ffffff' }) ? 'bg-custom-gray-800' : ''}`}
                isIconOnly
            >
                <svg width="70%" height="70%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14C4 12.9391 4.20651 11.9264 4.58152 11C5.76829 8.06817 12 2 12 2C12 2 18.2317 8.06817 19.4185 11C19.7935 11.9264 20 12.9391 20 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Button>
            <Button
                onClick={() => editor.chain().focus().setColor('#958DF1').run()}
                className={`text-[#958DF1] ${editor.isActive('textStyle', { color: '#958DF1' }) ? 'bg-custom-gray-800' : ''}`}
                isIconOnly
            >
                <svg width="70%" height="70%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14C4 12.9391 4.20651 11.9264 4.58152 11C5.76829 8.06817 12 2 12 2C12 2 18.2317 8.06817 19.4185 11C19.7935 11.9264 20 12.9391 20 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Button>
            </div>
            <div className="flex flex-wrap md:justify-start justify-end">
                <ButtonGroup>
                    <Button
                        isIconOnly
                        onClick={() => editor.chain().focus().undo().run()}
                        disabled={
                            !editor.can()
                                .chain()
                                .focus()
                                .undo()
                                .run()
                        }
                    >
                        <svg width="70%" height="70%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 14L4 9M4 9L9 4M4 9H10.4C13.7603 9 15.4405 9 16.7239 9.65396C17.8529 10.2292 18.7708 11.1471 19.346 12.2761C20 13.5595 20 15.2397 20 18.6V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Button>
                    <Button
                        isIconOnly
                        onClick={() => editor.chain().focus().redo().run()}
                        disabled={
                            !editor.can()
                                .chain()
                                .focus()
                                .redo()
                                .run()
                        }
                    >
                        <svg width="70%" height="70%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 20V18.6C4 15.2397 4 13.5595 4.65396 12.2761C5.2292 11.1471 6.14708 10.2292 7.27606 9.65396C8.55953 9 10.2397 9 13.6 9H20M20 9L15 14M20 9L15 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    )
}





const TipTap = ({ setTextState, textState, limit=null }) => {
    let content = ``
    if (textState) {
        content = textState
    }

    const extensions = [
        Color.configure({ types: [TextStyle.name, ListItem.name] }),
        TextStyle.configure({ types: [ListItem.name] }),
        Underline.configure(),
        Youtube.configure(),
        CharacterCount.configure({
            limit: limit
        }),
        StarterKit.configure({
            bulletList: {
                keepMarks: true,
                keepAttributes: false,
            },
            orderedList: {
                keepMarks: true,
                keepAttributes: false,
            },
        }),
        Link.configure({
            HTMLAttributes: {
                target: '_blank',
            },
        }),
    ];

    const handleUpdate = ({ editor }) => {
      const html = editor.getHTML();
      setTextState(html);
    };
    return (
        <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content} onUpdate={handleUpdate}></EditorProvider>
        // <div>
        // <MenuBar editor={editor} />
        // <EditorContent editor={editor} />
        // </div>
    )
}
export default TipTap