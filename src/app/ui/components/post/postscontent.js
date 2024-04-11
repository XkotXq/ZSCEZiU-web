"use client"

import parser from "html-react-parser"
import "../../parseStyle.css"
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid";
import Image from "next/image";
import {useState} from "react";
import ImageSlider from "@/app/ui/components/imageSlider";
export default function PostsContent({ type, data }) {
    const [activePhoto, setActivePhoto] = useState(0)
    console.log(data.length)
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
    console.log(data)
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
                // <div className="flex flex-col items-center my-4">
                //     <div className="relative select-none group rounded-md overflow-hidden">
                //         {data.length > 1 && (
                //             <>
                //                 <div className="absolute left-1/2 -translate-x-1/2 bottom-0 p-2 bg-black rounded-t-md bg-opacity-50 group-hover:opacity-100 transition-all opacity-0 delay-200">{activePhoto + 1} z {data.length}</div>
                //                 <div className="absolute left-0 h-full group/btn flex justify-center items-center bg-opacity-0 group-hover:bg-opacity-50 bg-black transition-all" onClick={previousImg}><ChevronLeftIcon className="h-10 w-10 text-white group-hover/btn:animate-pulse text-opacity-0 group-hover:text-opacity-100 transition-all" /></div>
                //                 <div className="absolute right-0 h-full group/btn flex justify-center items-center bg-opacity-0 group-hover:bg-opacity-50 bg-black transition-all" onClick={nextImg}><ChevronRightIcon className="h-10 w-10 text-white group-hover/btn:animate-pulse text-opacity-0 group-hover:text-opacity-100 transition-all" /></div>
                //             </>
                //         )}
                //         <Image src={data[activePhoto]} alt={data[activePhoto]} height={500} width={600} className="object-contain max-h-[500px]"/>
                //     </div>
                // </div>
                <ImageSlider urls={data} />
            )
        case "video":
            const newEmbedLink = data.replace('watch?v=', 'embed/') || data;
            return (
                <div className="rounded-md overflow-hidden mx-auto">
                    <iframe
                        width="560"
                        height="315"
                        src={newEmbedLink}
                        frameBorder="0"
                        allowFullScreen
                        title="Embedded YouTube Video"
                    ></iframe>
                </div>
            )
        case "file":
            return (
                <div></div>
            )

    }
}