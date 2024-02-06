"use client";
import {useEffect, useState} from "react";
import axios from "axios";
import Boxtag from "@/app/dashboard/ui/boxtag";
import Photodropzone from "@/app/dashboard/ui/photodropzone";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import Post from "@/app/ui/components/post";
import {format} from "date-fns";
import {pl} from "date-fns/locale";
import NotesRoundedIcon from "@mui/icons-material/NotesRounded";
import {BookmarkIcon, DocumentIcon, PhotoIcon, VideoCameraIcon} from "@heroicons/react/20/solid";
import Postcomponent from "@/app/dashboard/ui/post/postcomponent";
import EditPostComponent from "@/app/dashboard/ui/post/editPostComponent";

export default function page({ params }) {
    const [content, setContent] = useState([])
    const [newTitle, setNewTitle] = useState("Ładowanie...")
    const [newDesc, setNewDesc] = useState("Ładowanie...")
    const [img, setImg] = useState("")
    const [activeTag, setActiveTag] = useState("ZSCEZiU")

    const today = new Date();
    const formattedDate = format(today, 'd MMMM yyyy', { locale: pl });
    useEffect(() => {
    axios
        .get(`http://localhost:3001/api/posts/${params.postId}`)
        .then(res => {
            console.log(res.data.content)
            setContent(res.data.content)
            setNewTitle(res.data.title)
            setNewDesc(res.data.desc)
            setActiveTag(res.data.tags)
        })
    }, []);

    const addPostComponent = () => {
        console.log("działa")
    }

        return (
        <div className="flex flex-col gap-2">
            <div className="bg-custom-gray-900 w-full rounded-md p-2 flex justify-between">
                <h2 className="text-2xl">Edytowanie postu</h2>
                <p className="text-custom-gray-600 text-lg">{params.postId}</p>
            </div>
            <div className="flex gap-2">
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
                        <button className="bg-blue-500 border-blue-500 border-2  p-1 rounded-md flex gap-2 hover:bg-blue-600">zapisz <SaveRoundedIcon /></button>
                    </div>
                </div>
                <div>
                    <Post title={newTitle} date={formattedDate} img={img ? URL.createObjectURL(img) : "/assets/default-image.jpg"} tags={[activeTag]} desc={newDesc} />
                </div>
            </div>
            <div className="bg-custom-gray-900 w-full rounded-md p-2 flex items-center justify-between sticky top-0 z-20">
                <div className="flex gap-2">
                    <button className="bg-white rounded-md bg-opacity-0 hover:bg-opacity-20 p-2 flex gap-1" onClick={() => addPostComponent("desc")}><NotesRoundedIcon/> tekst</button>
                    <button className="bg-white rounded-md bg-opacity-0 hover:bg-opacity-20 p-2 flex gap-1" onClick={() => addPostComponent("photo")}><PhotoIcon className="h-6 w-6 text-white" /> zdjęcie</button>
                    <button className="bg-white rounded-md bg-opacity-0 hover:bg-opacity-20 p-2 flex gap-1" onClick={() => addPostComponent("slider")}><BookmarkIcon className="h-6 w-6 text-white" /> album zdjęć</button>
                    <button className="bg-white rounded-md bg-opacity-0 hover:bg-opacity-20 p-2 flex gap-1" onClick={() => addPostComponent("video")}><VideoCameraIcon className="h-6 w-6 text-white" /> film z youtube</button>
                    <button className="bg-white rounded-md bg-opacity-0 hover:bg-opacity-20 p-2 flex gap-1" onClick={() => addPostComponent("file")}><DocumentIcon className="h-6 w-6 text-white" /> plik do pobrania</button>
                </div>
                <div>
                    <p className="text-custom-gray-600 text-lg">edytowanie zawartości</p>
                </div>
            </div>
            <div className="w-full">
                <div className="min-h-[150px] relative p-2 flex flex-col gap-2">
                    {content.length === 0 ? (<p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-custom-gray-700 font-medium">brak elementów, dodaj nowe</p>)
                        : (content.map((item) => <EditPostComponent key={item.id} type={item.type} value={item.value} />))
                    }
                </div>
            </div>

        </div>
    )
}