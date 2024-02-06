"use client";
import { TrashIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import {useState} from "react";
import { Editor, EditorState, convertToRaw, RichUtils } from 'draft-js';
import "draft-js/dist/Draft.css"
import Formatbar from "@/app/dashboard/ui/formatbar";
import "../titles.css"
import { v4 as uuidv4 } from 'uuid';
import Photodropzone from "@/app/dashboard/ui/photodropzone";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
export default function Postcomponent({ type, id, removePostComponent, components, setComponents }) {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [urlFilm, setUrlFilm] = useState("")
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [showSendItemList, setShowSendItemList] = useState(true)
    const handleChange = (newEditorState) => {
        const contentState = editorState.getCurrentContent();
        const rawContent = convertToRaw(contentState);
        if (components.some(component => component.id === id)) {
            const component = components.find(item => item.id === id)
            const updateComponent = {...component , value: rawContent }
            console.log(rawContent)
            const updateComponents = updateObjectInTable(id, updateComponent)
            setComponents(updateComponents)


        } else {
            const element = {
                id: id,
                type: type,
                value: rawContent
            }
            setComponents(components.concat(element))
        }

        setEditorState(newEditorState);
    };
    const sendPhoto = (imageFile) => {
        setPhotos([imageFile])
        setUploadedFiles([imageFile])
        if (components.some(component => component.id === id)) {
            const component = components.find(item => item.id === id)
            const updateComponent = {...component, url: uuidv4() }
            const updateComponents = updateObjectInTable(id, updateComponent)
            setComponents(updateComponents)
        } else {
            const element = {
                id: id,
                type: type,
                url: uuidv4()
            }
            console.log(imageFile)
            setComponents(components.concat(element))
        }
    }
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
    const newUrlFilm = (e) => {
        setUrlFilm(e.target.value)
        const youtubeLink = e.target.value
        const newEmbedLink = youtubeLink.replace('watch?v=', 'embed/');
        if (components.some(component => component.id === id)) {
            const component = components.find(item => item.id === id)
            const updateComponent = {...component , url: newEmbedLink }
            const updateComponents = updateObjectInTable(id, updateComponent)
            setComponents(updateComponents)
        }
        else {
            const element = {
                id: id,
                type: type,
                url: urlFilm
            }
            setComponents(components.concat(element))
        }
        console.log(urlFilm)
    }


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
        }

        setEditorState(newEditorState);
    };
    const removeFile = (index) => {
        const updatedFiles = [...uploadedFiles];
        updatedFiles.splice(index, 1);
        setUploadedFiles(updatedFiles);
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
                    <Editor editorState={editorState} onChange={handleChange}/>
                    </div>
                </div>
                <div className="h-full">
                    <button className="bg-red-500 p-1 rounded-md border-2 border-red-500 hover:bg-custom-gray-800 group" title="usuń element" onClick={() => removePostComponent(id)}><TrashIcon className="h-6 w-6 text-white group-hover:text-red-500" /></button>
                </div>
            </div>
            )
        case "photo":
            return (
                <div className="bg-custom-gray-800 p-2 rounded-md">
                    <div className="w-full flex gap-2 items-end">
                        <div className="w-full flex flex-col gap-2">
                        <div className="w-full flex justify-end text-custom-gray-600 text-2xl font-medium">
                            ZDJĘCIE
                        </div>
                        <Photodropzone onImageDrop={sendPhoto} type="photo"/>
                        </div>
                        <div className="h-full">
                            <button className="bg-red-500 p-1 rounded-md border-2 border-red-500 hover:bg-custom-gray-800 group" title="usuń element" onClick={() => removePostComponent(id)}><TrashIcon className="h-6 w-6 text-white group-hover:text-red-500" /></button>
                        </div>
                    </div>
                    {uploadedFiles.length > 0 && (
                    <div>
                        <h4 className="text-center text-lg">Przesłane pliki:</h4>
                        <ul>
                            {uploadedFiles.map((file, index) => (
                                <li key={index} className="flex bg-custom-gray-700 rounded-md p-2 justify-between">
                                    <span>{file[0].name} - {file[0].size} bytes</span>
                                    <img src={URL.createObjectURL(file[0])} width={200} className="rounded-md" alt={file[0].name} />
                                    <button className="bg-red-500 p-1 rounded-md border-2 border-red-500 hover:bg-custom-gray-800 group" title="usuń element" onClick={() => removeFile(index)}><TrashIcon className="h-6 w-6 text-white group-hover:text-red-500" /></button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    )}
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
                            <Photodropzone onImageDrop={sendFile} type="slider"/>
                        </div>
                        <div className="h-full">
                            <button className="bg-red-500 p-1 rounded-md border-2 border-red-500 hover:bg-custom-gray-800 group" title="usuń element" onClick={() => removePostComponent(id)}><TrashIcon className="h-6 w-6 text-white group-hover:text-red-500" /></button>
                        </div>
                    </div>
                    <div>
                        {uploadedFiles.length > 0 && (
                            <div className="flex flex-col gap-2 mt-2">
                                <div className="flex justify-between">
                                <h4 className="text-center text-lg">{uploadedFiles.length} przesłanych zdjęć</h4>
                                <button className="text-blue-500 border-2 border-blue-500 p-1 rounded-md hover:bg-blue-500 hover:text-custom-gray-800" onClick={() => setShowSendItemList(!showSendItemList)}>{showSendItemList ? <EyeSlashIcon className="w-6 h-6"/> : <EyeIcon className="w-6 h-6"/>}</button>
                                </div>
                                {showSendItemList && (
                                <ThemeProvider theme={theme}>
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth:640}} aria-label={"table photos"}>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center">LP.</TableCell>
                                                    <TableCell>NAZWA PLIKU</TableCell>
                                                    <TableCell align="center">WAGA</TableCell>
                                                    <TableCell>LINK</TableCell>
                                                    <TableCell align="center">OPCJE</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {
                                                    uploadedFiles.map((file, index) => (
                                                        <TableRow key={index}>
                                                            <TableCell align="center">{index + 1}</TableCell>
                                                            <TableCell>{file.files.name}</TableCell>
                                                            <TableCell align="center">{( file.files.size / 8000).toFixed(2)} kb</TableCell>
                                                            <TableCell>{file.url}</TableCell>
                                                            <TableCell align="center">
                                                                <button className="bg-red-500 p-1 rounded-md border-2 border-red-500 hover:bg-custom-gray-800 group" title="usuń element" onClick={() => removeFile(index)}><TrashIcon className="h-4 w-4 text-white group-hover:text-red-500" /></button>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))
                                                }

                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </ThemeProvider>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )
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
                    <input name="url" placeholder="link do filmu na youtube" type="text" value={urlFilm} onChange={newUrlFilm} className="bg-custom-gray-900 focus:outline-none p-2 rounded-md"/>
                </div>
                <div className="h-full">
                    <button className="bg-red-500 p-1 rounded-md border-2 border-red-500 hover:bg-custom-gray-800 group" title="usuń element" onClick={() => removePostComponent(id)}><TrashIcon className="h-6 w-6 text-white group-hover:text-red-500" /></button>
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
                        <Photodropzone onImageDrop={sendFile} type="files"/>
                    </div>
                    <div className="h-full">
                        <button className="bg-red-500 p-1 rounded-md border-2 border-red-500 hover:bg-custom-gray-800 group" title="usuń element" onClick={() => removePostComponent(id)}><TrashIcon className="h-6 w-6 text-white group-hover:text-red-500" /></button>
                    </div>
                </div>
            )
    }
}
