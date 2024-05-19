"use client"

import parser from "html-react-parser"
import "../../parseStyle.css"
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid";
import {Image} from "@nextui-org/react";
import {useState} from "react";
import ImageSlider from "../imageSlider";
export default function PostsContent({ type, data }) {
    const [activePhoto, setActivePhoto] = useState(0)
    const length = data.length
    const previousImg = () => {
        if (activePhoto === 0) {
            setActivePhoto(data.length - 1)
        } else{
            setActivePhoto(activePhoto - 1)
        }
    }
    const nextImg = () => {
        if (activePhoto === data.length - 1) {
            setActivePhoto(0)
        } else {
            setActivePhoto(activePhoto + 1)
        }
    }
    switch (type) {
        case "desc":
            return (
                <div className="boxParse">
                    {parser(data)}
                </div>
            )
        case "photo":
            return (
                <div></div>
            )
        case "slider":
            return (
               <div className="w-full flex justify-center">
                   {length === 1 ? (
                       <Image src={data[0]} alt="pojedczyncze zdjecie" className="rounded-lg overflow-hidden max-w-full object-contain"/>
                   ) : (
                       <ImageSlider urls={data} />
                   )
                   }
               </div>
            )
        case "file":
            return (
                <div></div>
            )

    }
}