"use client";
import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";
export default function Post({ title, tag, date, index, id }) {
    const handleDeletePost = (title) => {
        console.log("usuwam post " + title)
    }
    return (
        <div className="grid grid-cols-[auto_1fr_auto_200px_auto] gap-2 w-full bg-custom-gray-900 border-b-2 border-custom-gray-500 p-2 items-center hover:bg-custom-gray-800">
            <div>
                {index}
            </div>

                <div className="flex">
                    <a href={"/posty/" + id} target={"_blank"} className="h-full">
                        {title}
                    </a>
                </div>
            <div>
                <div className="rounded-full bg-white text-custom-gray-900 text-xs  px-2 py-1 font-medium">{tag}</div>
            </div>
            <div>
                {date}
            </div>
            <div className="flex gap-2">
                <a href={"/dashboard/posts/edit/" + id} className="hover:bg-blue-500 px-2 py-1 rounded-md hover:text-custom-gray-800 border-2 border-blue-500 bg-custom-gray-800 text-blue-500">edytuj</a>
                <button className="bg-red-500 px-2 py-1 rounded-md text-custom-gray-800 border-2 border-red-500 hover:bg-custom-gray-800 hover:text-red-500" onClick={() => handleDeletePost(title)}><TrashIcon className="h-6 w-6" /></button>
            </div>


        </div>
    )
}