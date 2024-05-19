"use client";
import { useSearchParams } from "next/navigation";
import PhotoBar from "../../ui/Sections/photobar";
import SearchContent from "./searchContent";
import {useEffect, useState} from "react";
import {Link} from "@nextui-org/react";

function truncateIfNecessary(value, maxLength) {
    if (value?.length > maxLength) {
        value = value.slice(0, maxLength);
        if (value.endsWith(' ')) {
            value = value.slice(0, -1);
        }
        return value + '...';
    }
    return value;
}


export default function page() {
    const searchParams = useSearchParams()
    const [data, setData] = useState({posts: [], subpages: []})
    const [posts, setPosts] = useState([])
    const [subpages, setSubpages] = useState([])
    const [isFetched, setIsFetched] = useState(false)
    const querry = searchParams.get("q")

    const getContent = async () => {
        setIsFetched(false)
        const res = await fetch(`http://localhost:3000/api/search?q=${querry}`);
        const formatted = await res.json()
        const found = formatted.found
        if (formatted) {
            setData(found)
            setPosts(found.posts)
            setSubpages(found.subpages)
            console.log(found.subpages)
            setIsFetched(true)
        }
    };


    useEffect(() => {
        if (querry !== "")
        getContent()
    }, [querry]);


    const path = [
        {
            name: "główna",
            url: "/"
        },
        {
            name: "wyszukiwanie",
            url: "/search"
        },
        {
            name: querry ? truncateIfNecessary(querry, 30) : "brak hasła do wyszukania"
        }
    ]
    console.log("test", posts, isFetched)
    return (
        <div>
            <PhotoBar path={path}/>
            <div>
                {data && (posts.length + subpages.length) > 0 ? (
                    <>
                        <div>
                            <p>Posty</p>
                            {posts.map(item => (
                                <Link href={`/posty/${item.id}`} key={item.id} className="rounded-lg p-2 bg-">{item.title}</Link>
                            ))}
                        </div>
                        <div>
                            <p>Podstrony</p>
                            {subpages.map(item => (
                                <Link href={item?.component === "nav-4" ? `/zawody/${item.path}` : item.path} key={item.id} className="rounded-lg p-2">{item.title}</Link>
                            ))}
                        </div>
                    </>
                    ): isFetched ? (
                        <div className="w-full py-10 text-center text-2xl">Brak wyników</div>
                    ) : (
                        <div className="w-full py-10 text-center">Ładowanie...</div>
                    )
                }
                {/*<SearchContent params={querry}/>*/}
                    </div>
        </div>
    )
}