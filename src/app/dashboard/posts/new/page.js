"use client";
import {useState} from "react";
import Postcomponent from "@/app/dashboard/ui/post/postcomponent";
import { v4 as uuidv4 } from 'uuid';
import NotesRoundedIcon from '@mui/icons-material/NotesRounded';
import { PhotoIcon, BookmarkIcon, VideoCameraIcon, PaperAirplaneIcon, DocumentIcon, BackwardIcon  } from "@heroicons/react/20/solid";
import Photodropzone from "@/app/dashboard/ui/photodropzone";
import Post from "@/app/ui/components/post";
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import Boxtag from "@/app/dashboard/ui/boxtag";
import Snackbar from '@mui/material/Snackbar';
import axios from "axios";

export default function page() {
    const [postComponents, setPostComponents] = useState([])
    const [img, setImg] = useState(null)
    const [newTitle, setNewTitle] = useState("")
    const [newDesc, setNewDesc] = useState("")
    const [posts, setPosts] = useState({})
    const [components, setComponents] = useState([])
    const [primaryConfig, setPrimaryConfig] = useState(true)
    const [activeTag, setActiveTag] = useState("ZSCEZiU")
    const [state, setState] = useState(false);

    const today = new Date();
    const formattedDate = format(today, 'd MMMM yyyy', { locale: pl });
    const handleClose = () => {
        setState(false);
    };
    const addPostComponent = (typeComponent) => {
        const postComponent = {
            id: uuidv4(),
            type: typeComponent
        }
        setPostComponents(postComponents.concat(postComponent))
    }
    const removePostComponent = (id) => {
        setPostComponents(postComponents.filter(postComponent => postComponent.id !== id))
        if (components.some(component => component === id)) setComponents(component.filter(component => component.id !== id))
    }
    const addDataPost = () => {
        if (newTitle === "" || newDesc === "") {
            setState(true)
            return;
        }
        let imgUrl
        if (img) {
            return
        } else {
            imgUrl = "/assets/default-image.jpg"
        }
        const primaryPostData = {
            id: uuidv4(),
            title: newTitle,
            tags: [activeTag],
            date: formattedDate,
            img: imgUrl,
            desc: newDesc,
            content: []
        }
        setPosts(primaryPostData)
        setPrimaryConfig(!primaryConfig)
    }
    const sendPost = () => {
        const readyPost = {...posts, content: components }
        console.log(readyPost)
        axios.post("http://localhost:3001/api/posts", readyPost)
            .then(res => {
                console.log("wysłano")
            })
            .catch(error => {
                console.error("error dlaczego", error)
            })
    }
    return (
        <div className="flex flex-col gap-2">
                <div className="bg-custom-gray-900 w-full rounded-md p-2 flex justify-between">
                    <h2 className="text-2xl">Tworzenie postu</h2>
                    <p className="text-custom-gray-600 text-lg">{primaryConfig ? ("podstawowe dane") : ("dodawnanie zawartości postu")}</p>
                </div>
            {primaryConfig ? (

            <div>
                <div className="flex gap-2 h-full">
                    <div className="w-full bg-custom-gray-900 rounded-md p-2  flex flex-col justify-between">
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="title">Tytuł postu</label>
                            <input type="text" name="title" className="bg-custom-gray-800 focus:outline-none p-2 rounded-md" maxLength={90} value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="tytuł"/>
                            <Boxtag activeTag={activeTag} setActiveTag={setActiveTag}/>
                            <label>Wybierz zdjęcie</label>
                            <Photodropzone onImageDrop={(imageFile) => setImg(imageFile)} type="photo"/>
                            <label htmlFor="desc">Opis postu</label>
                            <input type="text" name="desc" className="bg-custom-gray-800 focus:outline-none p-2 rounded-md" maxLength={90} value={newDesc} onChange={(e) => setNewDesc(e.target.value)} placeholder="opis"/>

                        </div>
                            <div className="flex justify-end">
                                <button className="bg-blue-500 border-blue-500 border-2  p-1 rounded-md flex gap-2 hover:bg-blue-600" onClick={addDataPost}>zapisz <SaveRoundedIcon /></button>
                            </div>
                    </div>
                    <div>
                        <Post title={newTitle} date={formattedDate} img={img ? URL.createObjectURL(img) : "/assets/default-image.jpg"} tags={[activeTag]} desc={newDesc} />
                    </div>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    open={state}
                    onClose={handleClose}
                    message="Pola tytuł i opis nie mogą być puste"
                />
            </div>
            ) : (
            <div>
                <div className="bg-custom-gray-900 w-full rounded-md p-2 flex items-center justify-between sticky top-0 z-20">
                    <div className="flex gap-2">
                        <button className="bg-white rounded-md bg-opacity-0 hover:bg-opacity-20 p-2 flex gap-1" onClick={() => addPostComponent("desc")}><NotesRoundedIcon/> tekst</button>
                        <button className="bg-white rounded-md bg-opacity-0 hover:bg-opacity-20 p-2 flex gap-1" onClick={() => addPostComponent("photo")}><PhotoIcon className="h-6 w-6 text-white" /> zdjęcie</button>
                        <button className="bg-white rounded-md bg-opacity-0 hover:bg-opacity-20 p-2 flex gap-1" onClick={() => addPostComponent("slider")}><BookmarkIcon className="h-6 w-6 text-white" /> album zdjęć</button>
                        <button className="bg-white rounded-md bg-opacity-0 hover:bg-opacity-20 p-2 flex gap-1" onClick={() => addPostComponent("video")}><VideoCameraIcon className="h-6 w-6 text-white" /> film z youtube</button>
                        <button className="bg-white rounded-md bg-opacity-0 hover:bg-opacity-20 p-2 flex gap-1" onClick={() => addPostComponent("file")}><DocumentIcon className="h-6 w-6 text-white" /> plik do pobrania</button>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex gap-1 justify-center items-center bg-blue-500 p-1 rounded-md border-2 border-blue-500 hover:bg-custom-gray-900 text-custom-gray-900 hover:text-blue-500" onClick={() => setPrimaryConfig(true)}><BackwardIcon className="h-6 w-6" />WSTECZ</button>
                        <button className="flex gap-1 justify-center items-center bg-green-500 p-1 rounded-md border-2 border-green-500 hover:bg-custom-gray-900 text-custom-gray-900 hover:text-green-500" onClick={sendPost}>STWÓRZ<PaperAirplaneIcon className="h-6 w-6" /></button>
                    </div>
                </div>
                <div className="w-full">
                    <div className="min-h-[150px] relative p-2 flex flex-col gap-2">
                        {postComponents.length === 0 ? (<p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-custom-gray-700 font-medium">brak elementów, dodaj nowe</p>)
                            : (postComponents.map((component) => <Postcomponent key={component.id} type={component.type} id={component.id} removePostComponent={removePostComponent} components={components} setComponents={setComponents}/>))
                        }
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}
