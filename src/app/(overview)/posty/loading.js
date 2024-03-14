import PhotoBar from "@/app/ui/Sections/photobar";
import Post from "@/app/ui/components/post";
import {Card, Skeleton, Pagination} from "@nextui-org/react";
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
            <div className="gap-1 flex mx-auto my-5">
                <Skeleton className="rounded-medium">
                    <div className="w-10 h-10"></div>
                </Skeleton>
                <Skeleton className="rounded-medium">
                    <div className="w-10 h-10"></div>
                </Skeleton>
                <Skeleton className="rounded-medium">
                    <div className="w-10 h-10"></div>
                </Skeleton>
                <Skeleton className="rounded-medium">
                    <div className="w-10 h-10"></div>
                </Skeleton>
                <Skeleton className="rounded-medium">
                    <div className="w-10 h-10"></div>
                </Skeleton>
                <Skeleton className="rounded-medium">
                    <div className="w-10 h-10"></div>
                </Skeleton>
                <Skeleton className="rounded-medium">
                    <div className="w-10 h-10"></div>
                </Skeleton>
            </div>
        </div>

    )
}