import PhotoBar from "@/app/ui/Sections/photobar";
import Post from "@/app/ui/components/post";
import {Card, Skeleton} from "@nextui-org/react";
import Skeletonpost from "@/app/ui/components/post/skeletonPost";

export default function Loading() {
    const path = [
        {
            name: "główna",
            url: "/"
        },
        {
            name: "posty",
        }
    ]
    return (
        <div className="flex flex-col gap-2">
            <PhotoBar path={path}/>
            <div className="rounded-md text-center p-5 bg-custom-gray-800 flex justify-center items-center text-2xl">Posty</div>
            <div className="grid grid-cols-3 gap-2 grow mx-auto">
                <Skeletonpost/>
                <Skeletonpost/>
                <Skeletonpost/>
                <Skeletonpost/>
                <Skeletonpost/>
                <Skeletonpost/>
                <Skeletonpost/>
                <Skeletonpost/>
                <Skeletonpost/>
            </div>

        </div>
    )
}