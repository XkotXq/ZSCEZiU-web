import { Skeleton} from "@nextui-org/react";
import Skeletonpost from "../../ui/components/post/skeletonPost";

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
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 grow mx-auto">
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
                    <div className=" h-10 max-w-64 w-full"></div>
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
        </>

    )
}