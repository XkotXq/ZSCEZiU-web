"use client";
import Link from "next/link";
import Linkify from 'linkify-react';
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

import Image from "next/image";
import {useState} from "react";

export default function Mediacontent({ type, data }) {
    const renderLink = ({ attributes, content }) => {
        const { href, ...props } = attributes;
        const noprotocol = content.replace(/^https?:\/\//, '');
        return <a href={href} target="_blank" className="text-custom-gray-50 hover:underline"  {...props}>{noprotocol}</a>;
    };
    const [activePhoto, setActivePhoto] = useState(0)

    const previousImg = () => {
        if (activePhoto === 0) {
            setActivePhoto(data.photos.length - 1)
        } else{
            setActivePhoto(activePhoto - 1)
        }
    }
    const nextImg = () => {
        if (activePhoto === data.photos.length - 1) {
            setActivePhoto(0)
        } else {
            setActivePhoto(activePhoto + 1)
        }
    }

    switch (type) {
        case "text":
            return (
                <div className="text-custom-gray-300">
                    <h2 className="text-2xl font-bold py-2 text-custom-gray-200">{data.title}</h2>
                    {data.parts.map((part, index) => <div className="ml-6 mb-4" key={index}><Linkify options={{ render: renderLink }}>{part}</Linkify>
                    </div>)}
                </div>


        )
        case "file":
            return (
                <div className="flex gap-2 flex-col my-4">
                    <h3 className="text-xl font-medium text-custom-gray-300">Pliki do pobrania</h3>
                    <div className="flex gap-2 flex-wrap">
                        {data.files.map(file =>
                            <div key={file.value} className="flex bg-custom-gray-700 rounded-md text-custom-gray-50 hover:text-custom-gray-100 hover:bg-black border-custom-gray-700 border-2" title={"pobierz " + file.value}>
                                <Link href={file.url} className="flex gap-2 items-center p-2" download>
                                    {file.value}
                                    <ArrowDownTrayIcon className="h-4 w-4" />
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )
        case "desc":
            return (
                <div className="text-custom-gray-300">
                    {data.parts.map((part, index) => <div className="ml-6 mb-4" key={index}><Linkify options={{ render: renderLink }}>{part}</Linkify>
                    </div>)}
                </div>
            )
        case "list":
            return (
                <div className="my-4 ml-6 text-custom-gray-300">
                    <ul className="list-disc">
                        {data.parts.map((part, index) => <li className="list-disc ml-5" key={index}>{part}</li>)}
                    </ul>
                </div>
            )
        case "photo":
            return(<div className="flex justify-center items-center flex-col gap-4">
                {data.photos.map(photo =>
                    <div key={photo.desc} className=" flex flex-col gap-2 font-medium text-custom-gray-200">
                        <p className="text-end text-xl">{photo.desc}</p>
                        <Image src={photo.url} alt={photo.desc} width={600} height={600} className="rounded-md"/>
                    </div>
                )}
            </div>)
        case "video":
            return(<div className="flex justify-center flex-col items-center gap-2 my-4">
                {data.videos.map((video, index) => <div key={index} className="rounded-md overflow-hidden">
                <iframe width="600" height="310" src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>)}
            </div>)
        case "slider":
            return(
                <div className="flex flex-col items-center my-4">
                    <div className="relative select-none group rounded-md overflow-hidden">
                        {data.photos[activePhoto].desc !== undefined && <div className="absolute left-1/2  -translate-x-1/2 top-0 p-2 bg-black rounded-b-md bg-opacity-50 duration-1000">{data.photos[activePhoto].desc}</div>}
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 p-2 bg-black rounded-t-md bg-opacity-50 group-hover:opacity-100 transition-all opacity-0 delay-200">{activePhoto + 1} z {data.photos.length}</div>
                        <div className="absolute left-0 h-full group/btn flex justify-center items-center bg-opacity-0 group-hover:bg-opacity-50 bg-black transition-all" onClick={previousImg}><ChevronLeftIcon className="h-10 w-10 text-white group-hover/btn:animate-pulse text-opacity-0 group-hover:text-opacity-100 transition-all" /></div>
                        <div className="absolute right-0 h-full group/btn flex justify-center items-center bg-opacity-0 group-hover:bg-opacity-50 bg-black transition-all" onClick={nextImg}><ChevronRightIcon className="h-10 w-10 text-white group-hover/btn:animate-pulse text-opacity-0 group-hover:text-opacity-100 transition-all" /></div>
                        <Image src={data.photos[activePhoto].url} alt={data.photos[activePhoto].desc} height={500} width={600} className="object-contain max-h-[500px]"/>
                    </div>
                </div>
            )
        case "quote":
            return (
                <div className="flex gap-2">
                    {data.quotes.map((quote, index) => <div key={index} className="bg-custom-gray-900 border-2 border-custom-gray-700 text-custom-gray-300 rounded-md p-2">
                        <p><b>„</b>{quote.quote}<b>”</b></p>
                        <p className="text-end">{quote.author}</p>
                    </div>)}
                </div>
            )
        case "title-m":
            return (
                <div>
                    <h2 className="text-xl font-bold py-2 text-custom-gray-200">{data.title}</h2>
                </div>
            )
        case "list-l":
            return (
                <div>
                    {data.parts.map((list, index) =>
                        <div key={index} className="my-2">
                            <h3 className="text-xl font-medium text-custom-gray-200">{list.title}</h3>
                            <div className="text-custom-gray-300 ml-2"><p>{list.desc}</p></div>
                        </div>
                    )}
                </div>
            )
    }


}



